import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Linking, TextInput, StyleSheet, Alert, View } from 'react-native';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import Axios from "axios";
import NetInfoAPI from "../utils/NetAPI"


export class ReportToDatabase extends Component{
    constructor(props) {
      super(props);
    }
    async sendHttpRequest(){
      const net = new NetInfoAPI();
      await net.checkNetOnce();
      // net info is wraped in net.status
      console.log(`NetInfo: ${net.status}`);

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
        console.log(res.data);
        console.log('Successfully sent report to database!');
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
        <TopNavigation id="emailNavBar" title="Send Report To Database" alignment="center" leftControl={this.props.BackAction()}/>

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
