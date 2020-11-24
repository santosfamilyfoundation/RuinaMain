import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { PermissionsAndroid, Platform, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Select} from '@ui-kitten/components';
import { connect } from 'react-redux';
import { photoAction } from '../../actions/PhotoAction';
import { RNCamera } from 'react-native-camera';
import BasicDropDown from '../dropdowns/BasicDropDown'
import * as Constants from '../../constants';
import { styles } from './PhotoCapture.style';
import CameraRoll from "@react-native-community/cameraroll";
var uuid = require('react-native-uuid');

export class PhotoCapture extends Component {
  state = {
    images: [],
    selectedOption: 'Other',
    imgUri: '',
    uploading: false,
    progress:0,
    currImage :'',
  }


  async hasAndroidStoragePermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async capture() {
    const { onTakePhoto } = this.props;
    //Calls for the screen to be captured
    console.log('test');
    const data = await this.camera.takePictureAsync({ skipProcessing: true });
    this.setState({
      imgUri: data["uri"],
    });
    console.log('camera roll pls');
    this.saveToCameraRoll(this.state.imgUri);
  }

  async saveToCameraRoll(imgUri) {
    switch (Platform.OS) {
      case 'ios':
        console.log('Sadge');
        break;
      case 'android':
        console.log('PagChomp');
        if (this.hasAndroidStoragePermission()) {
          CameraRoll.save(this.state.imgUri);
        }
        break;
      default:
        console.log('Pepega');
        break;
    }
  }

  componentDidMount() {
      this.mounted = true;
  }

  componentWillUnmount(){
      this.mounted = false;
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
          <TopNavigation title='Photo Capture' alignment='center' leftControl={this.props.BackAction()}/>
            <Divider/>
            <Layout style={styles.cameraLayout}>
              <RNCamera
                style={styles.cameraPreview}
                ref={ref => (this.camera = ref)}

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
                  <Button id="takePictureButton" style={styles.captureButton} appearance={"filled"} onPress={this.capture.bind(this)}>{"Capture"}</Button>
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
