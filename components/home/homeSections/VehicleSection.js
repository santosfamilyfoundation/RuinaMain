import React, { Component } from 'react';
import { styles } from '../Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
/**import { connect } from 'react-redux';**/
/**import { addPassenger, deletePassenger } from '../../../actions/PassengerAction';**/
import {questions} from '../../../data/questions';

/**var uuid = require('react-native-uuid');**/


class VehicleSection extends Component{

    constructor(props) {
        super(props);
    }

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }


    render(){
        const {navigation, vehicle, index, name, passengers, _deletePassenger, _addPassenger, edit} = this.props
        let vehicleQuestions = this.filterQuestionsData('vehicle');
        let passengerQuestions = this.filterQuestionsData('passenger');
        let driverQuestions = this.filterQuestionsData('driver');
        console.log(edit)

        const VehiclesHeader = () => (
            <CardHeader title={`${name} ${index + 1}`} />
        );

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        let passengerListArr = passengers.map((passenger, index) => {
            return (
                <Card key={index} style={styles.individualCard} onPress= {() => navigateQuestion(passengerQuestions, passenger.id, 'Passenger')}
                onLongPress={() => _deletePassenger(passenger.id)}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Passenger {index+1}</Text>
                </Card>
            )
        });

        if (edit){
            return(
                <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                    <View style={styles.itemCardContent}>
                        <Card style={styles.individualCard} onPress= {() => navigateQuestion(vehicleQuestions, vehicle.id, 'Vehicle')}>
                            <Icon name='car' width={75} height={75} style={{justifyItems:'center', alignItems:'center'}}/>
                            <Text style={styles.itemCardFooter} category="s1">{name}</Text>
                        </Card>
                        <Card style={styles.individualCard} onPress= {() => navigateQuestion(driverQuestions, vehicle.driver, 'Driver')}>
                            <Icon name='person' width={75} height={75} />
                            <Text style={styles.itemCardFooter} category="s1">Driver</Text>
                        </Card>
                        {passengerListArr}
                        <Card style={styles.individualCard} onPress= {_addPassenger} >
                            <Icon name='plus' width={75} height={75} />
                            <Text style={styles.itemCardFooter} category="s1">Passenger</Text>
                        </Card>
                    </View>
                </Card>
            )
        } else{
            return(
                <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                    <View style={styles.itemCardContent}>
                        <Card style={styles.individualCard} onPress= {() => navigateQuestion(vehicleQuestions, vehicle.id, 'Vehicle')}>
                            <Icon name='car' width={75} height={75} style={{justifyItems:'center', alignItems:'center'}}/>
                            <Text style={styles.itemCardFooter} category="s1">{name}</Text>
                        </Card>
                        <Card style={styles.individualCard} onPress= {() => navigateQuestion(driverQuestions, vehicle.driver, 'Driver')}>
                            <Icon name='person' width={75} height={75} />
                            <Text style={styles.itemCardFooter} category="s1">Driver</Text>
                        </Card>
                        {passengerListArr}
                    </View>
                </Card>
            )
        }

    }
}
export default VehicleSection