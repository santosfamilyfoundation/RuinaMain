import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import {TopNavigation,Card, CardHeader, Text, Button} from '@ui-kitten/components';
import Mailer from 'react-native-mail';
import Axios from "axios";


class FinalReport extends Component {
    sendReport= () => {
      Axios({
        method: "POST",
        url: "http://172.24.191.1:5006/v1/addReport",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          data: '1'
        }
      }).then(res => {
        console.log(res.data);
        console.log('Report Sent!');
      });
    }
    saveData = () => {
        const data = {
            driver: this.props.driver.data,
            nonmotorist: this.props.nonmotorist.data,
            vehicle: this.props.vehicle.data,
            passenger: this.props.passenger.data,
        }
        // require the module
        var RNFS = require('react-native-fs');
        var path = RNFS.DocumentDirectoryPath + '/final_report.json';
        // /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents/final_report.json

        // write the file
        RNFS.writeFile(path, JSON.stringify(data), 'utf8')
            .then((success) => {
                console.log('FILE WRITTEN!');
                console.log('Data: ' + JSON.stringify(data) + 'Path: ' + path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    handleEmail() {
      console.log('Sending an email!');
      Mailer.mail({
        subject: 'Testing',
        recipients: ['coverney@olin.edu'],
        // ccRecipients: ['supportCC@example.com'],
        // bccRecipients: ['supportBCC@example.com'],
        body: '<b>A Bold Body</b>',
        customChooserTitle: "This is my new title", // Android only (defaults to "Send Mail")
        isHTML: true,
        // attachments: [{
        //   path: '',  // The absolute path of the file from which to read data.
        //   type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        //   // mimeType - use only if you want to use custom type
        //   name: '',   // Optional: Custom filename for attachment
        // }]
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
    printReport () {
      // console.log(JSON.stringify(this.props.driver.data));
      // console.log(JSON.stringify(this.props.nonmotorist.data));
      // console.log(JSON.stringify(this.props.vehicle.data));
      // console.log(JSON.stringify(this.props.passenger.data));
      // console.log(JSON.stringify(this.props.quiz.data));
      // // console.log(JSON.stringify(this.props.photos.data));
      // // console.log(JSON.stringify(this.props.story.data));
      console.log(JSON.stringify(this.props.road.data));
    }
    render(){
        const {
            navigation,
            driver,
            nonmotorist,
            vehicle,
            passenger,
            quiz,
            road,
            } = this.props
        const VehicleHeader = () => (
            <CardHeader title="Vehicle"/>
        )
        const PassengerHeader = () => (
            <CardHeader title="Passenger"/>
        )
        const NonMotoristHeader = () => (
            <CardHeader title="Non Motorist"/>
        )
        const DriverHeader = () => (
            <CardHeader title="Driver"/>
        )
        const FeedbackHeader = () => (
            <CardHeader title="Feedback"/>
        )
        const SendDatabaseHeader = () => (
            <CardHeader title="SendDatabase" />
        )
        const SaveDataHeader = () => (
            <CardHeader title="SaveData" />
        )
        const EmailHeader = () => (
            <CardHeader title="Email"/>
        )
        const PrintReportHeader = () => (
            <CardHeader title="Print Report"/>
        )
        const navigateEmailFinalReport = (format) =>{
            navigation.navigate('EmailFinalReport', {format:format})
        }
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="Final Report" alignment="center" leftControl={this.props.BackAction()}/>
                <Card header={SendDatabaseHeader}>
                    <Text style={{ marginBottom: 20 }}>Press this button to save report in database.</Text>
                    <Button onPress={() => this.sendReport()}>Send Report</Button>
                </Card>
                <Card header={SaveDataHeader}>
                    <Text style={{ marginBottom: 20 }}>Press this button to save the crash report.</Text>
                    <Button onPress={() => this.saveData()}>Save Data</Button>
                </Card>
                <Card header={EmailHeader}>
                    <Text style={{ marginBottom: 20 }}>Press this button to email the crash report.</Text>
                    <Button onPress={() => navigateEmailFinalReport('JSON')}>Email Report</Button>
                </Card>
                <Card header={PrintReportHeader}>
                  <Text style={{marginBottom: 20}}>Press this button to print the crash report.</Text>
                  <Button onPress={()=>this.printReport()}>Print Report</Button>
                </Card>
                <Card header={VehicleHeader}>
                    <Text>{JSON.stringify(vehicle.data)}</Text>
                </Card>
                <Card header={DriverHeader}>
                    <Text>{JSON.stringify(driver.data)}</Text>
                </Card>
                <Card header={PassengerHeader}>
                    <Text>{JSON.stringify(passenger.data)}</Text>
                </Card>
                <Card header={NonMotoristHeader}>
                    <Text>{JSON.stringify(nonmotorist.data)}</Text>
                </Card>
                <Card header={FeedbackHeader} style={{marginTop:20}}>
                  <Text style={{marginBottom: 20}}>Tell us what you liked and what you didn't like so we can make your experience better.</Text>
                  <Button onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}>Submit Feedback</Button>
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

export default connect(mapStateToProps)(FinalReport)
