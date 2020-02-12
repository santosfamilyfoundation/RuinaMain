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

        const navigateVehicle = () => {
          this.props.navigation.navigate('Vehicle');
      };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Home' alignment='center'/>
              <Divider/>
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to Ruina!</Text>
              <Button onPress={navigateResult}>Go to Reseult</Button>
              <Button onPress={navigateVehicle}>Go to Vehicle Information</Button>
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