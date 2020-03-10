import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Card, CardHeader } from '@ui-kitten/components';
import { TextInput } from 'react-native';

class OperatorForm extends Component{

    render(){

        const { id, type, updateOperator, driver, nonmotorist } = this.props
        let operator;

        switch(type) {
            case 'driver':
                operator = driver.drivers.find(driver => driver.id == id)
                break;
            case 'nonmotorist':
                operator = nonmotorist.nonmotorists.find(nonmotorist => nonmotorist.id == id)
                break;

        }

        return(
                <Card header= {() => <CardHeader title={`${type}: ${id}`}/>} >
                    <Text>C1-S1</Text>
                    <TextInput
                        onChangeText={content => updateOperator('C1-S1', id, content)}
                        style={{borderWidth:5, borderColor: 'black', height: 40}}
                        defaultValue= {operator.response && operator.response['C1-S1'] ? `  ${operator.response['C1-S1']}` : ''}
                    />
                    <Text>C1-S2</Text>
                    <TextInput
                        onChangeText={content => updateOperator('C1-S2', id, content)}
                        style={{borderWidth:5, borderColor: 'black', height: 40}}
                        defaultValue= {operator.response && operator.response['C1-S2'] ? `  ${operator.response['C1-S2']}` : ''}
                    />
                    <Text>C1-S3</Text>
                    <TextInput
                        onChangeText={content => updateOperator('C1-S3', id, content)}
                        style={{borderWidth:5, borderColor: 'black', height: 40}}
                        defaultValue= {operator.response && operator.response['C1-S3'] ? `  ${operator.response['C1-S3']}` : ''}
                    />
                </Card>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}

export default connect(mapStateToProps)(OperatorForm);