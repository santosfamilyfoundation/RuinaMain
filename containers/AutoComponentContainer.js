import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../components/textFields/OpenTextField';
import {questions} from '../data/questions';

const testData = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];
const question1 = questions.data[0];
const subQuestion1 = question1.subquestions[0]
const question2 = questions.data[1];

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
                <DropDownSingleSelect 
                    data={subQuestion1}
                />
                <OpenTextField 
                    data={question2}
                />
              </Layout>
            </SafeAreaView>
          );
    }
};

export default AutoComponentContainer;