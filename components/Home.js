import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, ScrollView } from 'react-native';
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

        const vehiclesListArr = vehicle.vehicles.map(vehicle => (
            <Card key={vehicle.id} style={{marginRight: 15}}>
                {vehicle.hazardous ? 
                    <Text>hazardous</Text> : <Text>normal</Text>
                }
            </Card>
        ))

        const driverListArr = driver.drivers.map(driver => (
            <Card key={driver.id} style={{marginRight: 15}}>
                <Text>driver</Text>
            </Card>
        ))

        const nonmotoristListArr = nonmotorist.nonmotorists.map(nonmotorist => (
            <Card key={nonmotorist.id} style={{marginRight: 15}}>
                <Text>nonmotorist</Text>
            </Card>
        ))

        const passengerListArr = passenger.passengers.map(passenger => (
            <Card key={passenger.id} style={{marginRight: 15}}>
                <Text>passenger</Text>
            </Card>
        ))

        const peopleListArr = [...driverListArr, ...nonmotoristListArr, ...passengerListArr];
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' style = {{marginBottom: 15}}alignment='center' leftControl={this.props.BackAction()}/>
                <Card style={{marginBottom: 15}}>
                    <Text style = {styles.headingText}>Vehicles</Text>
                    <ScrollView horizontal={true} style = {styles.questionContainer}>
                        {vehiclesListArr}
                    </ScrollView>
                </Card>
                <Card style={{marginBottom: 15}}>
                    <Text style = {styles.headingText}>People</Text>
                    <ScrollView horizontal={true} style = {styles.questionContainer}>
                        {peopleListArr}
                    </ScrollView>
                </Card>
                <Card>
                    <Text style = {styles.headingText}>Road</Text>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal={true} style = {styles.questionContainer}>
                            <Card>
                                <Text style = {styles.questionText}>Road 1 </Text>
                            </Card>
                        </ScrollView>
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
        marginBottom: 15,
        flexDirection: 'row'
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