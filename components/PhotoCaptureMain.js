import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import PhotoCapture from './PhotoCapture'
import { Text } from 'react-native';
import { Divider, Layout,TopNavigation } from '@ui-kitten/components';
import * as Constants from '../constants';


class PhotoCaptureMain extends Component {

    render() {

      const setValue = true

      const obj1 = "Person 1"
      const obj2 = "Vehicle 1"
      const obj3 = "Vehicle 2"
      const obj4 = null

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {setValue ?
                        (<PhotoCapture type={Constants.BASIC_PHOTO} objectID={obj4}/>) :
                        (<PhotoCapture type={Constants.VIN} objectID={obj2}/>)
                    }
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
