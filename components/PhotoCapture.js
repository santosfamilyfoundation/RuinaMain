import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { photoAction } from '../actions/PhotoAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from './BasicDropDown';
import * as Constants from '../constants';
import { styles } from './PhotoCapture.style';

const { app } = firebase.storage();

const typeData = [
  { text: Constants.VIN },
  { text: Constants.LICENSE },
  { text: Constants.PLATE },
];

class PhotoCapture extends Component {
  state = {
    images: [],
    selectedOption: '',
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
    const ext = this.state.imgUri.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Making a unique name
    this.setState({ uploading: true });
    firebase //Connect and store in firebase
      .storage()
      .ref(`CrashImages/${filename}`)
      .putFile(this.state.imgUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Update the progress bar value
          };
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            const allImages = this.state.images;
            allImages.push(snapshot.downloadURL);
            state = {
              ...state,
              uploading: false,
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

        const vehicle = this.props.vehicle;

        const objectData = vehicle.data.map((vehicle, index) => {
            const name = "Vehicle " + (index + 1)
            return {"text":name};
        })

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
              <Layout style={styles.cameraLayout}>
                <RNCamera
                  style={styles.cameraPreview}
                  ref={cam => (this.camera = cam)}
                >
                </RNCamera>
                <Layout style={styles.controlBar}>
                  <Layout style={styles.topControlBar}>
                    <View
                      style={[styles.progressBar, { width: `${this.state.progress}%` }]}
                    />
                  </Layout>
                  <Layout style={styles.bottomControlBar}>
                    <BasicDropDown data={typeData} defaultOption={this.props.type} isDisabled={false}/>
                    <Text style={styles.captureButton} onPress={this.takePicture.bind(this)}>
                      Capture
                    </Text>
                    <Text style={styles.captureButton} onPress={this.uploadImage.bind(this)} disabled={this.state.uploading}>
                      Save
                    </Text>
                    <Text style={styles.captureButton} onPress={() => photoAction(this.state.images)}>
                      Double save
                    </Text>
                    <BasicDropDown data={objectData} defaultOption={this.props.objectID} isDisabled={isObjDisabled}/>
                  </Layout>
                </Layout>
              </Layout>
            </SafeAreaView>
          );
    }
};

const mapDispatchToProps = {
  photoAction
}

const mapStateToProps = (state) => {
    return {
        photoVals: state.photosReducer,
        driver: state.driverReducer,
        vehicle: state.vehicleReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCapture);
