import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import Mailer from 'react-native-mail';
// import OpenTextField from '../components/textFields/OpenTextField';

class EmailFinalReport extends Component {
  async saveDataInternal(data, fileType) {
    var RNFS = require('react-native-fs');
    // maybe save data in temporary directory path?
    var path = RNFS.DocumentDirectoryPath + '/final_report.json';
    // write the file
    try {
        let result = await RNFS.writeFile(path, data, fileType);
        console.log('FILE WRITTEN!');
        console.log('Data: ' + data + 'Path: ' + path);
        return path;
    } catch(err) {
      console.log(err.message);
      return null;
    }
  }
  // function not used
  async deleteData(path) {
    var RNFS = require('react-native-fs');
    // delete the file at path
    try {
      let result = await RNFS.unlink(path);
      console.log('FILE DELETED', success, path);
    } catch(err) {
      console.log(err.message);
    }
  }
  convertJson(format) {
    const data = {
        driver: this.props.driver.data,
        nonmotorist: this.props.nonmotorist.data,
        vehicle: this.props.vehicle.data,
        passenger: this.props.passenger.data,
    }
    return JSON.stringify(data);
  }
  async sendEmail(path, type) {
    console.log('Sending an email!');
    await Mailer.mail({
      subject: 'Testing',
      recipients: ['coverney@olin.edu'],
      // ccRecipients: ['supportCC@example.com'],
      // bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
      customChooserTitle: "Send Crash Report", // Android only (defaults to "Send Mail")
      isHTML: true,
      attachments: [{
        path: path,  // The absolute path of the file from which to read data.
        type: type,   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        // mimeType - use only if you want to use custom type
        name: "crash_report",   // Optional: Custom filename for attachment
      }]
    }, (error, event) => {
      console.log('errror', error)
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
  }
  async handleEmail(format) {
    console.log('Format: ' + format);
    var data = this.convertJson(format);
    console.log('Data: ' + data);
    // save data internally
    var path = await this.saveDataInternal(data, 'utf8');
    console.log('this should print after saving data')
    // send email
    await this.sendEmail(path, 'json');
    console.log('this should print after sending the email');
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
    // const testQuestion = {
    //     "answerType": "openTextBox",
    //     "helperText": "(HHMM)",
    //     "question": "Time of Roadway Clearance",
    //     "display": [
    //         "road"
    //     ],
    //     "id": "C3-S2"
    // };
    return(
      <SafeAreaView style={{flex:1}}>
          <TopNavigation title="Email Crash Report" alignment="center" leftControl={this.props.BackAction()}/>
          <Card>
            <Text>{JSON.stringify(driver.data)}</Text>
            <Text>{format}</Text>
          </Card>
          <Button onPress = {() => this.handleEmail(format)}>Send</Button>
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
        road: state.roadReducer
    }
}

export default connect(mapStateToProps)(EmailFinalReport)
