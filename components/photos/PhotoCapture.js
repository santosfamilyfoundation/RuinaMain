import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
//import firebase from 'react-native-firebase';
// import storage from '@react-native-firebase/storage';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { photoAction } from '../../actions/PhotoAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from '../dropdowns/BasicDropDown'
import * as Constants from '../../constants';
import { styles } from './PhotoCapture.style';
import firebase from 'firebase';
import RNFetchBlob from 'rn-fetch-blob';
// const { app } = firebase.storage()

//
let config = {
  apiKey: 'AIzaSyDYCrVZyJsW7vsm7EgJFkf6ZMWzPXICsfs',
  databaseURL: 'https://runia-5fc0d.firebaseio.com',
  projectId: 'runia-5fc0d',
  storageBucket: 'runia-5fc0d.appspot.com',
};

const Blob = RNFetchBlob.polyfill.blob
const fs = RNFetchBlob.fs
//const app = firebase.initializeApp(config);

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
  };


  componentDidMount() {
      this.mounted = true;
  }

  componentWillUnmount(){
      this.mounted = false;
  }




  uploadImage = () => {
    console.log(firebase.apps)
    //Upload Image to Firebase Storage (see Drive documentation for password and access to firebase account)
    const ext = this.state.imgUri.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Making a unique name
    const uri = this.state.imgUri;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', ''):uri;
    if(this.mounted) {
      this.setState({ uploading: true });
      const imagRef = firebase.storage().ref('CrashImages').child('${filename}')
      fs.readFile(uploadUri, 'base64')
      .then((data) =>{
        return Blob.build(data, {type: 'BASE64'})
      })
      .then((blob)=>{
        uploadBlob = blob
        return imagRef.put(blob, {contentType: ''})
      })
      .then(()=>{
        uploadBlob.close()
        return imagRef.getDownloadURL()
      })
      .then((url)=>{
        resolve(url)
        storeReference(url, new Date().getTime())
      })
      .catch((error)=>{
        alert('Unable to upload');
      })
    }
  }

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
