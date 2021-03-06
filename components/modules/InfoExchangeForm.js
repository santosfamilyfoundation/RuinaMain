import React, { Component } from 'react';
import { View, SegmentedControlIOSComponent } from 'react-native';
import { Button, TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import OperatorForm from './OperatorForm';
import { updateDriver } from '../../actions/DriverAction';
import { updateNonmotorist } from '../../actions/NonmotoristAction';
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
        const {operatorDetail} = this.props;
        const operatorListArr = operatorDetail.operatorList.map(({id, type}) => {
            return (
                <OperatorForm
                    key = {id}
                    id = {id}
                    type = {type}
                    nav = {this.props.navigation}
                    // updateOperator = {this.updateOperator.bind(this)}
                />
            )
        })

        const emailIcon = (style) => (
            <Icon {...style} name='email-outline' />
        );
        const rightControls = () => (
            <View style={{flexDirection: 'row'}}>
                <TopNavigationAction icon={emailIcon} onPress = {() => this.props.navigation.navigate('InfoExchange')}/>   
            </View>
        )

        return(
            <SafeAreaView style={{flex: 1}}>
                <TopNavigation title='Info Exchange' style = {{marginBottom: 15}} alignment='center' leftControl={this.props.BackAction()} rightControls = {rightControls()}/>
                    <ScrollView>
                        {operatorListArr}
                    </ScrollView>
                <Button onPress = {() => this.props.navigation.navigate('Home')}>Finish</Button>
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