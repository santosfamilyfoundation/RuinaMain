import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './Home.style';
import {questions} from '../data/questions';
import VehicleSection from './VehicleSection';
import NonMotoristSection from './NonMotoristSection';


//May not need all of these:

import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { driverQuestions } from '../data/driverQuestions';
import { passengerQuestions } from '../data/passengerQuestions';
import { nonmotoristQuestions } from '../data/nonmotoristQuestions';
import { vehicleQuestions } from '../data/vehicleQuestions';
import { lvhmQuestions } from '../data/lvhmQuestions';
import { roadQuestions } from '../data/roadQuestions';


class Home extends Component {

    render(){
        const {
            navigation,
            driver,
            nonmotorist,
            vehicle,
            passenger,
            road
            } = this.props

        const operatorList = [];

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        const navigatePhotos = () => {
            navigation.navigate('PhotoCapture')
        }

        const navigateGallery = () => {
          navigation.navigate('PhotoGallery')
        }

        const RoadHeader = () => (
            <CardHeader title="Roadway" />
        );

        const vehiclesListArr = vehicle.data.map((vehicle, index) => {

            if(vehicle?.hazardous) {
                return (
                    <VehicleSection
                        key = {index}
                        navigation = {navigation}
                        vehicle = {vehicle}
                        index = {index}
                        name = {"Hazardous Vehicle"}
                    />
                )
            } else {
                return (
                    <VehicleSection
                        key = {index}
                        navigation = {navigation}
                        vehicle = {vehicle}
                        index = {index}
                        name = {"Vehicle"}
                    />
                )
            }

        })

        const driverListArr = driver.data.map((driver, index) => {
            operatorList.push({id:driver.id, type:'driver', response:{}})
            return (
                <Card key={driver.id} style={styles.itemCard} onPress = {() => navigateQuestion(questions, driver.id, 'Driver')}>
                    <View style={styles.itemCardContent}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Driver {index+1}</Text>
                    </View>
                </Card>
            )
        })

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

        const passengerListArr = passenger.data.map((passenger, index) => (
            <Card key={passenger.id} style={styles.itemCard} onPress = {() => navigateQuestion(questions, passenger.id, 'Passenger')}>
                <View style={styles.itemCardContent}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Passenger {index+1}</Text>
                </View>
            </Card>
        ))

        const peopleListArr = [...driverListArr, ...nonmotoristListArr, ...passengerListArr];

        const infoExchangeIcon = (style) => (
            <Icon {...style} name='edit-2-outline' />
          );

        const finalReportIcon = (style) => (
            <Icon {...style} name='file-text-outline' />
        );

        const NonMotoristHeader = () => (
            <CardHeader title={`Non-motorists`} />
        );
        

        const rightControls = () => (
            <View style={{flexDirection: 'row'}}>
                <TopNavigationAction icon={finalReportIcon} onPress = {() => navigation.navigate('FinalReport')}/>
                <TopNavigationAction icon={infoExchangeIcon} onPress = {() => navigation.navigate('InfoExchange',{ operatorList })}/>   
            </View>
            
        )
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' alignment='center' leftControl={this.props.BackAction()} rightControls = {rightControls()}/>
                <ScrollView>
                    {vehiclesListArr}
                    <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
                        <View style={styles.itemCardContent}>
                            {nonmotoristListArr}
                        </View>
                    </Card>
                    <Card header={RoadHeader} style={styles.sectionCard}>
                        <Layout style={styles.questionContainer}>
                          <Card style={styles.itemCard} onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road')}>
                              <View style={styles.itemCardContent}>
                                  <Icon name='paper-plane' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Road</Text>
                              </View>
                          </Card>
                          <Card style={styles.itemCard} onPress = {() => navigatePhotos()}>
                              <View style={styles.itemCardContent}>
                                  <Icon name='camera-outline' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Take Photo</Text>
                              </View>
                          </Card>
                          <Card style={styles.itemCard} onPress = {() => navigateGallery()}>
                              <View style={styles.itemCardContent}>
                                  <Icon name='archive-outline' width={75} height={75} />
                                  <Text style={styles.itemCardFooter} category="s1">Photo Gallery</Text>
                              </View>
                          </Card>
                        </Layout>
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
