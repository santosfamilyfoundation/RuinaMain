import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Divider, Box, Accordion, VStack, Button } from 'native-base';
import { styles } from '../../containers/AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../buttonSelectors/MultiButtonSelector';
import NumberButtonSelector from '../buttonSelectors/NumberButtonSelector';
import QuestionAutoCompleteDropDown from '../dropdowns/QuestionAutoCompleteDropDown';
import DropDownSingleSelect from '../dropdowns/DropDownSingleSelect';
import OpenTextField from '../textFields/OpenTextField';
import OpenTextFieldWithSelection from '../textFields/OpenTextFieldWithSelection';
import AdvancedOpenTextField from '../textFields/AdvancedOpenTextField';
import AdvancedDropDown from '../dropdowns/AdvancedDropDown';
import DropDownMultiSelect from '../dropdowns/DropDownMultiSelect';
import CountyDropDown from '../dropdowns/CountyDropDown';
import LargeTextField from '../textFields/LargeTextField';
import QuestionHeader from '../QuestionHeader';
import { updateDriver } from '../../actions/DriverAction';
import { updateNonmotorist } from '../../actions/NonmotoristAction';
import { updateVehicle } from '../../actions/VehicleAction';
import { updatePassenger } from '../../actions/PassengerAction';
import { updateRoad } from '../../actions/RoadAction';
import { updateResponse } from '../../actions/StoryActions';
import TopNavigation from '../TopNavigation';

import {questions} from '../../data/questions';

const QuestionForm = (props) => {
  const {
    questionDetail,
    updateDriver,
    updateNonmotorist,
    updatePassenger,
    updateVehicle,
    updateRoad,
    BackAction,
    navigation,
    updateResponse,
  } = props

  // filter question information based on section type
  const filterQuestionsData = (questionType) => {
    return questions.data.filter(question => question.display.includes(questionType));
  }
  const navigateToAdvanced = (place, props) =>{
      navigation.navigate(place, props);
    }

   const questionProps = (type, res) => {
      const PublicObj = {
        data: res.data,
        key: res.data.id,
        id:res.detail.objectID,
        dependencyID:res.detail.dependencyID,
        reducer:res.setting.reducer,
        submitFunction:res.setting.submitFunction,
        updateResponse:updateResponse
      }
      const obj =
      {
        dropdown: {
          ...PublicObj
        },
        dropdownMultiSelect: {
          ...PublicObj
        },
        openTextBox: {
          ...PublicObj
        },
        openTextBoxWithSelection: {
          ...PublicObj
        },
        advancedOpenTextBox: {
           ...PublicObj,
          pageChange: navigateToAdvanced,
          importFrom: res.data.autoMethod
        },
        advancedDropDown: {
          ...PublicObj,
          pageChange: navigateToAdvanced,
          importFrom: res.data.autoMethod
        },
        countyDropDown: {
          ...PublicObj
        },
        largeTextField: {
           ...PublicObj
        },
        multiButton: {
          ...PublicObj
        },
        numberButton: {
          ...PublicObj
        },
        autoCompleteDropdown: {
          ...PublicObj
        },
        questionHeader: {
          data: res.data,
          dependencyID:res.detail.dependencyID,
        },
      }
      return  obj[type]
    }
  const questionData = (type) => {
    const obj = {
      Driver: {
        reducer: "driverReducer",
        submitFunction: updateDriver,
        actionType: "UPDATEDRIVER",
        questionsData : filterQuestionsData('driver'),
      },
      Nonmotorist: {
        reducer: "nonmotoristReducer",
        submitFunction: updateNonmotorist,
        actionType: "UPDATENONMOTORIST",
        questionsData : filterQuestionsData('nonmotorist'),
      },
      Passenger: {
        reducer: "passengerReducer",
        submitFunction: updatePassenger,
        actionType: "UPDATEPASSENGER",
        questionsData : filterQuestionsData('passenger'),
      },
      Vehicle: {
        reducer: "vehicleReducer",
        submitFunction: updateVehicle,
        actionType: "UPDATEVEHICLE",
        questionsData : filterQuestionsData('vehicle'),
      },
      Road: {
        reducer: "roadReducer",
        submitFunction: updateRoad,
        actionType: "UPDATEROAD",
        questionsData : filterQuestionsData('road'),
      }
    }
    return type?obj[type]:obj
  }
   const renderSingleQuestion = (type, props) => {
      switch (type) {
        case 'dropdown':
          return (
            <DropDownSingleSelect
              {...props}
            />
          )

        case 'dropdownMultiSelect':

          return (
            <DropDownMultiSelect
              {...props}
            />
          )

        case 'openTextBox':

          return (
            <OpenTextField
              {...props}
            />
          )

        case 'openTextBoxWithSelection':

          return (
            <OpenTextFieldWithSelection
              {...props}
            />
          )

          case 'advancedOpenTextBox':

            return (
              <AdvancedOpenTextField
              {...props}
              />
            )

        case 'advancedDropDown':

          return (
            <AdvancedDropDown
              {...props}
            />
          )
        
        case 'countyDropDown':
          return (
            <CountyDropDown
              {...props}
            />
          )

        case 'largeTextField':
          return (
            <LargeTextField
              {...props}
            />
          )

        case 'multiButton':
          return (
            <MultiButtonSelector
              {...props}
            />
          )
        case 'numberButton':
          return (
            <NumberButtonSelector
                {...props}
            />
          )
        case 'autoCompleteDropdown':
          return (
            <QuestionAutoCompleteDropDown
              {...props}
            />
          )
        case 'questionHeader':
            return(
                <QuestionHeader
                    {...props}
                />
            )
      }
    }

    const question = questionData(questionDetail.type)
    const renderedQuestions = (questions) => {
        let questionList = []
        for (const q of questions) {
            const obj = {data:q, setting: question, detail:questionDetail}
            const dom = renderSingleQuestion(q.answerType, questionProps(q.answerType, obj));
            questionList.push(dom)
        }
        return (
            <VStack>
                {questionList}
            </VStack>
        )
    };
  const renderSingleSection = (item) => {
    return (
        <Accordion.Item>
            <Accordion.Summary>
                {item.sectionTitle}
                <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
                {renderedQuestions(item.questions)}
            </Accordion.Details>
        </Accordion.Item>
    )
  }


  const renderSections = (question) => {
    return (
        <Accordion index={[0]} mx={4} my={8}>
            { question.questionsData.map(item => renderSingleSection(item)) }
        </Accordion>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={`Questions on ${questionDetail.name}`} backButton navigation={navigation}/>
      <ScrollView>
        <Box>
            {renderSections(question)}
        </Box>
      </ScrollView>
      <Divider />
      <Box p={4}>
        <Button onPress={()=> {navigation.goBack()}}>Save Progress</Button>
      </Box>
    </SafeAreaView>
  );
}

const mapDispatchToProps = {
  updateDriver,
  updateNonmotorist,
  updateVehicle,
  updatePassenger,
  updateRoad,
  updateResponse,
}

const mapStateToProps = (state) => {

  return {
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
