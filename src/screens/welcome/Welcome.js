import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { SafeAreaView } from 'react-navigation';
import { Linking, ActivityIndicator, Text } from 'react-native';
import { Button, Divider, Container, Heading, VStack, Center, View, Spinner, Pressable, Box } from 'native-base';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import backgroundSave from '../../utils/backgroundSave';
import { MaterialDialog, SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';
import TopNavigation from '../../components/TopNavigation';

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
      this.unfinishedReportsPresent = false
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
      this.unfinishedReportsAbsent = this.stateManager.filePaths.length == 0
      console.log(this.stateManager.filePaths);
      console.log(this.stateManager.filePaths.length == 0)
//      this.checkAutoSavedSession();
      this.setState({ loading: false });
    }

    checkAutoSavedSession(){
        if (this.stateManager.filePaths != null) {
            this.setState({autoSavedSession : true, filePickerDialogBoxVisible: true});
            console.log('Detect unfinished reports!');
        } else {
            this.setState({ autoSavedSession: false, filePickerDialogBoxVisible: false });
            console.log('No unfinished report!');
        }
    }

    render() {
        const navigateTo = (loc) => {
           this.props.navigation.navigate(loc, {autoSavedSession: this.state.autoSavedSession, selectedFile: this.state.selectedFile});
         };
         if (this.state.loading) {
           return (
             <SafeAreaView style={styles.spinnerView}>
               <Spinner accessibilityLabel="Loading App"/>
             </SafeAreaView>
            );}
         else {
            return (
            <React.Fragment>
                <Center><TopNavigation title="RUINA" navigation = {this.props.navigation}/></Center>
                <Center flex={1} px="3">
                    <Box>
                        <Button onPress = {() => navigateTo('Survey')} size="lg" p={4}>Start New Report</Button>
                        <Button onPress = {() => this.checkAutoSavedSession()} size="lg" p={4} isDisabled={this.stateManager.filePaths.length === 0} mt={8}>Continue Report</Button>
                    </Box>
                </Center>
                <VStack alignItems="center" mb={8}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}><Text style={{ color: 'blue' }}>Submit Feedback</Text></TouchableOpacity>
                    <Text textAlign="center">
                      {"Built by students at Olin College of Engineering in partnership with the Volpe Center and Santos Family Foundation"}
                    </Text>
                 </VStack>

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

                            this.props.navigation.navigate('Survey', {autoSavedSession: true, selectedFile: result.selectedItem});
                        }}

                />
            </React.Fragment>
            )
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
