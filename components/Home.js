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
          this.props.navigation.navigate('Result');
        };
        
        const navigateWeather = () => {
          this.props.navigation.navigate('Weather');
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Home' alignment='center'/>
              <Divider/>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to Ruina!</Text>
              <Divider/>
              <Button onPress={navigateWeather}>Go to Weather Screen</Button>
              <Divider/>
              <Button onPress={navigateResult}>Go to Result Screen</Button>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, width: 500, height: 300, marginBottom: 20}}
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={text => this.setState({content: text})}
                        value={this.state.content}/>
                <Button onPress={() =>this.props.writeStory(this.state.content)}>SAVE</Button>
              </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);