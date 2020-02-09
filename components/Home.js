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

        const navigateNotepad = () => {
            this.props.navigation.navigate('NotepadHome');
          };
        const navigateAutoComponent = () => {
        this.props.navigation.navigate('Auto1');
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Home' alignment='center'/>
              <Divider/>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to Ruina!</Text>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{margin: 10}} onPress={navigateNotepad}>Notepad</Button>
                <Button style={{margin: 10}} onPress={navigateAutoComponent}>Auto Component</Button>
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