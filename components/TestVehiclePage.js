import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import * as Constants from '../constants';

class TestVehiclePage extends Component {

    render() {

      const navigatePhoto = () => {
        this.props.navigation.navigate('PhotoCapture', {type:Constants.VIN, id:'Vehicle 1'});
      };

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='TestVehiclePage' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{textAlign: 'center'}} category='h1'>{"This is where you would be adding general scene photos."}</Text>
                    <Button onPress = {navigatePhoto}>{"Take Picture of Scene"}</Button>
                </Layout>
            </SafeAreaView>
        )
    }

};

const mapStateToProps = (state) => {
    const { genericReducer } = state
    return { genericReducer }
};

export default connect(mapStateToProps)(TestVehiclePage);
