import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { Button, Spinner, Stack } from 'native-base';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';
import { styles } from './Map.style';
import { changeLat, changeLong } from '../../actions/MapAction';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';
import NetInfoAPI from "../../utils/NetAPI";
import TopNavigation from '../TopNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const initalRegion = {
  initalLat: 42.293411,
  initalLong: -71.263748,
  initialDelta: 0.00111,
}

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: { // Hard Coded Default Region
        latitude: initalRegion.initalLat,
        longitude: initalRegion.initalLong,
        latitudeDelta: initalRegion.initialDelta,
        longitudeDelta: initalRegion.initialDelta,
      },
      isMapReady: false,
      marginTop: 1,
      displayFailedToSaveMessage: false,
      displayFailedToLoadMessage: false,
      testMode: false,
    };
  }

  // finds and navigates to current location whenever the recenter button is clicked
  getCurrentLocation(){
    Geolocation.getCurrentPosition(
      position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: initalRegion.initialDelta,
                longitudeDelta: initalRegion.initialDelta,
            };
        this.setState({
             region: region,
        });
        if (!this.state.testMode) {
          this._map.animateToRegion(region, 100);
        }
      },
      (error) => {
        console.log(JSON.stringify(error));
        alert('Using Default Location', JSON.stringify(error));
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 5000 },
    );
  }

  // load map when component loads
  async componentDidMount() {
    const net = new NetInfoAPI();
    let netStatus = await net.checkNetOnce();
    // net info is wraped in net.status
    // console.log(`NetInfo: ${net.status}`);
    if (netStatus==false){
      // deal with internet not connected
      this.setState({ displayFailedToLoadMessage: true, loading: false });
      return;
    }
    Geolocation.getCurrentPosition(
      (position) => {
        let region = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            latitudeDelta: initalRegion.initialDelta,
            longitudeDelta: initalRegion.initialDelta,
        };
        this.setState({
          region: region,
          loading: false,
        });
      },
      (error) => {
        console.log(JSON.stringify(error));
        this.setState({
          displayFailedToLoadMessage: true,
          loading: false
        })
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 5000 },
    );
  }

  onMapReady = () => {
     this.setState({ isMapReady: true, marginTop: 0 });
   }

   // Update state on region change
   onRegionChange = region => {
     this.setState({
       region,
     });
   }

   // Zooms out by 2x when user presses zoom out button and resets state
   onPressZoomOut() {
    let region = {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
      latitudeDelta: this.state.region.latitudeDelta /2,
      longitudeDelta: this.state.region.longitudeDelta /2,
    };
    this.setState({
      region: region,
    });
    if (!this.state.testMode) {
      //makes the map appear to "move" to the user
      this._map.animateToRegion(region, 100);
    }
  }

  // Zooms in by 2x when user presses zoom in button and resets state
  onPressZoomIn() {
    let region = {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
      latitudeDelta: this.state.region.latitudeDelta *2,
      longitudeDelta: this.state.region.longitudeDelta *2,
    };
    this.setState({
      region: region,
    });
    if (!this.state.testMode) {
      //makes the map appear to "move" to the user
      this._map.animateToRegion(region, 100);
    }
  }

  // When the user presses the re-center button they return to the current location of the device
  onPressRecenter() {
    this.getCurrentLocation()
  }

  // Called when saved button is pressed and saves the current lat and long
  saveLocations() {
    try {
      const id = this.props.navigation.state.params.id; // The road id for this crash
      // Update the road reducer with displayed lat and long
      console.log('Lat: ' + this.state.region.latitude.toString() + ' Long: ' + this.state.region.longitude.toString());
      this.props.updateRoad({id, question:Constants.LAT_ID, selection: this.state.region.latitude.toString() });
      this.props.updateRoad({id, question:Constants.LONG_ID, selection: this.state.region.longitude.toString() });
      // Return to questions
      this.props.navigation.goBack();
    } catch (e) {
      console.log('Lat/long coordinates failed to save');
      this.setState({ displayFailedToSaveMessage: true });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.spinnerView}>
           <Spinner accessibilityLabel="Loading App"/>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Map View' backButton navigation={this.props.navigation}/>
            <Stack style={styles.pageContainer}>
              <Stack style={styles.container}>
                <MapView id="mapView"
                  style={styles.mapContainer}
                  ref={component => {this._map = component;}}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={this.state.region}
                  showsUserLocation={false}
                  onMapReady={this.onMapReady}
                  onRegionChangeComplete={this.onRegionChange}
                >
                <MapView.Marker
                  coordinate={{ "latitude": this.state.region.latitude, "longitude": this.state.region.longitude }}
                  title={"Your Location"}
                  draggable
                />
                </MapView>
                <View id="mapButtons" style={styles.sideBox}>
                  <TouchableOpacity id="zoomInButton"
                      onPress={()=>{this.onPressZoomIn()}}
                      >
                      <View style={styles.sideBoxItems}>
                        <Icon name='minus-circle-outline' size={20}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity id="zoomOutButton"
                      onPress={()=>{this.onPressZoomOut()}}
                      >
                      <View style={styles.sideBoxItems}>
                        <Icon name='plus-circle-outline' size={20}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity id="recenterButton"
                      onPress={()=>{this.onPressRecenter()}}
                      >
                      <View style={styles.sideBoxItems}>
                        <Icon name='stop-circle-outline' size={20}/>
                      </View>
                  </TouchableOpacity>
                </View>
              </Stack>
              <View style={styles.coords}>
                <Text id="latLongCoord" style={styles.coordText}>
                  Latitude: { this.state.region.latitude.toFixed(3)}
                  {"     "}
                  Longitude: {this.state.region.longitude.toFixed(3)}
                </Text>
              </View>
            </Stack>
            <Button id="saveButton" onPress={() => {this.saveLocations()}}>SAVE</Button>

            <MaterialDialog id="saveFailedDialog"
              title={"Failed to save location!"}
              visible={this.state.displayFailedToSaveMessage}
              onCancel={() => {
                this.setState({ displayFailedToSaveMessage: false });
                // Return to questions
                this.props.navigation.goBack();
              }}
              onOk={() => {
                this.setState({ displayFailedToSaveMessage: false });
                // Return to questions
                this.props.navigation.goBack();
              }}
            >
              <Text style={material.subheading}>
                Your location failed save. Please try again later.
              </Text>
            </MaterialDialog>

            <MaterialDialog id="loadFailedDialog"
              title={"Failed to load map!"}
              visible={this.state.displayFailedToLoadMessage}
              onCancel={() => {
                this.setState({ displayFailedToLoadMessage: false });
                // Return to questions
                this.props.navigation.goBack();
              }}
              onOk={() => {
                this.setState({ displayFailedToLoadMessage: false });
                // Return to questions
                this.props.navigation.goBack();
              }}
            >
              <Text style={material.subheading}>
                The map and geolocation features failed to load. Please check your internet connection and try again later.
              </Text>
            </MaterialDialog>
          </SafeAreaView>
      );
    }
  }
};

const mapDispatchToProps = {
  changeLat,
  changeLong,
  updateRoad,
}


const mapStateToProps = (state) => {
  const { mapDetails } = state
  return { mapDetails }
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
