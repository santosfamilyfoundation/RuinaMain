import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';

export default class Weather extends Component {
    state = {
        isLoading: true,
        position: null,
        error: ''
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
          position => {
            this.setState({ position });
            console.log(this.state.position)
            console.log(this.state.position.coords.latitude)
            this.setState({ isLoading: false });
            console.log(this.state.isLoading)
          },
          error => {
            this.setState({
              error: 'Error Gettig Weather Condtions'
            });
          }
        );
      }

    render() {
        const { isLoading } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Weather' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text category='h1'>This is the Weather Screen.</Text>
                    {isLoading ? 
                        (<Text>Fetching The Weather</Text>) : 
                        (
                        <SafeAreaView>
                            <Text>latitude: {this.state.position.coords.latitude}</Text>
                            <Text>longitude: {this.state.position.coords.longitude}</Text>
                        </SafeAreaView>

                        )
                    }
                </Layout>
            </SafeAreaView>
        )
    }

};
