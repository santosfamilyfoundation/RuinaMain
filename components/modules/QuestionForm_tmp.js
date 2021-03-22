import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { styles } from '../../containers/AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../buttonSelectors/MultiButtonSelector';
import AutoCompleteDropDown from '../dropdowns/AutoCompleteDropDown';
import DropDownSingleSelect from '../dropdowns/DropDownSingleSelect';
import OpenTextField from '../textFields/OpenTextField';
import OpenTextFieldWithSelection from '../textFields/OpenTextFieldWithSelection';
import AdvancedOpenTextField from '../textFields/AdvancedOpenTextField';
import AdvancedDropDown from '../dropdowns/AdvancedDropDown';
import DropDownMultiSelect from '../dropdowns/DropDownMultiSelect';
import LargeTextField from '../textFields/LargeTextField';
import HeaderComponent from '../header/HeaderComponent';
import { updateDriver } from '../../actions/DriverAction';
import { updateNonmotorist } from '../../actions/NonmotoristAction';
import { updateVehicle } from '../../actions/VehicleAction';
import { updatePassenger } from '../../actions/PassengerAction';
import { updateRoad } from '../../actions/RoadAction';
import { updateResponse } from '../../actions/StoryActions';

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
    navigation
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
        key:res.data.id,
        id:res.detail.objectID,
        reducer:res.setting.reducer,
        submitFunction:res.setting.submitFunction,
        userUpdate: res.userResponse
      }
      // console.log('PublicObjtype', type)
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
        largeTextField: {
           ...PublicObj
        },
        multiButton: {
          ...PublicObj
        },
        autoCompleteDropdown: {
          ...PublicObj
        },
        header: {
          data: res.data,
          key: res.data.id,
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
        case 'autoCompleteDropdown':
          return (
            <AutoCompleteDropDown
              {...props}
            />
          )
        case 'header':
            return (
              <HeaderComponent
                {...props}
              />
            )
      }
    }

    const question = questionData(questionDetail.type)
    const renderedQuestions = question.questionsData.map((item) => {
      const obj = {data:item, setting: question, detail:questionDetail, userResponse:props.updateResponse }
      // const ref = React.useRef(React.createRef()) 
      const dom = renderSingleQuestion(item.answerType, questionProps(item.answerType, obj) );
      // objectRef.push(ref)
      return dom
    });

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={`${questionDetail.type} Questions`} alignment='center' leftControl={BackAction()} />
      <Divider />
      <ScrollView>
        <Layout style={styles.content}>
          {renderedQuestions}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapDispatchToProps = {
  updateDriver,
  updateNonmotorist,
  updateVehicle,
  updatePassenger,
  updateRoad,
  updateResponse
}

const mapStateToProps = (state) => {

  return {
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
