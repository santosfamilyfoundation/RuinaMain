import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { photoAction } from '../../actions/PhotoAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from '../dropdowns/BasicDropDown'
import * as Constants from '../../constants';
import { styles } from './PhotoCapture.style';

const { app } = firebase.storage();

class PhotoCapture extends Component {
  state = {
    images: [],
    selectedOption: 'Other',
    imgUri: '',
    uploading: false,
    progress:0,
    currImage :'',
  }

  capture() {
    //Calls for the screen to be captured
    this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
      this.setState({
        imgUri: data["uri"],
      });
      this.uploadImage()
    })
  }

  componentDidMount() {
      this.mounted = true;
  }

  componentWillUnmount(){
      this.mounted = false;
  }

  uploadImage = () => {
    //Upload Image to Firebase Storage (see Drive documentation for password and access to firebase account)
    const ext = this.state.imgUri.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Making a unique name
    if(this.mounted) {
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
                currImage: snapshot.downloadURL,
              };
              //Updated photo reducer
              this.props.photoAction({image: snapshot.downloadURL, tag: this.state.selectedOption});
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
  };

  setOption = (text) => {
    //Sets what object that is tagged in photo
    this.setState({
      selectedOption: text,
    });
  }

    render() {

        const {photoAction, vehicle} = this.props

        //If there are no objects in reducers yet, the dropdown is disabled
        const isObjDisabled = vehicle.data.length == 0 ? (true) : (false);

        //Map vehicles to options in dropdown
        const objectData = vehicle.data.map((vehicle, index) => {
            const name = "Vehicle " + (index + 1)
            return {"text":name};
        })

        //Adding a general crash scene option to dropdown
        objectData.push({"text":"Crash Scene"})

        const navigateResult = () => {
          this.props.navigation.navigate('Result');
        };

        //Keeping track of progress for uploading progress bar
        const progress = this.state.progress;

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
                    { progress < 100 && progress != 0 ?
                        <Layout>
                          <Text>
                            Uploading...
                          </Text>
                          <View style={[styles.progressBar, { width: `${this.state.progress}%` }]}/>
                        </Layout>
                      :
                        <Layout>
                        </Layout>
                    }
                    </Layout>
                  <Layout style={styles.bottomControlBar}>
                    <BasicDropDown data={objectData} selectFunction={this.setOption} isDisabled={isObjDisabled}/>
                    <Button style={styles.captureButton} appearance={"filled"} onPress={this.capture.bind(this)}>{"Capture"}</Button>
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
        vehicle: state.vehicleReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCapture);
