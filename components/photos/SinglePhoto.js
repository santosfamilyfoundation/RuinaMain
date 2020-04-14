import React, { Component } from 'react';
import { TextInput, StyleSheet, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Divider } from '@ui-kitten/components';
import { styles } from './SinglePhoto.style';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

class SinglePhoto extends Component {

    render(){
        const image = this.props.navigation.state.params.image;
        const tag = this.props.navigation.state.params.tag;
        console.log(tag)
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Crash Photo' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={styles.photoLayout}>
                <Layout>
                  <Image source={{uri:image}} style={styles.image}/>
                </Layout>
                <Layout style={styles.controlBar}>
                  <Text style={styles.tag}>
                    {tag=="Other" ? "General Scene Photo" : tag}
                  </Text>
                </Layout>
              </Layout>
            </SafeAreaView>
          );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SinglePhoto);
