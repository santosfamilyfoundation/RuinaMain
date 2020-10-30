import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import {TopNavigation, Card, CardHeader, Text, Button, Layout} from '@ui-kitten/components';
import { Platform, StyleSheet, View, TextInput, Linking, PermissionsAndroid} from 'react-native';

class SaveToDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: this.getDefaultFilename(),
      devicePlatform: Platform.OS,
    };
  }
  // generate default filename
  getDefaultFilename() {
    var date = new Date().toISOString().slice(0, 10).replace(/\W/g, '');
    return "CrashReport" + date;
  }

  // update filename based on user input
  setUserInputFilename = (text) => {
    this.setState({ filename: text });
  }

  requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Android External Storage Permission",
          message:
            "Ruina needs access to your external storage to save the report ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use external storage");
      } else {
        console.log("external permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async saveData() {
      const format = this.props.navigation.state.params.format

      // convert data to desired format
      var data = this.convertJson(format);

      var device_platform = Platform.OS
      var RNFS = require('react-native-fs');

      // Notes for Android External Storage
      // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
      // for android: externalStorageDirectoryPath: /storage/emulated/0
      // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
      const path_ios = RNFS.DocumentDirectoryPath + '/' + this.state.filename + "." + format;
      const path_android = RNFS.ExternalStorageDirectoryPath + '/' + this.state.filename + "." + format;
      //const path = this.state.devicePlatform === 'ios' ? path_ios : path_android;
      if (this.state.devicePlatform === 'ios'){
        path = path_ios;
      } else {
        path = path_android;
        this.requestExternalStoragePermission();
      }

      // write the file and save to Files app on device:
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
    const saveReportHeader = () => (
      <CardHeader title="Please input a report name" />
    )

    const saveReportFooter = (props) => (
      <View {...props} style={[styles.footerContainer]}>
        <Button
          style={styles.footerControl}
          size='small'
          onPress={() => this.saveData()}>
          Save Report
        </Button>
      </View>
    )
    return(
      <SafeAreaView style={{flex:1}}>
        <TopNavigation title="Save Crash Report To Files" alignment="center" leftControl={this.props.BackAction()}/>

        <Card id="SaveReport" header={saveReportHeader} footer={saveReportFooter}>
          <TextInput id="userInputFilename"
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            defaultValue={this.state.filename}
            onChangeText={this.setUserInputFilename}
          />
        </Card>
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

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

export default connect(mapStateToProps)(SaveToDevice)
