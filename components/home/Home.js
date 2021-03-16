import React, { Component } from 'react';
import { View, ScrollView, Keyboard, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './Home.style';
import {questions} from '../../data/questions';
import VehicleSection from './homeSections/VehicleSection';
import NonMotoristSection from './homeSections/NonMotoristSection';
import { addNonmotorist } from '../../actions/NonmotoristAction';
import { addVehicle } from '../../actions/VehicleAction';
import { addDriver } from '../../actions/DriverAction';
var uuid = require('react-native-uuid');
import backgroundSave from '../../utils/backgroundSave';

class Home extends Component {
    constructor(props) {
        super(props);

        this._addNonmotorist = this._addNonmotorist.bind(this);
        this._addVehicleSection = this._addVehicleSection.bind(this);

        this.state = {
            edit: props.edit || false
        }
    }

    // add nonmotorist to global state
    _addNonmotorist () {
      let nonmotoristID = uuid.v1();
      this.props.addNonmotorist({id: nonmotoristID});
    }

    // add a new vehicle section to global state (vehicle and driver)
    _addVehicleSection () {
      let vehicleID = uuid.v1(); // Generate a v1 (time-based) id
      let driverID = uuid.v1();
      this.props.addVehicle({vehicleID, driverID})
      this.props.addDriver({driverID, vehicleID})
    }

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }

    // add event listener for when user clicks Android back button
    componentDidMount() {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.handleBackButtonPressAndroid
      );
    }

    // remove event listener when user no longer in Home
    componentWillUnmount() {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButtonPressAndroid
      );
    }

    // basically do nothing when user clicks on Android back button
    // returning true means we have handled the event, and react-navigation's
    // listener will not get called, thus not popping the screen
    handleBackButtonPressAndroid = () => {
      return true;
    };

    render(){
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
        };
        console.log("---------------------------NEW UPDATE-----------------------------")
        console.log("props: ------------------------------------------")
        for (var ele in this.props) {
            console.log(ele, ": ", this.props[ele]);
        }
        console.log("data: --------------------------------------------")
        for (var d in data) {
            console.log(d, ": ", data[d]);
        }

        const captureState = new backgroundSave();
        captureState.captureCurrentState(this.props);
        
        //captureState.deleteCapturedState();

        // var RNFS = require('react-native-fs'); 
        // console.log(RNFS.DocumentDirectoryPath); // /data/user/0/com.ruina/files
        // // create a path you want to write to
        // var path = RNFS.DocumentDirectoryPath + '/unfinished_report.json';

        // // write the file
        // RNFS.writeFile(path, this.props, 'utf8')
        //     .then((success) => {
        //         console.log('FILE WRITTEN!');
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
        
        // RNFS.unlink(path)
        //     // spread is a method offered by bluebird to allow for more than a
        //     // single return value of a promise. If you use `then`, you will receive
        //     // the values inside of an array
        //     .spread((success, path) => {
        //         console.log('FILE DELETED', success, path);
        //     })
        //     // `unlink` will throw an error, if the item to unlink does not exist
        //     .catch((err) => {
        //         console.log(err.message);
        //     });




        let roadQuestions = this.filterQuestionsData('road');

        // navigate to question form
        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        const RoadHeader = () => (
            <CardHeader title="Crash and Roadway" />
        );

        // generate the vehicle section components based on global state
        let vehiclesListArr = vehicle.data.map((vehicle, index) => {
            const { edit } = this.state;
            return (
                <VehicleSection
                    edit = {edit}
                    key = {index}
                    navigation = {navigation}
                    vehicle = {vehicle}
                    index = {index}
                    name = {"Vehicle"}
                    passenger = {passenger}
                />
            )
          }
        )

        // generate nonmotorist cards based on global state
        let nonmotoristListArr = nonmotorist.data.map((nonmotorist, index) => {
            const { edit } = this.state;
            return (
                <NonMotoristSection
                    edit = {edit}
                    key = {index}
                    navigation = {navigation}
                    nonmotorist = {nonmotorist}
                    index = {index}
                />
            )
        })

        const NonMotoristHeader = () => (
            <CardHeader title={`Non-motorists`} />
        );

        const editIcon = (style) => (
            <Icon {...style} name='edit-2-outline' />
        );

        const finalReportIcon = (style) => (
            <Icon {...style} name='file-text-outline' />
        );

        const SaveIcon = (style) => (
            <Icon {...style} name='save-outline' />
         );

        // right control buttons on navigation bar that changes depending on edit mode
        const rightControls = () => {
            const { edit } = this.state
            if (edit) {
                return (
                    <View style={styles.rightControlsContainer}>
                        <Layout style={styles.rightControls}>
                            <TopNavigationAction icon={SaveIcon} onPress = {() => {
                                this.setState({edit: false})
                            }}/>
                            <Text style={styles.rightControlsText}>Save</Text>
                        </Layout>
                    </View>
                )
            } else {
                return (
                    <View style={styles.rightControlsContainer}>
                         <Layout style={styles.rightControls}>
                           <TopNavigationAction icon={finalReportIcon} onPress = {() =>
                           {navigation.navigate('FinalReport')}
                           }/>
                           <Text style={styles.rightControlsText}>Export</Text>
                         </Layout>
                         <Layout style={styles.rightControls}>
                           <TopNavigationAction icon={editIcon}
                           onPress = {() =>{
                                this.setState({edit: true})
                           }}
                           />
                           <Text style={styles.rightControlsText}>Edit</Text>
                         </Layout>
                     </View>
                 )
            }
        }

        // describes the two different HOME screen states
        if (this.state.edit) {
          return(
              <SafeAreaView style={{flex:1}}>
                  <TopNavigation title='Home' alignment='center' rightControls = {rightControls()}/>
                  <ScrollView>
                      <Card header={RoadHeader} style={styles.itemCard}>
                          <View style={styles.itemCardContent}>
                              <Card style={styles.nonMotoristCard}>
                                  <Icon name='paper-plane' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Crash/Road</Text>
                              </Card>
                          </View>
                      </Card>
                      {vehiclesListArr}
                      <Card key={uuid.v1()} style={styles.itemCard} >
                          <View style={styles.addVehicleSection}>
                              <Icon name='plus-circle' width={75} height={75} onPress= {() => this._addVehicleSection()} />
                              <Text style={styles.addVehicleSectionFooter} category="s1">Add Vehicle Section</Text>
                          </View>
                      </Card>
                      <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
                          <View style={styles.itemCardContent}>
                              <Card style={styles.individualCard} onPress= {() => this._addNonmotorist()} >
                                  <Icon name='person-add' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Non-Motorist</Text>
                              </Card>
                              {nonmotoristListArr}
                          </View>
                      </Card>
                  </ScrollView>
              </SafeAreaView>
          )
        } else {
          return(
              <SafeAreaView style={{flex:1}}>
                  <TopNavigation title='Home' alignment='center' rightControls = {rightControls()}/>
                  <ScrollView>
                      <Card header={RoadHeader} style={styles.itemCard}>
                          <View style={styles.itemCardContent}>
                              <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road')}>
                                  <Icon name='paper-plane' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Crash/Road</Text>
                              </Card>
                          </View>
                      </Card>
                      {vehiclesListArr}
                      <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
                          <View style={styles.itemCardContent}>
                              {nonmotoristListArr}
                          </View>
                      </Card>
                  </ScrollView>
              </SafeAreaView>
          )
        }
    }
}

const mapDispatchToProps = {
    addNonmotorist,
    addVehicle,
    addDriver
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
