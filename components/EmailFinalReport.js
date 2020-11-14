import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { TextInput, StyleSheet, Alert, View } from 'react-native';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import Mailer from 'react-native-mail';
import JSONconverter from '../utils/jsonConverter';
import NetInfoAPI from "../utils/NetAPI"

export class EmailFinalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {filename: this.getDefaultFilename(), offlineStatus: false};
    this.changeFilename = this.changeFilename.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  // generate default filename
  getDefaultFilename() {
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
    var localDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    return "Crash Report " + localDate + " at " + localTime;
  }
  // update the filename
  changeFilename(text) {
    this.setState({filename: text});
  }
  // save data as file inside app in order send email with attachment
  async saveDataInternal(data, filename) {
    var RNFS = require('react-native-fs');
    // var path = RNFS.DocumentDirectoryPath + '/' + filename;
    var path = RNFS.ExternalDirectoryPath + '/' + filename;
    var format = this.props.navigation.state.params.format;
    var encoding = format === "xlsx" ? 'ascii' : 'utf8'

    // write the file
    try {
        let result = await RNFS.writeFile(path, data, encoding);
        console.log('FILE WRITTEN!');
        console.log(path);
        return path;
    } catch(err) {
      console.log(err.message);
      return null;
    }
  }
  // send email based on the inputted filename
  // leave everything else blank, except subject (subject = filename)
  async sendEmail(path, filename) {
    console.log('Sending email!');
    await Mailer.mail({
      subject: "Sending " + "\"" + filename + "\"",
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
    const net = new NetInfoAPI();
    let netStatus = await net.checkNetOnce();
    // net info is wraped in net.status
    // console.log(`NetInfo: ${net.status}`);
    if (netStatus==false){
      // deal with internet not connected
      this.setState({ offlineStatus: true });
      return;
    }
    const data = {
        driver: this.props.driver.data,
        nonmotorist: this.props.nonmotorist.data,
        vehicle: this.props.vehicle.data,
        passenger: this.props.passenger.data,
        road: this.props.road.data,
      };
    var format = this.props.navigation.state.params.format;
    var converter = new JSONconverter();
    var file = converter.handleConverter(format, data);
    // save data internally
    var path = await this.saveDataInternal(file, this.state.filename + "." + format);
    // send email
    await this.sendEmail(path, this.state.filename + "." + format);
  }
  // required method that creates components of email screen
  render() {
    const FilenameHeader = () => (
        <CardHeader title="Please input report filename"/>
    )

    // const FilenameFooter = (props) => (
    //   <View {...props} style={[styles.footerContainer]}>
    //     <Button
    //       id="sendButton"
    //       style={styles.footerControl}
    //       size='small'
    //       onPress={() => this.handleEmail()}>
    //       Send
    //     </Button>
    //   </View>
    // )

    // TODO: we could add a file preview feature
    return(
      <SafeAreaView style={{flex:1}}>
        <TopNavigation id="emailNavBar" title="Email Crash Report" alignment="center" leftControl={this.props.BackAction()}/>

        <Card id="filenameInput" header={FilenameHeader}>
            <TextInput id="filenameTextInput"
               style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               defaultValue = {this.state.filename}
               onChangeText = {this.changeFilename}
               />

           <View style={[styles.footerContainer]}>
               <Button
                 id="sendButton"
                 style={styles.footerControl}
                 size='small'
                 onPress={() => this.handleEmail()}>
                 Send
               </Button>
           </View>
        </Card>

        <MaterialDialog
          title={"Can't email when offline!"}
          visible={this.state.offlineStatus}
          onCancel={() => {
            this.setState({ offlineStatus: false });
          }}
          onOk={() => {
            this.setState({ offlineStatus: false });
          }}
        >
          <Text style={material.subheading}>
            You can not send emails while being offline.
            Please check your internet connection and try again later.
          </Text>
        </MaterialDialog>

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
   marginHorizontal: 5,
   marginTop: 20,
  },
})

export default connect(mapStateToProps)(EmailFinalReport)
