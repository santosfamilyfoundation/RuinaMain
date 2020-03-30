import React, { Component } from 'react';
import { styles } from './Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
import { driverQuestions } from '../data/driverQuestions';
import { passengerQuestions } from '../data/passengerQuestions';
import { nonmotoristQuestions } from '../data/nonmotoristQuestions';
import { vehicleQuestions } from '../data/vehicleQuestions';
import { lvhmQuestions } from '../data/lvhmQuestions';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addPassenger } from '../actions/PassengerAction';

var uuid = require('react-native-uuid');

class VehicleSection extends Component{

    constructor(props) {
        super(props);

        this._addPassenger = this._addPassenger.bind(this);

        this.state = {
            passengers: []
        }

    }

    _addPassenger () {
        let passengerID = uuid.v1();
        this.props.addPassenger({id: passengerID, vehicleID: this.props.vehicle.id});
        this.setState({
            passengers: [...this.state.passengers, {id: passengerID, vehicleID: this.props.vehicle.id}]
        })
    }

    render(){
        const {navigation, vehicle, index, name} = this.props

        const VehiclesHeader = () => (
            <CardHeader title={`${name} ${index + 1}`} />
        );

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        let passengerListArr = this.state.passengers.map((passenger, index) => {
            return (
                <Card key={index} style={styles.individualCard} onPress= {() => navigateQuestion(passengerQuestions, passenger.id, 'Passenger')}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Passenger {index+1}</Text>
                </Card>
            )
        });

        return(
            <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                <View style={styles.itemCardContent}>
                    <Card style={styles.individualCard} onPress= {() => navigateQuestion(vehicleQuestions, vehicle.id, 'Vehicle')}>
                        <Icon name='car' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">{name}</Text>
                    </Card>
                    <Card style={styles.individualCard} onPress= {() => navigateQuestion(driverQuestions, vehicle.driver, 'Driver')}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Driver</Text>
                    </Card>
                    {passengerListArr}
                    <Card style={styles.individualCard} onPress= {this._addPassenger}>
                        <Icon name='plus' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Passenger</Text>
                    </Card>
                </View>
            </Card>

        )

    }
}

const mapDispatchToProps = {
    addPassenger
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSection);