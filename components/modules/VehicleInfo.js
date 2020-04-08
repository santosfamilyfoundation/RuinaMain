import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';

export default class VehicleInfo extends Component {
    state = {
        data: [],
        fetchedData: false
    }

    componentDidMount(){
        this.fetchVIN(this.props.navigation.state.params.VIN);
    }

    fetchVIN(vin){
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011")
          .then(response => response.json())
          .then((responseJson)=> {
            this.setState({data: responseJson.Results})
            this.setState({fetchedData: true})
          })
          .catch(error=>console.log(error)) 
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='VehicleInfo' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView>
                        {this.state.fetchedData ? <Text>{JSON.stringify(this.state.data)}</Text> : <Text>fetching data...</Text>}
                    </ScrollView>
                </Layout>
            </SafeAreaView>
        )
    }

};