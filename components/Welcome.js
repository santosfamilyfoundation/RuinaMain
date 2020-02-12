import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

class Welcome extends Component {
  state = {
    content: ''
  }
    render() {

        const navigateHome = () => {
            this.props.navigation.navigate('Home');
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center'/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={navigateHome}>Note Pad</Button>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;