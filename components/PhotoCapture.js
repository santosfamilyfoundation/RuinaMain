import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { genericWriteAction } from '../actions/GenericAction';
import { RNCamera } from 'react-native-camera';

//const RNCamera = RNCameraImport.RNCamera();
//
// <Camera  ref={cam =>
//   {this.camera = cam}}
//   style={styles.preview}
//   aspect={Camera.constants.Aspect.fill}>
//   <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
//     [CAPTURE]
//   </Text>
// </Camera>
//

class PhotoCapture extends Component {
  state = {
    content: '',
    torchOn: '',
  }

    takePicture() {
      this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err));
    }

    render() {

        const navigateResult = () => {
          this.props.navigation.navigate('Result');
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RNCamera
                  style={styles.preview}
                  onBarCodeRead={this.onBarCodeRead}
                  ref={cam => this.camera = cam}
                >
                </RNCamera>
              </Layout>
              <Button onPress={navigateResult}>Go to Result Screen</Button>
            </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
  preview:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  }
});

const mapDispatchToProps = {
  genericWriteAction
}

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCapture);
