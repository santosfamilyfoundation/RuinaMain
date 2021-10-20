import React, { Component } from 'react';
import { View, ScrollView, Keyboard, BackHandler, Pressable } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            edit: props.edit || false,
            filePath: this.props.navigation.getParam('filePath'),
            openOldFile: this.props.navigation.getParam('openOldFile')
        }

        console.log(this.props.navigation);
        console.log("File Path in Home screen:", this.props.navigation.getParam('filePath'))
        console.log("Open old file in Home screen:", this.props.navigation.getParam('openOldFile'));
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
            quiz: this.props.quiz,
        };
        // console.log("---------------------------NEW UPDATE-----------------------------")
        // for (let d in data) {
        //     console.log(d, ": ", data[d]);
        // }

        console.log("this.state.filePath:", this.state.filePath);
        console.log("this.state.openOldFile:", this.state.openOldFile);
        const captureState = new backgroundSave(this.state.filePath, this.state.openOldFile);
        captureState.captureCurrentState(JSON.stringify(data));

        let roadQuestions = this.filterQuestionsData('road');

        // navigate to question form
        const navigateQuestion = (form, id, type, name) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type, name, dependencyID:[id]})
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
                    roadID = {road.data[0].id}
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
                    roadID = {road.data[0].id}
                />
            )
        })

        const NonMotoristHeader = () => (
            <CardHeader title={`Non-motorists`} />
        );

        const editIcon = (style) => (
            <Icon {...style} name='edit-2' fill="white" />
        );

        const finalReportIcon = (style) => (
            <Icon {...style} name='file-text' fill="white" />
        );

        const SaveIcon = (style) => (
            <Icon {...style} name='save' fill="white" float="left" />
         );

        // right control buttons on navigation bar that changes depending on edit mode
        const rightControls = () => {
            const { edit } = this.state
            if (edit) {
                return (
                    <View style={styles.rightControlsContainer}>
                        <Layout style={styles.rightControls}>
                            <Pressable style={styles.rightControls} onPress = {() => {
                              this.setState({edit: false})
                            }}>
                              <TopNavigationAction icon={SaveIcon}/>
                              <Text style={styles.rightControlsText}>Confirm Changes</Text>
                            </Pressable>
                        </Layout>
                    </View>
                )
            } else {
                return (
                    <View style={styles.rightControlsContainer}>
                         <Layout style={styles.rightControls}>
                           <Pressable style={styles.rightControls} onPress = {() =>
                           {navigation.navigate('FinalReport')}
                           }>
                             <TopNavigationAction icon={finalReportIcon}/>
                             <Text style={styles.rightControlsText}>Export</Text>
                           </Pressable>
                         </Layout>
                         <Layout
                          style={styles.rightControls}
                          >
                            <Pressable style={styles.rightControls} onPress = {() => {
                              this.setState({edit: true})
                            }}>
                             <TopNavigationAction icon={editIcon}/>
                             <Text style={styles.rightControlsText}>Edit Sections</Text>
                           </Pressable>
                         </Layout>
                     </View>
                 )
            }
        }

        // describes the two different HOME screen states
        if (this.state.edit) {
          return(
              <SafeAreaView style={{flex:1}}>
                  <TopNavigation alignment='center' rightControls = {rightControls()}/>
                  <ScrollView>
                      <Card header={RoadHeader} style={styles.itemCard}>
                          <View style={styles.itemCardContent}>
                              <Card style={styles.nonMotoristCard}>
                                  <Icon name='paper-plane' opacity={0.5} width={75} height={75} fill='black'/>
                                  <Text style={styles.itemCardFooter} opacity={0.5} category="s1">Crash/Road</Text>
                              </Card>
                          </View>
                      </Card>
                      {vehiclesListArr}
                      <Card key={uuid.v1()} style={styles.itemCard} >
                          <View style={styles.addVehicleSection}>
                              <Icon name='plus-circle' width={75} height={75} fill='white' float='left' onPress= {() => this._addVehicleSection()} />
                              <Text style={styles.addVehicleSectionFooter} category="s1" float='left'>Add Vehicle Section</Text>
                          </View>
                      </Card>
                      <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
                          <View style={styles.itemCardContent}>
                              <Card style={styles.individualCardAdd} onPress= {() => this._addNonmotorist()} >
                                  <Icon name='person-add' width={75} height={75} float alignSelf= "center" fill='white'/>
                                  <Text style={styles.itemCardFooterEdit} category="s1">Add Non-Motorist</Text>
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
                  <TopNavigation alignment='center' rightControls = {rightControls()}/>
                  <ScrollView>
                      <Card header={RoadHeader} style={styles.itemCard}>
                          <View style={styles.itemCardContent}>
                              <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road', 'Crash/Road')}>
                                  <Icon name='paper-plane' width={75} height={75} fill='black'/>
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
