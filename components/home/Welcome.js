import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {Linking, View} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Welcome extends Component {

    render() {

        const navigateTo = (loc) => {
            this.props.navigation.navigate(loc);
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center'/>
              <Divider/>
              <Layout style={styles.centeredContainer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.styledButton} activeOpacity = { .7 } onPress={() => navigateTo('Survey')}>
                            <Text style={styles.btnText}>Quick Start</Text>
                        </TouchableOpacity>
                    </View>
               </Layout>
              <Layout style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering 2020"}
                </Text>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
