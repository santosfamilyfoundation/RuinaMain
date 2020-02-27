import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
import { connect } from 'react-redux';
import { genericWriteAction } from '../actions/GenericAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from './BasicDropDown';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;


class PhotoCapture extends Component {
  state = {
    content: '',
    photosRef: [],
    selectedOption: '',
  }

  takePicture() {
      this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
          this.setState({
          }, console.log(data.uri))
      })
  }

    render() {

        const navigateResult = () => {
          this.props.navigation.navigate('Result');
        };

        const setSelectedOption = (e) => {
          setSelectedOption({text: e.text});
          this.setState({
            selectedOption: e.text,
          });
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RNCamera
                  style={styles.preview}
                  ref={cam => (this.camera = cam)}
                >
                </RNCamera>
                <Layout style={styles.bottomBar}>
                  <Text>
                    THIS IS THE TEXT THAT I WANT TO PUT IN HERE.
                  </Text>
                  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    Capture
                  </Text>
                  <BasicDropDown/>
                </Layout>
              </Layout>
            </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
  preview:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  capture:{
    flex: 0,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    textAlign: 'center',
    width: 100,
    alignSelf: 'center',
  },
  bottomBar:{
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    flex: 0.2,
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
