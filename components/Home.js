import React, { Component } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
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
                <TopNavigation title='Home' alignment='center' leftControl={this.props.BackAction()}/>
                <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>number of vehicles: {vehicle.vehicles.length.toString()}</Text>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                  <Text style = {styles.questionText}>number of LVHMs: {numLvhm}</Text>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                  <Text style = {styles.questionText}>number of drivers: {driver.drivers.length.toString()}</Text>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                  <Text style = {styles.questionText}>number of nonmotorist: {nonmotorist.nonmotorists.length.toString()}</Text>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                  <Text style = {styles.questionText}>number of passengers: {passenger.passengers.length.toString()}</Text>
                  </Card>
              </SafeAreaView>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    questionContainer: {
        marginLeft: 15,
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
    cardStyle: {
        flexDirection: 'row',
    },
    buttonSytle: {
        marginRight: 15,
        width: 80
    }
})

export default connect(mapStateToProps)(Home);