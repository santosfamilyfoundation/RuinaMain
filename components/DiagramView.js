import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

class DiagramView extends Component {
  state = {
    markers: []
  }


    render() {

        return (
          <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Home' alignment='center'/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <MapView
                    style={styles.container}
                    initialRegion={{
                        latitude: 45.5209087,
                        longitude: -122.6705107,
                        latitudeDelta: 0.0052,
                        longitudeDelta: 0.0051,
                      }}
                      onPress={e => this.setState({markers: [...this.state.markers, {coordinate: e.nativeEvent.coordinate, }]})}

                  >
                  {this.state.markers.map((marker) => {
                    return (
                      <Marker {...marker} >
                        <View>
                        </View>
                      </Marker>
                    )
                  })}
                  </MapView>
              </Layout>
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
    height:1000,
  },
  test:{
    color: "blue",
  }
});

const mapDispatchToProps = dispatch => ({
  writeStory: (story) => dispatch({ type: 'WRITE', payload: story })
});

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};


//
//
// export default class DefaultMarker extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       markers: []
//     }
//     this.handlePress = this.handlePress.bind(this);
//   }
//   handlePress(e) {
//     this.setState({
//       markers: [
//         ...this.state.markers,
//         {
//           coordinate: e.nativeEvent.coordinate,
//         }
//       ]
//     })
//   }
//   render() {
//     return (
//       <MapView
//         style={styles.container}
//         initialRegion={{
//             latitude: 45.5209087,
//             longitude: -122.6705107,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           onPress={this.handlePress}
//       >
//       {this.state.markers.map((marker) => {
//         return (
//           <Marker {...marker} >
//             <View style={styles.marker}>
//             </View>
//           </Marker>
//         )
//       })}
//       </MapView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     color: "white",
//   }
// });





export default connect(mapStateToProps, mapDispatchToProps)(DiagramView);
