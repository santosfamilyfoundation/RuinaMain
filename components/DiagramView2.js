import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, Dimensions, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;

class DiagramView extends Component {
  state = {
    markers: []
  }

    render() {

        return (
          <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Scene Diagram' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.container}
                    initialRegion={{
                        latitude: 38.5636,
                        longitude: -96.8456,
                        latitudeDelta: 3.20152,
                        longitudeDelta: 3.20151,
                      }}

                  >
                  </MapView>
              </Layout>
          </SafeAreaView>
          );
    }
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

//TODO: FIX THESE FUNCTIONS

const mapDispatchToProps = dispatch => ({
  writeStory: (story) => dispatch({ type: 'WRITE', payload: story })
});

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps, mapDispatchToProps)(DiagramView);
