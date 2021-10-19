import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { SafeAreaView} from 'react-navigation';
import { Linking, ActivityIndicator, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import backgroundSave from '../../utils/backgroundSave';
import { MaterialDialog, SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';

import { resetDriver } from '../../actions/DriverAction';
import { resetNonmotorist } from '../../actions/NonmotoristAction';
import { resetPassenger } from '../../actions/PassengerAction';
import { resetVehicle } from '../../actions/VehicleAction';
import { resetRoad } from '../../actions/RoadAction';
import { resetQuiz } from '../../actions/QuickQuizActions';
import { resetMap } from '../../actions/MapAction';
import { resetStory } from '../../actions/StoryActions';
import { resetPhoto } from '../../actions/PhotoAction';

class Welcome extends Component {
    constructor(props){
      super(props);
      this.stateManager = new backgroundSave("", false);
      this.state = {
        loading: true,
        displayOutputTest: false,
        autoSavedSession: false,
        autoSavedSessionDialogBoxVisible: false,
        filePickerDialogBoxVisible: false,
        filePathSelected: false,
        selectedFile: {label: "", value: ""}
      };
    }

    async componentDidMount() {
      this.props.resetDriver();
      this.props.resetNonmotorist();
      this.props.resetPassenger();
      this.props.resetRoad();
      this.props.resetVehicle();
      this.props.resetQuiz();
      this.props.resetStory();
      this.props.resetMap();
      this.props.resetPhoto();
      await this.stateManager.getFilePaths();
      this.checkAutoSavedSession();
      this.setState({ loading: false });
    }

    checkAutoSavedSession(){
        if (this.stateManager.filePaths != null) {
            this.setState({autoSavedSession : true, autoSavedSessionDialogBoxVisible : true});
            console.log('Detect unfinished reports!');
        } else {
            this.setState({ autoSavedSession: false, autoSavedSessionDialogBoxVisible: false });
            console.log('No unfinished report!');
        }
    }

    render() {
        // logging hard reset of Rx store
        // const data = {
        //   driver: this.props.driver.data,
        //   nonmotorist: this.props.nonmotorist.data,
        //   vehicle: this.props.vehicle.data,
        //   passenger: this.props.passenger.data,
        //   road: this.props.road.data,
        //   quiz: this.props.quiz,
        // };
        // console.log("---------------------------Reducer Status Welcome Screen -----------------------------")
        // for (let d in data) {
        //   console.log(d, ": ", data[d]);
        // }

        const navigateTo = (loc) => {
          this.props.navigation.navigate(loc, {autoSavedSession: this.state.autoSavedSession, selectedFile: this.state.selectedFile});
          };
        if (this.state.loading) {
          return (
            <SafeAreaView style={styles.spinnerView}>
              <ActivityIndicator id="loadingScreen" size="large" color="#0000ff" />
            </SafeAreaView>
          );
        } else {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='RUINA' alignment='center' />
              <Divider />
              <Layout style={styles.centeredContainer}>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.styledButton} activeOpacity = { .7 } onPress={() => navigateTo('Survey')}>
                      <Text style={styles.btnText}>Start New Report</Text>
                  </TouchableOpacity>
                </View>
                {this.state.displayOutputTest && <Button style={styles.styledButton} onPress={() => navigateTo('OutputPDFTest')}>Test Output PDF</Button>}
              </Layout>
              <Layout style={styles.bottomBar}>
                <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}><Text style={{ color: 'blue' }}>Submit Feedback</Text></TouchableOpacity>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering in partnership with the Volpe Center and Santos Family Foundation"}
                </Text>
              </Layout>

              <MaterialDialog
                title={"Resume Unfinished Session?"}
                visible={this.state.autoSavedSessionDialogBoxVisible}
                okLabel='YES'
                cancelLabel = 'NO'
                onCancel={() => {
                  this.setState({ autoSavedSession: false, autoSavedSessionDialogBoxVisible: false });
                }}
                onOk={() => {
                  this.setState({ autoSavedSession: true,
                                  autoSavedSessionDialogBoxVisible: false,
                                  filePickerDialogBoxVisible: true });
                }}
              >
                <Text style={material.subheading}>
                  Your last session was interrupted unexpectedly. Would you like to resume from where you left off?
                </Text>
              </MaterialDialog>

              <SinglePickerMaterialDialog
                    title={"Choose the unfinished report you want to continue"}
                    scrolled
                    items={this.stateManager.filePaths.map((row, index) => ({ value: index, label: row}))}
                    visible={this.state.filePickerDialogBoxVisible}
                    selectedItem = {this.state.selectedFile}
                    onCancel = {() => this.setState({ filePickerDialogBoxVisible: false })}
                    onOk = { result => {
                            this.setState({ filePathSelected: true,
                                            filePickerDialogBoxVisible: false,
                                            selectedFile: result.selectedItem,
                                            autoSavedSession: true });

                            console.log("Selected item from material dialog:", result.selectedItem);
                            this.props.navigation.navigate('Survey', {autoSavedSession: true, selectedFile: result.selectedItem});
                        }}

              />


            </SafeAreaView>
          );

        }

    }
};

const mapDispatchToProps = {
  resetDriver,
  resetNonmotorist,
  resetPassenger,
  resetVehicle,
  resetRoad,
  resetQuiz,
  resetStory,
  resetMap,
  resetPhoto,
}

const mapStateToProps = (state, action) => {
  return {
      driver: state.driverReducer,
      nonmotorist: state.nonmotoristReducer,
      vehicle: state.vehicleReducer,
      passenger: state.passengerReducer,
      quiz: state.quickquizReducer,
      road: state.roadReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

//export default Welcome;
