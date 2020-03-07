import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import PhotoCapture from './PhotoCapture'
import { Text } from 'react-native';
import { Divider, Layout,TopNavigation } from '@ui-kitten/components';
import * as Constants from '../constants';

class PhotoCaptureMain extends Component {

  // {setValue ?
  //     (<PhotoCapture type={params.type} objectID={obj2}/>) :
  //     (<PhotoCapture type={Constants.VIN} objectID={obj1}/>)
  // }

    render() {

      const params = this.props.navigation.state.params

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <PhotoCapture type={params.type} objectID={params.id}/>
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
