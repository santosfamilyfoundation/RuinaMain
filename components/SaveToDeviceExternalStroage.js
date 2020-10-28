import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import { Platform, StyleSheet } from 'react-native';
// import OpenTextField from '../components/textFields/OpenTextField';

class SaveToDeviceExternalStorage extends Component {
  async saveData(format) {
      // convert data to desired format
      var data = this.convertJson(format);

      var device_platform = Platform.OS
      var RNFS = require('react-native-fs');
      
      // Notes for Android External Storage
      // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
      // for android: externalStorageDirectoryPath: /storage/emulated/0
      // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
      const path_ios = RNFS.DocumentDirectoryPath + '/final_report.json';
      const path_android = RNFS.ExternalStorageDirectoryPath + '/final_report.json';
      const path = device_platform === 'ios' ? path_ios : path_android;

      // write the file and save to external storage on device: 
      // ios: Files App
      // Android: Documents App
      try {
        let result = await RNFS.writeFile(path, data, 'utf8');
        console.log('FILE WRITTEN!');
        console.log('Data: ' + data + '\n' + 'Path: ' + path);
        return path;
      } catch (err) {
        console.log(err.message);
        return null;
      }
  }

  convertJson(format) {
    const data = {
        driver: this.props.driver.data,
        nonmotorist: this.props.nonmotorist.data,
        vehicle: this.props.vehicle.data,
        passenger: this.props.passenger.data,
        road: this.props.road.data,
    }
    switch(format){
      case 'csv':
        break;
      default:
        return JSON.stringify(data);
    }
  }
  
  render() {
    const {
      navigation,
      driver,
      nonmotorist,
      vehicle,
      passenger,
      road,
      } = this.props
    const format = this.props.navigation.state.params.format;

    return(
      <SafeAreaView style={{flex:1}}>
          <TopNavigation title="Email Crash Report" alignment="center" leftControl={this.props.BackAction()}/>
          <Card>
            <Text>{JSON.stringify(driver.data)}</Text>
            <Text>{format}</Text>
          </Card>
        <Button onPress={() => this.saveData(format)}>Save Report</Button>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer,
        photos: state.photosReducer,
        story: state.storyReducer,
        road: state.roadReducer
    }
}

export default connect(mapStateToProps)(SaveToDeviceExternalStorage)
