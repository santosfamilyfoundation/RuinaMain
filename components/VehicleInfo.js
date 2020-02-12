import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';

export default class VehicleInfo extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        this.fetchVIN("1HGBH41JXMN109186");
    }

    fetchVIN(vin){
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011")
          .then(response => response.json())
          .then((responseJson)=> {
            this.setState({data: responseJson.Results})
            console.log(this.state.data)
          })
          .catch(error=>console.log(error)) 
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='VehicleInfo' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{JSON.stringify(this.state.data)}</Text>
                </Layout>
            </SafeAreaView>
        )
    }

};