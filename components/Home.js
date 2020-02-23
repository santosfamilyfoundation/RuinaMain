import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { genericWriteAction } from '../actions/GenericAction';

class Home extends Component {
  state = {
    content: ''
  }
    render() {

        const navigateResult = () => {
<<<<<<< HEAD
            this.props.navigation.navigate('Result');
        };

        const navigateVehicle = () => {
          this.props.navigation.navigate('Vehicle');
      };
=======
          this.props.navigation.navigate('Result');
        };
>>>>>>> a787d83f7096dfab58689d778d3d9e152b8dd27e

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Note Pad' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
<<<<<<< HEAD
              <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to Ruina!</Text>
              <Button onPress={navigateResult}>Go to Reseult</Button>
              <Button onPress={navigateVehicle}>Go to Vehicle Information</Button>
=======
>>>>>>> a787d83f7096dfab58689d778d3d9e152b8dd27e
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, width: 500, height: 300, marginBottom: 20}}
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={text => this.setState({content: text})}
                        value={this.state.content}/>
                {/* <Button onPress={() =>this.props.writeStory(this.state.content)}>SAVE</Button> */}
                <Button onPress={() =>this.props.genericWriteAction({actionType:'SET_NEW', field:'tester', content:this.state.content})}>TRY ME!</Button>
              </Layout>
<<<<<<< HEAD
=======
              <Button onPress={navigateResult}>Go to Result Screen</Button>
>>>>>>> a787d83f7096dfab58689d778d3d9e152b8dd27e
            </SafeAreaView>
          );
    }
};

// const mapDispatchToProps = dispatch => ({
//   writeStory: (story) => dispatch({ type: 'WRITE', payload: story }),
//   genericWriteAction
// });

const mapDispatchToProps = {
  genericWriteAction
}

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
