import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Divider, Layout, TopNavigation, CardHeader, Card } from '@ui-kitten/components';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../components/textFields/OpenTextField';
import {questions} from '../data/questions';
import { styles } from './AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import TriButtonSelector from '../components/buttonSelectors/TriButtonSelector';

const testData = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];
const question1 = questions.data[0];
const subQuestion1 = question1.subquestions[0]
const question2 = questions.data[1];

class AutoComponentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const renderSingleQuestion = (question) => {
      switch(question.answerType) {
        case 'dropdown':
          return (
            <DropDownSingleSelect 
              data={question}
              key={question.id}
            />
          )
        case 'open_textbox':
          return (
            <OpenTextField 
              data={question}
              key={question.id}
            />
          )
        case 'yes-no-unknown':
          return (
            <TriButtonSelector
              data={question}
              key={question.id}
            />
          )
      }
    }

    const renderSubQuetions = (questions) => {
      const renderedQuestions = questions.subquestions.map(question => (
        renderSingleQuestion(question)
      ));
      const Header = () => (
        <CardHeader 
          title={questions.question}
        />
      )
      return (
        <Card key={questions.id} header={Header} style={styles.card}>
          {renderedQuestions}
        </Card>
      );
    }  

    const renderedQuestions = questions.data.map((question) => {
      if(!question.subquestions) {
        return renderSingleQuestion(question)
      } else {
        return renderSubQuetions(question)
      }
    });

    return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title='Auto Component' alignment='center' leftControl={this.props.BackAction()}/>
          <Divider/>
          <ScrollView>
            <Layout style={styles.content}>
              {renderedQuestions}
            </Layout>
          </ScrollView>
        </SafeAreaView>
    );
  }
};

export default AutoComponentContainer;