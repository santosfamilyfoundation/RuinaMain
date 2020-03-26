import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, TopNavigation, CardHeader, Card, Button } from '@ui-kitten/components';
import { styles } from '../containers/AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from './buttonSelectors/MultiButtonSelector';
import AutoCompleteDropDown from './dropdowns/AutoCompleteDropDown';
import DropDownSingleSelect from './dropdowns/DropDownSingleSelect';
import OpenTextField from './textFields/OpenTextField';
import AdvancedOpenTextField from './textFields/AdvancedOpenTextField';
import DropDownMultiSelect from './dropdowns/DropDownMultiSelect';
import LargeTextField from './textFields/LargeTextField';
import { updateDriver } from '../actions/DriverAction';
import { updateNonmotorist } from '../actions/NonmotoristAction';
import { updateVehicle } from '../actions/VehicleAction';
import { updatePassenger } from '../actions/PassengerAction';
import { updateRoad } from '../actions/RoadAction';

class QuestionForm extends Component {

  render() {
    const {questionDetail, updateDriver, updateNonmotorist, updatePassenger, updateVehicle, updateRoad } = this.props
    let reducer;
    let submitFunction;
    let actionType;

    switch(questionDetail.type){
      case 'Driver':
        reducer = "driverReducer";
        submitFunction = updateDriver;
        actionType = "UPDATEDRIVER";
        break;
      case 'Nonmotorist':
        reducer = "nonmotoristReducer";
        submitFunction = updateNonmotorist;
        actionType = "UPDATENONMOTORIST";
        break;
      case 'Passenger':
        reducer = "passengerReducer";
        submitFunction = updatePassenger;
        actionType = "UPDATEPASSENGER";
        break;
      case 'Vehicle':
        reducer = "vehicleReducer";
        submitFunction = updateVehicle;
        actionType = "UPDATEVEHICLE";
        break;
      case 'Road':
        reducer = "roadReducer";
        submitFunction = updateRoad;
        actionType = "UPDATEROAD";
        break;
    }

    const navigateToAdvanced = (place) =>{
      this.props.navigation.navigate(place);
    }

    const renderSingleQuestion = (question) => {
      switch (question.answerType) {
        case 'dropdown':
          return (
            <DropDownSingleSelect
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
            />
          )
        case 'dropdownMultiSelect':
          return (
            <DropDownMultiSelect
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
            />
          )
        case 'openTextbox':
          return (
            <OpenTextField
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
            />
          )
          case 'advancedOpenTextbox':
            return (
              <AdvancedOpenTextField
                data={question}
                key={question.id}
                id={questionDetail.objectID}
                reducer={reducer}
                submitFunction={submitFunction}
                pageChange={navigateToAdvanced}
              />
            )
        case 'largeTextField':
          return (
            <LargeTextField
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
            />
          )
        case 'multiButton':
          return (
            <MultiButtonSelector
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
            />
          )
        case 'autoCompleteDropdown':
          return (
            <AutoCompleteDropDown
              data={question}
              key={question.id}
              id={questionDetail.objectID}
              reducer={reducer}
              submitFunction={submitFunction}
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

    //const isAdvancedQuestion = (question.answerType == 'advancedOpenTextbox') ? true : false;
    const isAdvancedQuestion = ('advancedOpenTextbox' == 'advancedOpenTextbox') ? true : false;

    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation title='Auto Component' alignment='center' leftControl={this.props.BackAction()}/>
        { isAdvancedQuestion ? <Button style={styles.importButton} appearance={'filled'} onPress={()=> onImportPress() }>Import from Map</Button> : <Layout/> }
        <Divider />
        <ScrollView>
          <Layout style={styles.content}>
            {renderedQuestions}
          </Layout>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const mapDispatchToProps = {
  updateDriver,
  updateNonmotorist,
  updateVehicle,
  updatePassenger,
  updateRoad,
}

const mapStateToProps = (state) => {
  const response = state.genericReducer
  return { response }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
