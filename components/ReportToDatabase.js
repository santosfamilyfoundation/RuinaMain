import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking, TextInput, StyleSheet, Alert, View } from 'react-native';
//import {Card, CardHeader, Text, Button} from '@ui-kitten/components';
import { Button } from 'native-base';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import Axios from "axios";
import NetInfoAPI from "../utils/NetAPI"
import backgroundSave from '../utils/backgroundSave';
import TopNavigation from './TopNavigation';
import Section from './Section';


export class ReportToDatabase extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sendDatabaseVisible: false,
        sendDatabaseFailedVisible: false,
        dbResponse: null,
      };
    }
    async sendHttpRequest(){
      const net = new NetInfoAPI();
      let netStatus = await net.checkNetOnce();
      // net info is wraped in net.status
      // console.log(`NetInfo: ${net.status}`);

      if (netStatus==false){
        // deal with internet not connected
        this.setState({ sendDatabaseFailedVisible: true });
        return;
      }
      this.setState({ sendDatabaseVisible: true });
      const format = this.props.navigation.state.params.format
      // convert data to desired format
      var stringify_data = this.convertJson(format);
      console.log('Start sending report to database');
      await Axios({
          method: "POST",
          url: "http://54.210.56.237:5006/v1/addReport",
          headers: {
          "Content-Type": "application/json"
      },
      data: {
        data: stringify_data
      }
      }).then(res => {
        console.log('Successfully sent report to database!');
        this.setState({dbResponse: res.data})

        // clear background save
        const clearBackgroundSave = new backgroundSave();
        clearBackgroundSave.deleteCapturedState();
      });
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
    const FilenameHeader = () => (
        <CardHeader title="Do you want to send crash report to our database?"/>
    )
    return(
      <SafeAreaView style={{flex:1}}>
        <TopNavigation title='Send Report to Database' backButton navigation={this.props.navigation} />
        <Section title='Do you want to send crash report to our database?'>
            <Button id='sendButton' onPress={() => this.sendHttpRequest()}>Send</Button>
        </Section>
/*        <TopNavigation id="emailNavBar" title="Send Report To Database" alignment="center" leftControl={this.props.BackAction()}/>

        <Card id="filenameInput" header={FilenameHeader}>
           <View style={[styles.footerContainer]}>
               <Button
                 id="sendButton"
                 style={styles.footerControl}
                 size='small'
                 onPress={() => this.sendHttpRequest()}>
                 Send
               </Button>
           </View>
        </Card> */
        <MaterialDialog
          title={"Report saved successfully!"}
          visible={this.state.sendDatabaseVisible}
          onCancel={() => {
            this.setState({ sendDatabaseVisible: false });
          }}
          onOk={() => {
            this.setState({ sendDatabaseVisible: false });
          }}
        >
          <Text style={material.subheading}>
            Your crash report was successfully sent to the database.
          </Text>
        </MaterialDialog>

        <MaterialDialog
          title={"Failed to send report to database!"}
          visible={this.state.sendDatabaseFailedVisible}
          onCancel={() => {
            this.setState({ sendDatabaseFailedVisible: false });
          }}
          onOk={() => {
            this.setState({ sendDatabaseFailedVisible: false });
          }}
        >
          <Text style={material.subheading}>
            Your crash report failed to be sent to the database.
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

export default connect(mapStateToProps)(ReportToDatabase)
