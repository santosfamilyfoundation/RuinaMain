import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Text, Divider, Layout, TopNavigation, CardHeader, Card, Button } from '@ui-kitten/components';
import { styles } from '../containers/AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from './buttonSelectors/MultiButtonSelector';
import AutoCompleteDropDown from './dropdowns/AutoCompleteDropDown';
import DropDownSingleSelect from './dropdowns/DropDownSingleSelect';
import OpenTextField from './textFields/OpenTextField';
import DropDownMultiSelect from './dropdowns/DropDownMultiSelect';
import LargeTextField from './textFields/LargeTextField';
import { updateDriver } from '../actions/DriverAction';
import { updateNonmotorist } from '../actions/NonmotoristAction';
import { updateVehicle } from '../actions/VehicleAction';
import { updatePassenger } from '../actions/PassengerAction';

class QuestionForm extends Component {

  render() {
    const { questionDetail, updateDriver, updateNonmotorist, updatePassenger, updateVehicle } = this.props
    const saveObjectData = (id) => {
      const response = this.props.response
      switch(questionDetail.type){
        case 'Driver':
          updateDriver({id, response})
          return;
        case 'Nonmotorist':
          updateNonmotorist({id, response})
          return;
        case 'Passenger':
          updatePassenger({id, response})
          return;
        case 'Vehicle':
          updateVehicle({id, response})
          return;
        default:
          return;
      }
    }

    const renderSingleQuestion = (question) => {
      switch (question.answerType) {
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
            <AutoCompleteDropDown
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

    const renderedQuestions = questionDetail.questions.map((question) => {
      if (!question.subquestions) {
        return renderSingleQuestion(question)
      } else {
        return renderSubQuetions(question)
      }
    });

    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation title='Auto Component' alignment='center' leftControl={this.props.BackAction()} />
        <Divider />
        <ScrollView>
          <Layout style={styles.content}>
            {renderedQuestions}
          </Layout>
          <Button onPress={() => saveObjectData(questionDetail.objectID)}>SAVE</Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const mapDispatchToProps = {
  updateDriver,
  updateNonmotorist,
  updateVehicle,
  updatePassenger
}

const mapStateToProps = (state) => {
  const response = state.genericReducer
  return { response }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
