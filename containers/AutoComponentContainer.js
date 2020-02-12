import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';

const testData = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];

class AutoComponentContainer extends Component {
  state = {
    content: ''
  }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Auto Component' alignment='center' leftControl={this.props.BackAction()}/>
              <Divider/>
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello</Text>
                <DropDownSingleSelect 
                    data={testData}
                />
              </Layout>
            </SafeAreaView>
          );
    }
};

export default AutoComponentContainer;