import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import Axios from "axios";


export class SaveReportDatabase extends Component{
    async sendHttpRequest(){
        console.log('Sending Data');
        await Axios({
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
          <TopNavigation title="Send report to database" alignment="center" leftControl={this.props.BackAction()}/>
          <Card>
            <Text>{JSON.stringify(driver.data)}</Text>
            <Text>{format}</Text>
          </Card>
          <Button onPress = {() => this.sendHttpRequest()}>Send</Button>
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

export default connect(mapStateToProps)(SaveReportDatabase)
