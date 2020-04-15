import React, { Component } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './Home.style';
import {questions} from '../../data/questions';
import VehicleSection from './homeSections/VehicleSection';
import NonMotoristSection from './homeSections/NonMotoristSection';


class Home extends Component {
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

        const operatorList = [];
        let roadQuestions = this.filterQuestionsData('road');

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
                <TopNavigationAction icon={infoExchangeIcon} onPress = {() => navigation.navigate('InfoExchangeForm',{ operatorList })}/>   
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
                    <Card header={RoadHeader} style={styles.itemCard}>
                        <View style={styles.itemCardContent}>
                            <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(roadQuestions, road.data[0].id, 'Road')}>
                                <Icon name='paper-plane' width={75} height={75} />
                                <Text style={styles.itemCardFooter} category="s1">Road</Text>
                            </Card>
                            <Card style={styles.nonMotoristCard} onPress = {() => navigatePhotos()}>
                                <Icon name='camera-outline' width={75} height={75} />
                                <Text style={styles.itemCardFooter} category="s1">Take Photo</Text>
                            </Card>
                            <Card style={styles.nonMotoristCard} onPress = {() => navigateGallery()}>
                                <Icon name='archive-outline' width={75} height={75} />
                                <Text style={styles.itemCardFooter} category="s1">Photo Gallery</Text>
                            </Card>
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
