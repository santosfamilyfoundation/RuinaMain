import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
class FeatureComingSoon extends Component {
    state = {
        content: '',
    }

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Feature Coming Soon' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign:'center', padding:15}}>This feature has been made, however it's either deactivated or pending licensing agreement with its integration partner. We apologize that we cannot show you this feature at this time.</Text>
              </Layout>
              <Button onPress={() => this.navigateBack()}>Go Back</Button>
            </SafeAreaView>
          );
    }
};


export default FeatureComingSoon;
