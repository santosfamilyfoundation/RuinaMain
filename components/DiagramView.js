import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux';
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import { mapAction } from '../actions/MapAction';
//<TopNavigation title='Scene Diagram' alignment='center' leftControl={this.props.BackAction()}
//<Text style={styles.coords}> {this.state.region}  {this.state.region} </Text>


const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = width / height;

let id = 0;

function getColor(id){
  return id%2 ? 'blue' : 'red'
}

class DiagramView extends Component {
  state = {
    markers:[],
    lastLat: null,
    lastLong: null,
    latitudeDelta:  0.005,
    longitudeDelta: 0.005 * (SCREEN_WIDTH / SCREEN_HEIGHT),
    mapRegion:{
        latitude: 42.3836,
        longitude: -71.1097,
        latitudeDelta: 0.0152,
        longitudeDelta: 0.0151,
    },
  }

  watchID: ?number = null;

  async getCurrentLocation() {
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
                 lastLat: region.latitude,
                 lastLong: region.longitude,
            });
      this._map.animateToRegion(region, 100);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }


  componentDidMount() {
    this.getCurrentLocation()
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
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
    console.log("ONCHANGE REGION")
    console.log(region)
    console.log(lastLat)
    this.setState({
      mapRegion: region,
      lastLat: lastLat,
      lastLong: lastLong,
    });
  }

  onPressZoomOut() {
    region = {
      latitude: this.state.mapRegion.latitude,
      longitude: this.state.mapRegion.longitude,
      latitudeDelta: this.state.mapRegion.latitudeDelta /2,
      longitudeDelta: this.state.mapRegion.longitudeDelta /2,
    };
    this.setState({
      mapRegion: region,
      latitudeDelta:  region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
      lastLat: region.latitude,
      lastLong: region.longitude
    });
      this._map.animateToRegion(region, 100);
  }


  onPressZoomIn() {
    region = {
      latitude: this.state.mapRegion.latitude,
      longitude: this.state.mapRegion.longitude,
      latitudeDelta: this.state.mapRegion.latitudeDelta *2,
      longitudeDelta: this.state.mapRegion.longitudeDelta *2,
    };
    this.setState({
      mapRegion: region,
      latitudeDelta:  region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
      lastLat: region.latitude,
      lastLong: region.longitude
    });
      this._map.animateToRegion(region, 100);
  }

  onPressRecenter() {
    this.getCurrentLocation()
  }

    render() {

        const navigateSummary = () => {
          this.props.navigation.navigate('MapSummary');
        };

        const navigateHome = () => {
          this.props.navigation.navigate('Welcome');
        };

        return (
          <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Scene Diagram' alignment='center' />
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MapView
                    ref={component => {this._map = component;}}
                    zoomEnabled = {true}
                    provider={PROVIDER_GOOGLE}
                    style={styles.container}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                    region={this.state.mapRegion}
                    onPress={e=> this.onMapPress(e)}
                    initialRegion={{
                        latitude: 42.3836,
                        longitude: -71.1097,
                        latitudeDelta: 0.0152,
                        longitudeDelta: 0.0151,
                      }}
                  >
                  {this.state.markers.map(marker => (
                    <Marker
                      key={marker.key}
                      coordinate={marker.coordinate}
                      pinColor={marker.color}
                    />
                  ))}
                  <View style={styles.coords}>
                    <TextInput style={styles.coordText}>
                      Latitude: { this.state.mapRegion.latitude.toFixed(3)}
                      {"     "}
                      Longitude: {this.state.mapRegion.longitude.toFixed(3)}
                    </TextInput>
                  </View>
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
              <Button onPress={navigateHome}>Home</Button>
              <Button onPress={() =>this.props.mapAction(this.state.mapRegion.latitude)}>SAVE</Button>
              <Button onPress={navigateSummary}>Summary</Button>
          </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:1000, //Will need to find a better way to set this
  },
  coords:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sideBox:{
    alignSelf: 'flex-end',
    backgroundColor: '#D3D3D3',
    padding: 10,
    flex: 1,
  },
  sideBoxItems:{
    paddingBottom: 10,
    paddingTop: 10,
  },
  coordText:{
    fontSize: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
  }
});


const mapDispatchToProps = dispatch => ({
  mapAction: (mapDetails) => dispatch({ type: 'WRITE', payload: mapDetails })
});


const mapStateToProps = (state) => {
  const { mapDetails } = state
  return { mapDetails }
};


// <SearchBar
//   placeholder="Search"
//   ref={(ref) => this.searchBar = ref}
//   data={items}
//   handleResults={this._handleResults.bind(this)}
//   showOnLoad
// />

export default connect(mapStateToProps, mapDispatchToProps)(DiagramView);
