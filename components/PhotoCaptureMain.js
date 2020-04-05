import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import PhotoCapture from './PhotoCapture'
import { Text } from 'react-native';
import { Divider, Layout,TopNavigation } from '@ui-kitten/components';
import * as Constants from '../constants';

class PhotoCaptureMain extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <PhotoCapture/>
                </Layout>
            </SafeAreaView>
        )
    }

};

const mapStateToProps = (state) => {
    const { genericReducer } = state
    return { genericReducer }
};



export default connect(mapStateToProps)(PhotoCaptureMain);
