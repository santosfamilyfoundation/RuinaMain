import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { photoAction } from '../actions/PhotoAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from './BasicDropDown';
import * as Constants from '../constants';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const { app } = firebase.storage();

const typeData = [
  { text: Constants.VIN },
  { text: Constants.LICENSE },
  { text: Constants.PLATE },
];

const objectData = [
  { text: "Person 1" },
  { text: "P2" },
  { text: "P3" },
];

class PhotoCapture extends Component {
  state = {
    images: [],
    selectedOption: '',
    imgSource: '',
    imgUri: '',
    uploading: false,
    progress:0,
  }

  takePicture() {
      this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
        this.setState({
          imgUri: data["uri"],
        });
      })
  }

  uploadImage = () => {
    console.log(this.state);
    const ext = this.state.imgUri.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Generate unique name
    this.setState({ uploading: true });
    firebase
      .storage()
      .ref(`CrashImages/${filename}`)
      .putFile(this.state.imgUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
          };
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            const allImages = this.state.images;
            allImages.push(snapshot.downloadURL);
            state = {
              ...state,
              uploading: false,
              imgSource: '',
              imgUri: '',
              progress: 0,
              images: allImages,
            };
            AsyncStorage.setItem('images', JSON.stringify(allImages));
          }
          this.setState(state);
        },
        error => {
          unsubscribe();
          alert('Unable to upload');
        }
      );
  };


    render() {
        const photoAction = this.props.photoAction;

        const navigateResult = () => {
          this.props.navigation.navigate('Result');
        };

        const setSelectedOption = (e) => {
          setSelectedOption({text: e.text});
          this.setState({
            selectedOption: e.text,
          });
        }

        const isObjDisabled = this.props.objectID ? (false) : (true);

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RNCamera
                  style={styles.preview}
                  ref={cam => (this.camera = cam)}
                >
                </RNCamera>
                <Layout style={styles.bottomBar}>
                  <BasicDropDown data={typeData} defaultOption={this.props.type} isDisabled={false}/>
                  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    Capture
                  </Text>
                  <Text style={styles.capture} onPress={this.uploadImage.bind(this)}>
                    Save
                  </Text>
                  <Text style={styles.capture} onPress={photoAction}>
                    DOuble save
                  </Text>
                  <BasicDropDown data={objectData} defaultOption={this.props.objectID} isDisabled={isObjDisabled}/>
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
    flex: 0.3,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    textAlign: 'center',
    height: 50,
  },
  bottomBar:{
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.2,
    alignItems: 'center',
  }
});

const mapDispatchToProps = {
  photoAction
}

const mapStateToProps = (state) => {
  const { photoVals } = state.photosReducer
  return { photoVals }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCapture);
