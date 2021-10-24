import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
//import { Text, Divider, Layout, TopNavigation, CardHeader, Card } from '@ui-kitten/components';
import { styles } from './AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../components/buttonSelectors/MultiButtonSelector';
import QuestionAutoCompleteDropDown from '../components/dropdowns/QuestionAutoCompleteDropDown';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../components/textFields/OpenTextField';
import DropDownMultiSelect from '../components/dropdowns/DropDownMultiSelect';
import LargeTextField from '../components/textFields/LargeTextField';
import Section from '../components/Section';
import TopNavigation from '../components/TopNavigation';

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
      }
    }

    const renderSubQuestions = (questions) => {
      const renderedQuestions = questions.subquestions.map(question => (
        renderSingleQuestion(question)
      ));
      return (
        <Section key={questions.id} title={questions.question}>
          {renderedQuestions}
        </Section>
      );
    }  

    const renderedQuestions = questions.data.map((question) => {
      if(!question.subquestions) {
        return renderSingleQuestion(question)
      } else {
        return renderSubQuestions(question)
      }
    });

    return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title={this.props.title} backButton navigation={this.props.navigation}/>
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