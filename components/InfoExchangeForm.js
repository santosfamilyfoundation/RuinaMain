import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import OperatorForm from './OperatorForm';

class InfoExchangeForm extends Component{

    render() {

        const operatorIDs = this.props.operatorDetail.operatorList

        const operatorListArr = operatorIDs.map(({id, type}) => (
            <OperatorForm
                key = {id}
                id = {id}
                type = {type}
            />
        ))

        return(
            <SafeAreaView style={{flex: 1}}>
                <TopNavigation title='Info Exchange' style = {{marginBottom: 15}} alignment='center' leftControl={this.props.BackAction()}/>
                {operatorListArr}
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

export default connect(mapStateToProps)(InfoExchangeForm);