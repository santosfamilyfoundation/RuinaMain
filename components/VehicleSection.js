import React, { Component } from 'react';
import { styles } from './Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';

export default class VehicleSection extends Component{

    constructor(props) {
        super(props);

        this._addPassenger = this._addPassenger.bind(this);

        this.state = {
            passengers: []
        }

    }

    _addPassenger () {
        this.setState({
            passengers: [...this.state.passengers, {name: "passenger"}]
        })
    }

    render(){
        const {navigation, vehicle, index, name, question} = this.props

        const VehiclesHeader = () => (
            <CardHeader title={`${name} ${index + 1}`} />
        );

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        let passengerListArr = this.state.passengers.map((passenger, index) => {
            return (
                <Card key={index} style={styles.individualCard}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Passenger {index+1}</Text>
                </Card>
            )
        });



        return(
            <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                <ScrollView contentContainerStyle={styles.itemCardContent} horizontal={true}>
                    <Card style={styles.individualCard} onPress= {() => navigateQuestion(question, vehicle.id, 'Vehicle')}>
                        <Icon name='car' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">{name}</Text>
                    </Card>
                    <Card style={styles.individualCard}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Driver</Text>
                    </Card>
                    {passengerListArr}
                    <Card style={styles.individualCard} onPress= {this._addPassenger}>
                        <Icon name='plus' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Passenger</Text>
                    </Card>
                </ScrollView>
            </Card>

        )

    }
}