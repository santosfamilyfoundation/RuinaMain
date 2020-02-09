import React, { Component } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Divider, Layout, Select, TopNavigation, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { DropDownQuestion } from './DropDownQuestion';

const data = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
];

class AutoComponent extends Component {
  state = {
    selectedOption: ''
  }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Dropdown1' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Dropdown Selector</Text>
                <DropDownQuestion data={data}/>
              </Layout>
              
            </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        minHeight: 228,
      },
});

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

export default connect(mapStateToProps)(AutoComponent);