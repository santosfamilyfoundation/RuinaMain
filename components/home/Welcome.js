import React, { Component } from 'react';
import { SafeAreaView} from 'react-navigation';
import {Linking} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import backgroundSave from '../../utils/backgroundSave';

class Welcome extends Component {
    constructor(props){
      super(props);
      this.stateManager = new backgroundSave();
      this.autoSavedSession = false;
    }

    render() {
        this.stateManager.RNFS.exists(this.stateManager.path).then((exists) => {
          if (exists) {
            this.autoSavedSession = true;
            console.log('Detect unfinished report!')
          } else {
            this.autoSavedSession = false;
            console.log('No unfinished report!')
          }
        })

        const navigateTo = (loc) => {
          this.props.navigation.navigate(loc, {autoSavedSession: this.autoSavedSession});
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
