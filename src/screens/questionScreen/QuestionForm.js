import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Divider, Box, Accordion, VStack, Button, Center, Spinner } from 'native-base';
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

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionDetail: props.questionDetail,
      navigation: props.navigation,
      updateResponse: props.updateResponse,
    }

    this.sections = undefined
    this.question = this.props.questionDetail.questions;
  }

  navigateToAdvanced(place, props) {
    this.state.navigation.navigate(place, props);
  }

  componentDidMount() {
    console.log("Component did mount");
    this.renderSections();
  }

  questionProps(type, res) {
    const PublicObj = {
      data: res.data,
      key: res.data.id,
      id:res.detail.objectID,
      dependencyID:res.detail.dependencyID,
      reducer:res.setting.reducer,
      submitFunction:res.setting.submitFunction,
      updateResponse: this.state.updateResponse
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
        pageChange: this.navigateToAdvanced,
        importFrom: res.data.autoMethod
      },
      advancedDropDown: {
        ...PublicObj,
        pageChange: this.navigateToAdvanced,
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

  renderSingleQuestion(type, props) {
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
        const comp = (<OpenTextField
          {...props}
        />)
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

  renderQuestions(questions) {
    console.log('Beginning to render questions for section')
    const questionList = questions.map(q => 
      this.renderSingleQuestion(q.answerType, 
        this.questionProps(q.answerType, 
          {data:q, setting: this.question, detail: this.state.questionDetail}))
    )
      return (
          <VStack>
              {questionList}
          </VStack>
      )
    
  };

  renderSingleSection(item) {
    console.log('Beginning to render a single section')
    return (
      <Accordion.Item>
        <Accordion.Summary>
          {item.sectionTitle}
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          { this.renderQuestions(item.questions) }
        </Accordion.Details>
      </Accordion.Item>)
  }

  renderSections() {
    console.log("Starting to render all sections");
    const result = <Accordion index={[0]} mx={4} my={8}>{this.question.questionsData.map(item => this.renderSingleSection(item))}</Accordion>
    console.log("Finished rendering all sections");
    this.sections = result;
  }

  render() {
    
    console.log('rendering');

    if (this.sections == undefined) {
      console.log('rendering loading');
      return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title={`Questions on ${this.state.questionDetail.name}`} backButton navigation={this.state.navigation}/>
          <Center flex={1}>
              <Spinner accessibilityLabel="loadingScreen" size="lg"/>
            </Center>
        </SafeAreaView>
      )
    }
    else {
      console.log('rendering sections');
      return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title={`Questions on ${this.state.questionDetail.name}`} backButton navigation={this.state.navigation}/>
            <VStack>
            <ScrollView>
            <Box>
                {this.state.sections}
            </Box>
          </ScrollView>
          <Divider />
          <Box p={4}>
            <Button onPress={()=> {this.state.navigation.goBack()}}>Save Progress</Button>
          </Box>
          </VStack> 
        </SafeAreaView>
      )
    }
  }

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
