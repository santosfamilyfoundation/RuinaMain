import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux';
import MapView, { Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

//<TopNavigation title='Scene Diagram' alignment='center' leftControl={this.props.BackAction()}

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;

let id = 0;

function getColor(id){
  return id%2 ? 'blue' : 'red'
}

class DiagramView extends Component {
  state = {
    markers:[],
    region: null,
    currentLat: '',
    currentLong: '',
    LatDelta:'',
    LongDelta:'',
  }

  watchID: ?number = null;

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {

        const currentPositionDetails = JSON.stringify(position);

        this.setState({
          makers: [],
          currentLat: position.coords.latitude,
          currentLong: position.coords.longitude,
          latDelta:'',
          longDelta:'',
        });

      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
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

  onRegionChange(region) {
    this.setState({
      region: region,
      currentLat: region.latitude,
      currentLong: region.longitude,
      latDelta: region.latitudeDelta,
      longDelta: region.longitudeDelta,
    });
  }

    render() {

        const navigateSummary = () => {
          this.props.navigation.navigate('Result');
        };

        const navigateHome = () => {
          this.props.navigation.navigate('Home');
        };

        return (
          <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Scene Diagram' alignment='center' />
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.container}
                    initialRegion={{
                        latitude: 42.3836,
                        longitude: -71.1097,
                        latitudeDelta: 0.00152,
                        longitudeDelta: 0.00151,
                      }}
                      onRegionChange={this.onRegionChange.bind(this)}
                      onPress={e=> this.onMapPress(e)}
                  >
                  {this.state.markers.map(marker => (
                    <Marker
                      key={marker.key}
                      coordinate={marker.coordinate}
                      pinColor={marker.color}
                    />
                  ))}
                  <Text style={styles.coords}> {this.state.currentLat}  {this.state.currentLong} </Text>
                  </MapView>
              </Layout>
              <Button onPress={() =>this.props.writeMapDetails(this.state.currentLat)}>SAVE</Button>
              <Button onPress={navigateSummary}>Summary</Button>
              <Button onPress={navigateHome}>Home</Button>
          </SafeAreaView>
          );
    }
};



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:1000, //Will need to find a better way to set this
  },
  coords:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 30,
  }
});

const mapDispatchToProps = dispatch => ({
  writeMapDetails: (mapDetails) => dispatch({ type: 'WRITE', payload: mapDetails })
});

const mapStateToProps = (state) => {
  const { mapDetails } = state
  return { mapDetails }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiagramView);
