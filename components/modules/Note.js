import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { genericWriteAction } from '../../actions/GenericAction';

class Note extends Component {
  state = {
    content: '',
  }
    render() {

        const navigateResult = () => {
          this.props.navigation.navigate('Result');
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Note Pad' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, width: 500, height: 300, marginBottom: 20}}
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={text => this.setState({content: text})}
                        value={this.state.content}/>
                <Button onPress={() =>this.props.genericWriteAction({actionType:'SET_NEW', field:'tester', content:this.state.content})}>TRY ME!</Button>
              </Layout>
              <Button onPress={navigateResult}>Go to Result Screen</Button>
            </SafeAreaView>
          );
    }
};

const mapDispatchToProps = {
  genericWriteAction
}

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
