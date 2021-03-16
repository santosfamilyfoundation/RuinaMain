import React, { Component } from 'react';
import { SafeAreaView} from 'react-navigation';
import {Linking} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Welcome extends Component {
    constructor(props){
      super(props);
      this.backgroundSavedSessionExist = false;
    }



    render() {

        const navigateTo = (loc) => {
            this.props.navigation.navigate(loc);
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center'/>
              <Divider/>
              <Layout style={styles.centeredContainer}>
                <Button style={styles.styledButton} onPress={() => navigateTo('Survey')}>Start New Report</Button>
              </Layout>
              <Layout style={styles.bottomBar}>
                <TouchableOpacity onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}><Text style={{color: 'blue'}}>Submit Feedback</Text></TouchableOpacity>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering 2020"}
                </Text>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
