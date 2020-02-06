import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    content: ''
  }
    render() {

        const navigateDetails = () => {
            this.props.navigation.navigate('Details');
          };

        const writing = "story that is written nicely";

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Ruina' alignment='center'/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
                        onChangeText={text => this.setState({content: text})}
                        value={this.state.content}/>
                <Button onPress={() =>this.props.writeStory(this.state.content)}>SAVE</Button>
                <Button onPress={() => console.log(this.state)}>log state</Button>
              </Layout>
              <Button onPress={navigateDetails}>NEXT</Button>
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