import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, TopNavigation, Card } from '@ui-kitten/components';

class Home extends Component {

    render(){
        const {
            driver,
            nonmotorist,
            vehicle,
            passenger,
            } = this.props
            console.log(this.props)
        
        const numLvhm = vehicle.vehicles.filter(
            vehicle => vehicle.type == 'hazardous'
        ).length

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' style = {{marginBottom: 15}}alignment='center' leftControl={this.props.BackAction()}/>
                <Card style={{marginBottom: 15}}>
                    <Text style = {styles.headingText}>People</Text>
                    <View style={{flexDirection: 'row'}}>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}># of drivers: {driver.drivers.length.toString()}</Text>
                            </Card>
                        </SafeAreaView>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}># of nonmotorists: {nonmotorist.nonmotorists.length.toString()}</Text>
                            </Card>
                        </SafeAreaView>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}># of passengers: {passenger.passengers.length.toString()}</Text>
                            </Card>
                        </SafeAreaView>
                    </View>
                </Card>
                <Card style={{marginBottom: 15}}>
                    <Text style = {styles.headingText}>Vehicles</Text>
                    <View style={{flexDirection: 'row'}}>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}># of vehicles: {vehicle.vehicles.length.toString()}</Text>
                            </Card>
                        </SafeAreaView>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}># of LVHMs: {numLvhm}</Text>
                            </Card>
                        </SafeAreaView>
                    </View>
                </Card>
                <Card>
                    <Text style = {styles.headingText}>Road</Text>
                    <View style={{flexDirection: 'row'}}>
                        <SafeAreaView style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}>Road 1 </Text>
                            </Card>
                        </SafeAreaView>
                    </View>
                </Card>

                
              
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
        quiz: state.quickquizReducer
    }
}

const styles = StyleSheet.create({
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    questionContainer: {
        marginRight: 15,
        marginBottom: 15
    },
    questionInput: {
        backgroundColor: 'lightgrey',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        paddingLeft: 10
        
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        alignSelf: 'center'
    },
    cardStyle: {
        flexDirection: 'row',
    },
    buttonSytle: {
        marginRight: 15,
        width: 80
    }
})

export default connect(mapStateToProps)(Home);