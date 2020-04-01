import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import {TopNavigation} from '@ui-kitten/components';


class FinalReport extends Component {
    render(){

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="Final Report" alignment="center" leftControl={this.props.BackAction()}/>
                    <Text>Final Report Screen</Text>
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