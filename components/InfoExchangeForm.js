import React, { Component } from 'react';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import OperatorForm from './OperatorForm';
import { updateDriver } from '../actions/DriverAction';
import { updateNonmotorist } from '../actions/NonmotoristAction';
import { ScrollView } from 'react-native-gesture-handler';

class InfoExchangeForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            operators: props.operatorDetail.operatorList,
        }
    }

    updateOperator(question, id, content){
        const newOperator = Object.assign({}, this.state.operators.find(operator => operator.id == id))
        newOperator.response[question] = content
        const newOperators = this.state.operators.filter(operator => operator.id != id).concat(newOperator)
        this.setState({
            operators: newOperators
        })
    }

    render() {
        const { driver, nonmotorist, updateDriver, updateNonmotorist} = this.props;
        const operators = this.state.operators;
        const operatorListArr = this.props.operatorDetail.operatorList.map(({id, type}) => 
            <OperatorForm
                key = {id}
                id = {id}
                type = {type}
                updateOperator = {this.updateOperator.bind(this)}
            />
        )

        const saveOperatorsAndDispatch = () => {
            for (let i = 0; i < operators.length; i++) {
                const { id, type, response } = operators[i]
                let modifiedResponse;
                switch(type) {
                    case 'driver':
                        const newDriver = Object.assign({}, driver.drivers.find(driver => driver.id == id))
                        modifiedResponse = Object.assign({}, newDriver.response)
                        for ( let [key, value] of Object.entries(response)) {
                            modifiedResponse[key] = value
                        }
                        updateDriver({id, response: modifiedResponse})
                        break;
                    case 'nonmotorist':
                        const newNonmotorist = Object.assign({}, nonmotorist.nonmotorists.find(nonmotorist => nonmotorist.id == id))
                        modifiedResponse = Object.assign({}, newNonmotorist.response)
                        for ( let [key, value] of Object.entries(response)) {
                            modifiedResponse[key] = value
                        }
                        updateNonmotorist({id, response: modifiedResponse})
                        break;
                }
            }
        }

        return(
            <SafeAreaView style={{flex: 1}}>
                <TopNavigation title='Info Exchange' style = {{marginBottom: 15}} alignment='center' leftControl={this.props.BackAction()}/>
                    <ScrollView>
                        {operatorListArr}
                    </ScrollView>
                <Button onPress = {() => saveOperatorsAndDispatch()}>Save</Button>
            </SafeAreaView>
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

const mapDispatchToProps = {
    updateDriver,
    updateNonmotorist,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoExchangeForm);