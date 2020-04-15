import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux';
import { styles } from './Map.style';
import { changeLat, changeLong, updateMarkers } from '../../actions/MapAction';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const initalRegion = {
  initalLat: 42.3836,
  initalLong: -71.1097,
  initialDelta: 0.00232,
}

let id = 0;

function getColor(id){
  //Alternates marker color from red to blue
  return id%2 ? 'blue' : 'red'
}

class Map extends Component {
  state = {
    markers:[],
    mapRegion:{ //Hard Coded Default Region
        latitude: initalRegion.initalLat,
        longitude: initalRegion.initalLong,
        latitudeDelta: initalRegion.initialDelta,
        longitudeDelta: initalRegion.initialDelta,
    },
  }

  watchID: ?number = null;

  getCurrentLocation(){
    Geolocation.getCurrentPosition(
      position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
            };
        this.setState({
             mapRegion: region,
        });
        this._map.animateToRegion(region, 100);
      },
      error => alert('Using Default Location', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }


  componentDidMount() {
    //Map loads when component loads
    Geolocation.getCurrentPosition(
      position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
            };
        this.setState({
             mapRegion: region,
        });
        this._map.animateToRegion(region, 100);
      },
      error => alert('Using Default Location', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  componentWillUnmount() {
    //Clear the call for location
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    //Set the markers on the map when the map is pressed
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: getColor(id),
        },
      ],
    });
  }

  onRegionChangeComplete(region, lastLat, lastLong) {
    // When the user move around in the map (zoom in, zoom out, and navigate) this updates the state
    this.setState({
      mapRegion: region,
    });
  }

  onPressZoomOut() {
    //Zooms out by 2x when user presses zoom out button and resets state
    region = {
      latitude: this.state.mapRegion.latitude,
      longitude: this.state.mapRegion.longitude,
      latitudeDelta: this.state.mapRegion.latitudeDelta /2,
      longitudeDelta: this.state.mapRegion.longitudeDelta /2,
    };
    this.setState({
      mapRegion: region,
    });
      //makes the map appear to "move" to the user
      this._map.animateToRegion(region, 100);
  }


  onPressZoomIn() {
      //Zooms in by 2x when user presses zoom out button and resets state
    region = {
      latitude: this.state.mapRegion.latitude,
      longitude: this.state.mapRegion.longitude,
      latitudeDelta: this.state.mapRegion.latitudeDelta *2,
      longitudeDelta: this.state.mapRegion.longitudeDelta *2,
    };
    this.setState({
      mapRegion: region,
    });
      //makes the map appear to "move" to the user
      this._map.animateToRegion(region, 100);
  }

  onPressRecenter() {
    // When the user presses teh center button they return to the current location of the device
    this.getCurrentLocation()
  }

    render() {
        const {
          navigation,
          changeLat,
          changeLong,
          mapDetails,
          updateMarkers,
          updateRoad
        } = this.props;

        console.log(this.state.mapRegion)

        const id = this.props.navigation.state.params.id; //The road id for this crash

        const saveLocations = () => {
          //Update the road reducer with marker first location
          updateRoad({id, question:Constants.LAT_ID, selection: this.state.markers[0].coordinate.latitude.toString() });
          updateRoad({id, question:Constants.LONG_ID, selection: this.state.markers[0].coordinate.longitude.toString() });
          //Return to questions
          this.props.navigation.goBack();
        };

        return (
          <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Map View' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={styles.pageContainer}>
                <Layout style={styles.container}>
                  <MapView
                      ref={component => {this._map = component;}}
                      zoomEnabled = {true}
                      provider={PROVIDER_GOOGLE}
                      style={styles.mapContainer}
                      onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                      region={this.state.mapRegion}
                      onPress={e=> this.onMapPress(e)}
                      initialRegion={this.state.mapRegion}
                    >
                    {this.state.markers.map(marker => (
                      <Marker
                        key={marker.key}
                        coordinate={marker.coordinate}
                        pinColor={marker.color}
                      />
                    ))}
                    </MapView>
                    <View style={styles.sideBox}>
                      <TouchableOpacity
                          onPress={()=>{this.onPressZoomIn()}}
                          >
                          <View style={styles.sideBoxItems}>
                            <Icon name='minus-circle-outline' width={32} height={32} fill='#3366FF'/>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=>{this.onPressZoomOut()}}
                          >
                          <View style={styles.sideBoxItems}>
                            <Icon name='plus-circle-outline' width={32} height={32} fill='#3366FF'/>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=>{this.onPressRecenter()}}
                          >
                          <View style={styles.sideBoxItems}>
                            <Icon name='stop-circle-outline' width={32} height={32} fill='#3366FF'/>
                          </View>
                      </TouchableOpacity>
                    </View>
                </Layout>
                <View style={styles.coords}>
                  <TextInput style={styles.coordText}>
                    Latitude: { this.state.mapRegion.latitude.toFixed(3)}
                    {"     "}
                    Longitude: {this.state.mapRegion.longitude.toFixed(3)}
                  </TextInput>
                </View>
              </Layout>
              <Button onPress={() => saveLocations()}>SAVE</Button>
          </SafeAreaView>
          );
    }
};

const mapDispatchToProps = {
  changeLat,
  changeLong,
  updateMarkers,
  updateRoad,
}


const mapStateToProps = (state) => {
  const { mapDetails } = state
  return { mapDetails }
};


export default connect(mapStateToProps, mapDispatchToProps)(Map);
