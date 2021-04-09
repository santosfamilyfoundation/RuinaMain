import React, { Component } from 'react';
import { SafeAreaView} from 'react-navigation';
import { Linking, ActivityIndicator} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import backgroundSave from '../../utils/backgroundSave';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';

class Welcome extends Component {
    constructor(props){
      super(props);
      this.stateManager = new backgroundSave();
      this.state = {
        loading: true,
        autoSavedSession: false,
        autoSavedSessionDialogBoxVisible: false,
      };
    }

    async componentDidMount() {
      await this.checkAutoSavedSession();
      this.setState({ loading: false });
    }

    async checkAutoSavedSession(){
      this.stateManager.RNFS.exists(this.stateManager.path).then((exists) => {
        if (exists) {
          this.setState({autoSavedSession : true, autoSavedSessionDialogBoxVisible : true});
          console.log('Detect unfinished report!')
        } else {
          this.setState({ autoSavedSession: false, autoSavedSessionDialogBoxVisible: false });
          console.log('No unfinished report!')
        }
      })
    }

    render() {
        const {
          navigation,
          edit,
          driver,
          nonmotorist,
          vehicle,
          passenger,
          road
        } = this.props

        const data = {
          driver: this.props.driver.data,
          nonmotorist: this.props.nonmotorist.data,
          vehicle: this.props.vehicle.data,
          passenger: this.props.passenger.data,
          road: this.props.road.data,
          quiz: this.props.quiz,
        };
        console.log("---------------------------Reducer Status Welcome Screen -----------------------------")
        for (let d in data) {
          console.log(d, ": ", data[d]);
        }

        const navigateTo = (loc) => {
          this.props.navigation.navigate(loc, {autoSavedSession: this.state.autoSavedSession});
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
              <TopNavigation title='Welcome' alignment='center' />
              <Divider />
              <Layout style={styles.centeredContainer}>
                <Button style={styles.styledButton} onPress={() => navigateTo('Survey')}>Start New Report</Button>
              </Layout>
              <Layout style={styles.bottomBar}>
                <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}><Text style={{ color: 'blue' }}>Submit Feedback</Text></TouchableOpacity>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering 2020"}
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
                  this.setState({ autoSavedSession: true, autoSavedSessionDialogBoxVisible: false });
                  navigateTo('Survey');
                }}
              >
                <Text style={material.subheading}>
                  Your last session was interrupted unexpectedly. Would you like to resume from where you left off?
                </Text>
              </MaterialDialog>


            </SafeAreaView>
          );

        }
        
    }
};

const mapStateToProps = (state) => {
  return {
      driver: state.driverReducer,
      nonmotorist: state.nonmotoristReducer,
      vehicle: state.vehicleReducer,
      passenger: state.passengerReducer,
      quiz: state.quickquizReducer,
      road: state.roadReducer,
  }
}

export default connect(mapStateToProps)(Welcome);

//export default Welcome;
