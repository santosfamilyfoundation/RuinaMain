import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    content: ''
  }
    render() {

        const navigateResult = () => {
            this.props.navigation.navigate('NotepadHome');
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Home' alignment='center'/>
              <Divider/>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to Ruina!</Text>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={navigateResult}>Notepad</Button>
              </Layout>
              
            </SafeAreaView>
          );
    }
};

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps)(Home);