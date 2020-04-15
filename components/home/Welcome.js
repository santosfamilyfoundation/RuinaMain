import React, { Component } from 'react';
import { SafeAreaView, Linking} from 'react-navigation';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';

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
                <Button style={styles.styledButton} onPress={() => navigateTo('Survey')}>Start New Report</Button>
              </Layout>
              <Layout style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering"}
                </Text>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
