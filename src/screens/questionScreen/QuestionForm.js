import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Divider, Box, Accordion, VStack, Button } from 'native-base';
import { styles } from '../../autocomponentContainer/AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../../components/buttonSelectors/MultiButtonSelector';
import NumberButtonSelector from '../../components/buttonSelectors/NumberButtonSelector';
import QuestionAutoCompleteDropDown from '../../components/dropdowns/QuestionAutoCompleteDropDown';
import DropDownSingleSelect from '../../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../../components/textFields/OpenTextField';
import OpenTextFieldWithSelection from '../../components/textFields/OpenTextFieldWithSelection';
import AdvancedOpenTextField from '../../components/textFields/AdvancedOpenTextField';
import AdvancedDropDown from '../../components/dropdowns/AdvancedDropDown';
import DropDownMultiSelect from '../../components/dropdowns/DropDownMultiSelect';
import CountyDropDown from '../../components/dropdowns/CountyDropDown';
import LargeTextField from '../../components/textFields/LargeTextField';
import QuestionHeader from '../../components/QuestionHeader';
import { updateDriver } from '../../actions/DriverAction';
import { updateNonmotorist } from '../../actions/NonmotoristAction';
import { updateVehicle } from '../../actions/VehicleAction';
import { updatePassenger } from '../../actions/PassengerAction';
import { updateRoad } from '../../actions/RoadAction';
import { updateResponse } from '../../actions/StoryActions';
import TopNavigation from '../../components/TopNavigation';

const QuestionForm = (props) => {
  const {
    questionDetail,
    navigation,
    updateResponse,
  } = props

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
  
   const RenderSingleQuestion = (props) => {
      switch (props.type) {
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
          const comp = (<OpenTextField
            {...props}
          />)
          console.log(comp)
          return (
            comp
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
        default:
          return null;
      }
    }

    const question = questionDetail.questions;
    // console.log('questionDetail:', questionDetail);
    const RenderedQuestions = ({questions}) => {
      console.log('Beginning to render questions for section')
      const questionsTimer = performance.now()
      // console.log('questions in renderedQuestions:', questions)
        let questionList = []
        for (const q of questions) {
            const obj = {data:q, setting: question, detail:questionDetail}
            const newProps = questionProps(q.answerType, obj)
            newProps['type'] = q.answerType
            const dom = <RenderSingleQuestion newProps key={q.id}/>
            // const dom = renderSingleQuestion(q.answerType, questionProps(q.answerType, obj));
            questionList.push(dom)
        }
        console.log('Rendering all questions for section duration:', Math.round(performance.now() - questionsTimer))
        return (
            <VStack>
                {questionList}
            </VStack>
        )
      
    };

  const RenderSingleSection = ({item}) => {
    const sectionTimer = performance.now()
    console.log('Beginning to render a single section')
    // console.log('item in renderSingleSection:', item)
    const result = (<Accordion.Item>
      <Accordion.Summary>
          {item.sectionTitle}
          <Accordion.Icon />
      </Accordion.Summary>
      <Accordion.Details>
          <RenderedQuestions questions={item.questions}/>
      </Accordion.Details>
  </Accordion.Item>)
  console.log('Render single section duration:', Math.round(performance.now() - sectionTimer))
    return result
  }


  const RenderSections = ({question}) => {
    const sectionsTimer = performance.now()
    console.log('Beginning to render all sections')
    const result = <Accordion index={[0]} mx={4} my={8}> <RenderSingleSection item={question.questionsData[0]}/> </Accordion>
    //  (<Accordion index={[0]} mx={4} my={8}> { question.questionsData.map(item => <RenderSingleSection item={item} key={item.sectionTitle}/>) } </Accordion>)
  console.log('Render all sections duration:', Math.round(performance.now() - sectionsTimer))
    return result
    
  }
  
  console.log('question in QuestionForm:', question)
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={`Questions on ${questionDetail.name}`} backButton navigation={navigation}/>
      <ScrollView>
        <Box>
            <RenderSections question={question}/>
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
