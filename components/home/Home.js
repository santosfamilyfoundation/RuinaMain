import React, { Component } from 'react';
import { View, ScrollView, Keyboard, BackHandler, Pressable } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Heading, Divider, VStack, HStack, Box, Text } from 'native-base';
//import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
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
import Section from '../Section';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <VStack>
                <Heading>Crash and Road Way</Heading>
                <Divider/>
            </VStack>
//            <CardHeader title="Crash and Roadway" />
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

        const rightControls = () => {
            const { edit } = this.state;
            return(
            <View>
                <HStack>
                {this.state.edit &&
                    <IconButton text="Confirm Changes"
                        onPress = {() => { this.setState({ edit: false })}}
                        icon = {<Icon name="save" size={50}/>}
                    />
                }
                {!this.state.edit &&
                    <>
                    <IconButton text="Edit Sections"
                        onPress = {() => { this.setState({ edit: true }) }}
                        icon = {<Icon name="edit" size={50}/>}
                    />
                    <IconButton text="Export Report"
                        onPress = {() => { navigation.navigate('FinalReport') }}
                        icon = {<Icon name="assignment" size={50}/>}
                    />
                   </>
                }
                </HStack>
            </View>
            );
        }

        const crashRoadSection = () => {
            return(
                <Section title='Crash and Roadway'>
                    <HStack>
                        <IconButton text='Crash and Road'
                            onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road', 'Crash/Road')}
                            icon={<Icon name='edit-road' size={50}/>}
                        />
                    </HStack>
                </Section>
            );
        }

        return(
            <VStack>
                {rightControls()}
                <ScrollView>
                    <Section title="Crash and Roadway">
                        {this.state.edit ?
                        <Box>
                            <HStack>
                                <Icon name="edit-road" size={50}/>
                                <Text>Crash/Road</Text>
                            </HStack>
                        </Box> :
                        <HStack>
                            <IconButton text="Crash/Road"
                            onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road', 'Crash/Road')}
                            icon = {<Icon name="edit-road" size={50}/>}/>
                        </HStack>
                        }
                    </Section>
                    <VStack>
                        {vehiclesListArr}
                        {this.state.edit &&
                        <IconButton text="Add Vehicle"
                            onPress = {() => this._addVehicleSection()}
                                icon = {<Icon name="local-taxi" size={50}/>}
                        />
                        }
                    </VStack>
                    <VStack>
                        <Section title='Non-motorists'>
                            <HStack>
                                {nonmotoristListArr}
                            </HStack>
                        </Section>
                        {this.state.edit &&
                        <IconButton text="Add Non-Motorist"
                            onPress = {() => this._addNonmotorist()}
                            icon = {<Icon name="person-add" size={50}/>}
                        />}
                    </VStack>
                </ScrollView>
            </VStack>
        );
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
