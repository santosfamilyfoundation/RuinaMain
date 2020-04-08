import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
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
            </SafeAreaView>
          );
    }
};

export default Welcome;
