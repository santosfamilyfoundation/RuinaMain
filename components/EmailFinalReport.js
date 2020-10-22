import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking, TextInput, StyleSheet } from 'react-native';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import Mailer from 'react-native-mail';

class EmailFinalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {filename: this.getDefaultFilename()};
    this.changeFilename = this.changeFilename.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  // generate default filename
  getDefaultFilename() {
    var date = new Date().toISOString().slice(0, 10).replace(/\W/g, '');
    return date + "_crashReport";
  }
  // update the filename
  changeFilename(text) {
    this.setState({filename: text});
  }
  // save data as file inside app in order send email with attachment
  async saveDataInternal(data, filename) {
    var RNFS = require('react-native-fs');
    var path = RNFS.DocumentDirectoryPath + '/' + filename;
    // write the file
    try {
        let result = await RNFS.writeFile(path, data, 'utf8');
        console.log('FILE WRITTEN!');
        return path;
    } catch(err) {
      console.log(err.message);
      return null;
    }
  }
  // temporary function that converts the JSON into a JSON
  // will be replaced with the JSON converter module
  convertJson(format) {
    const data = {
        driver: this.props.driver.data,
        nonmotorist: this.props.nonmotorist.data,
        vehicle: this.props.vehicle.data,
        passenger: this.props.passenger.data,
    }
    return JSON.stringify(data);
  }
  // send email based on the inputted filename
  // leave everything else blank, except subject (subject = filename)
  async sendEmail(path, filename) {
    console.log('Sending email!');
    await Mailer.mail({
      subject: "Sending " + filename,
      recipients: [''],
      ccRecipients: [''],
      bccRecipients: [''],
      body: '',
      customChooserTitle: "Send Crash Report", // Android only (defaults to "Send Mail")
      isHTML: true,
      attachments: [{
        path: path,  // The absolute path of the file from which to read data.
        // type: type,   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        // mimeType - use only if you want to use custom type
        // name: ,   // Optional: Custom filename for attachment
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
  // handles the entire email workflow
  async handleEmail() {
    var format = this.props.navigation.state.params.format;
    console.log('Format: ' + format);
    var data = this.convertJson(format);
    console.log('Data: ' + data);
    // save data internally
    var path = await this.saveDataInternal(data, this.state.filename + "." + format);
    // send email
    await this.sendEmail(path, this.state.filename + "." + format);
  }
  // required method that creates components of email screen
  render() {
    const EmailHeader = () => (
        <CardHeader title="Filename"/>
    )
    return(
      <SafeAreaView style={{flex:1}}>
          <TopNavigation title="Email Crash Report" alignment="center" leftControl={this.props.BackAction()}/>
          // TODO: we could add a file preview feature here
          <Card header={EmailHeader}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value = {this.state.filename}
               autoCapitalize = "none"
               onChangeText = {this.changeFilename}
               />
          </Card>
          <Button onPress = {() => this.handleEmail()}>Send</Button>
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

const styles = StyleSheet.create({
   container: {
     width: '90%',
     marginBottom: 10
   },
   input: {
      marginBottom: 10,
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: 'lightgray',
      borderWidth: 1
   },
})

export default connect(mapStateToProps)(EmailFinalReport)
