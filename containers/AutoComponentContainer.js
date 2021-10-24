import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Divider, Layout, TopNavigation, CardHeader, Card } from '@ui-kitten/components';
import { styles } from './AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../components/buttonSelectors/MultiButtonSelector';
import QuestionAutoCompleteDropDown from '../components/dropdowns/QuestionAutoCompleteDropDown';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../components/textFields/OpenTextField';
import DropDownMultiSelect from '../components/dropdowns/DropDownMultiSelect';
import LargeTextField from '../components/textFields/LargeTextField';
import NumberButtonSelector from '../components/buttonSelectors/NumberButtonSelector';
import {questions} from '../data/questions';

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
        case 'dropdownMultiSelect':
          return (
            <DropDownMultiSelect 
              data={question}
              key={question.id}
            />
          )
        case 'openTextbox':
          return (
            <OpenTextField 
              data={question}
              key={question.id}
            />
          )
        case 'largeTextField':
          return (
            <LargeTextField
              data={question}
              key={question.id}
            />
          )
        case 'multiButton':
          return (
            <MultiButtonSelector
              data={question}
              key={question.id}
            />
          )
        case 'autoCompleteDropdown':
          return (
            <QuestionAutoCompleteDropDown
              data={question}
              key={question.id}
            />
          )
        case 'numberButton':
          return (
            <NumberButtonSelector
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
          <TopNavigation title={this.props.title} alignment='center' leftControl={this.props.BackAction()}/>
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