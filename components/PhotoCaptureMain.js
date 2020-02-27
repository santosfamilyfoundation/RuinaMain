import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import PhotoCapture from './PhotoCapture'
import { Text } from 'react-native';
import { Divider, Layout,TopNavigation } from '@ui-kitten/components';

class PhotoCaptureMain extends Component {

    render() {

      const setValue = false

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Result' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {setValue ?
                        (<PhotoCapture/>) :
                        (
                        <SafeAreaView>
                            <Text>Otherwise!!</Text>
                        </SafeAreaView>

                        )
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
