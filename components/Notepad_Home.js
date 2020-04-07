import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Notepad_Home extends Component {
  state = {
    content: ''
  }
    render() {

        const navigateResult = () => {
            this.props.navigation.navigate('Result');
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Result' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to the Notepad!</Text>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, width: 500, height: 300, marginBottom: 20}}
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={text => this.setState({content: text})}
                        value={this.state.content}/>
                <Button onPress={() =>this.props.writeStory(this.state.content)}>SAVE</Button>
              </Layout>
              <Button onPress={navigateResult}>NEXT</Button>
            </SafeAreaView>
          );
    }
};

const mapDispatchToProps = dispatch => ({
  writeStory: (story) => dispatch({ type: 'WRITE', payload: story })
});

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notepad_Home);