import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import {TopNavigation,Card, CardHeader} from '@ui-kitten/components';


class InfoExchange extends Component {
    render(){

        const {
            driver,
            nonmotorist,
            vehicle,
            passenger,
            } = this.props
        console.log(JSON.stringify(vehicle.data[0]));
        const VehicleHeader = () => (
            <CardHeader title="Vehicle"/>
        )
        const PassengerHeader = () => (
            <CardHeader title="Passenger"/>
        )
        const NonMotoristHeader = () => (
            <CardHeader title="Non Motorist"/>
        )
        const DriverHeader = () => (
            <CardHeader title="Driver"/>
        )
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="InfoExchange Result" alignment="center" leftControl={this.props.BackAction()}/>
                <Card header={DriverHeader}>
                    <Text>{JSON.stringify(driver.data)}</Text>
                </Card>
                <Card header={NonMotoristHeader}>
                    <Text>{JSON.stringify(nonmotorist.data)}</Text>
                </Card>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{        
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}

export default connect(mapStateToProps)(InfoExchange)