import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import {TopNavigation,Card, CardHeader, Text, Button} from '@ui-kitten/components';


class FinalReport extends Component {
    render(){

        const {
            navigation,
            driver,
            nonmotorist,
            vehicle,
            passenger,
            } = this.props
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
        const FeedbackHeader = () => (
            <CardHeader title="Feedback"/>
        )
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="Final Report" alignment="center" leftControl={this.props.BackAction()}/>
                <Card header={VehicleHeader}>
                    <Text>{JSON.stringify(vehicle.data)}</Text>
                </Card>
                <Card header={DriverHeader}>
                    <Text>{JSON.stringify(driver.data)}</Text>
                </Card>
                <Card header={PassengerHeader}>
                    <Text>{JSON.stringify(passenger.data)}</Text>
                </Card>
                <Card header={NonMotoristHeader}>
                    <Text>{JSON.stringify(nonmotorist.data)}</Text>
                </Card>
                <Card header={FeedbackHeader} style={{marginTop:20}}>
                <Text style={{marginBottom: 20}}>Tell us what you liked and what you didn't like so we can make your experience better.</Text>
                <Button onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}>Submit Feedback</Button>
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

export default connect(mapStateToProps)(FinalReport)