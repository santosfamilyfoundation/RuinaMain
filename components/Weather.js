import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';
import { API_KEY } from '../utils/WeatherAPIKey';

export default class Weather extends Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        error: ''
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position.coords)
            this.fetchWeather(position.coords.latitude, position.coords.longitude)
            
          },
          error => {
            this.setState({
              error: 'Error Gettig Weather Condtions'
            });
          }
        );
    }

    fetchWeather(lat = 25, lon = 25) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            this.setState({
                temperature: json.main.temp,
                weatherCondition: json.weather[0].main,
                isLoading: false
            })
          });
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
                            <Text>Temperature: {this.state.temperature}</Text>
                            <Text>Weather Condition: {this.state.weatherCondition}</Text>
                        </SafeAreaView>

                        )
                    }
                </Layout>
            </SafeAreaView>
        )
    }

};
