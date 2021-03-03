import React, { Component } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './Home.style';
import {questions} from '../../data/questions';
import VehicleSection from './homeSections/VehicleSection';
import NonMotoristSection from './homeSections/NonMotoristSection';
import { addPassenger, deletePassenger } from '../../actions/PassengerAction';

const uuid = require('react-native-uuid');
class Home extends Component {
    constructor(props) {
        super(props);

        this._addPassenger = this._addPassenger.bind(this);
        this._deletePassenger = this._deletePassenger.bind(this);

        this.state = {
            original_passengers: [],
            passengers: [],
            edit: props.edit || false
        }
    }
    _addPassenger () {
        let passengerID = uuid.v1();
        addPassenger({id: passengerID, vehicleID: this.props.vehicle.id});
        this.setState({
            passengers: [...this.state.passengers, {id: passengerID, vehicleID: this.props.vehicle.id}]
        })
    }
    _deletePassenger (id) {
        this.props.deletePassenger({passengerID: id});
        this.setState({
            passengers: this.state.passengers.filter(passenger => passenger.id != id)
        })
    }

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }

    render(){
        const {
            navigation,
            driver,
            nonmotorist,
            vehicle,
            passenger,
            road
            } = this.props
        const { passengers } = this.state;
        const operatorList = [];
        let roadQuestions = this.filterQuestionsData('road');

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        const RoadHeader = () => (
            <CardHeader title="Crash and Roadway" />
        );
//        const {original_passengers} = this.state;
//        original_passengers = { passengers }
//        console.log(original_passengers)

        const vehiclesListArr = vehicle.data.map((vehicle, index) => {
            operatorList.push({id: vehicle.driver, type:'driver', response:[]})
            const { edit } = this.state;
            if (edit) {
                return (
                    <VehicleSection
                        edit = {edit}
                        passengers = {passengers}
                        _addPassenger = {this._addPassenger}
                        _deletePassenger = {this._deletePassenger}
                        key = {index}
                        navigation = {navigation}
                        vehicle = {vehicle}
                        index = {index}
                        name = {"Vehicle"}
                    />
                )
            } else
            if (this.props) {
                    return (
                        <VehicleSection
                            passengers = {passengers}
                            key = {index}
                            navigation = {navigation}
                            vehicle = {vehicle}
                            index = {index}
                            name = {"Vehicle"}
                        />
                    )
                } else{
                    return (
                        <VehicleSection
                            passengers = {passenger}
                            key = {index}
                            navigation = {navigation}
                            vehicle = {vehicle}
                            index = {index}
                            name = {"Vehicle"}
                        />
                    )
                }
            }
        )

        const nonmotoristListArr = nonmotorist.data.map((nonmotorist, index) => {
            operatorList.push({id:nonmotorist.id, type:'nonmotorist', response:[]})
            return (
                <NonMotoristSection
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
        const cancelIcon = (style) => (
            <Icon {...style} name='log-out' />
        );

        const SaveIcon = (style) => (
            <Icon {...style} name='save-outline' />
         );

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

        const leftControls = () => {
            const { edit } = this.state
            if (edit) {
                return (
                    <View style={styles.rightControlsContainer}>
                        <Layout style={styles.rightControls}>
                            <TopNavigationAction icon={cancelIcon} onPress = {() =>
                            {
                                this.setState({edit: false});
                            }
                            }/>
                            <Text style={styles.rightControlsText}>Cancel</Text>
                        </Layout>
                    </View>
                )
            }
        }

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' alignment='center' leftControl={leftControls()} rightControls = {rightControls()}/>
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


export default connect(mapStateToProps)(Home);
