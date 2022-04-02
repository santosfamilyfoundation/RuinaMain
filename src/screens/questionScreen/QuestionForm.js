import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { Divider, Box, Accordion, VStack, Button, Text, Spinner, Center } from "native-base";
import { styles } from "../../autocomponentContainer/AutoComponentContainer.style";
import { ScrollView } from "react-native-gesture-handler";
import MultiButtonSelector from "../../components/buttonSelectors/MultiButtonSelector";
import NumberButtonSelector from "../../components/buttonSelectors/NumberButtonSelector";
import QuestionAutoCompleteDropDown from "../../components/dropdowns/QuestionAutoCompleteDropDown";
import DropDownSingleSelect from "../../components/dropdowns/DropDownSingleSelect";
import OpenTextField from "../../components/textFields/OpenTextField";
import OpenTextFieldWithSelection from "../../components/textFields/OpenTextFieldWithSelection";
import AdvancedOpenTextField from "../../components/textFields/AdvancedOpenTextField";
import AdvancedDropDown from "../../components/dropdowns/AdvancedDropDown";
import DropDownMultiSelect from "../../components/dropdowns/DropDownMultiSelect";
import CountyDropDown from "../../components/dropdowns/CountyDropDown";
import LargeTextField from "../../components/textFields/LargeTextField";
import QuestionHeader from "../../components/QuestionHeader";
import { updateDriver } from "../../actions/DriverAction";
import { updateNonmotorist } from "../../actions/NonmotoristAction";
import { updateVehicle } from "../../actions/VehicleAction";
import { updatePassenger } from "../../actions/PassengerAction";
import { updateRoad } from "../../actions/RoadAction";
import { updateResponse } from "../../actions/StoryActions";
import TopNavigation from "../../components/TopNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";

import { questions } from "../../data/questions";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    const {
      questionDetail,
      updateDriver,
      updateNonmotorist,
      updatePassenger,
      updateVehicle,
      updateRoad,
      BackAction,
    } = props;

    this.state = {
      navigation: props.navigation,
      updateResponse: props.updateResponse,
      loading: true,
    };

    this.sections = undefined;
  }

  filterQuestionsData(questionType) {
	  let filteredQuestions = []
	 let i = 0;
	 while (i < questions.data.length) {
		 let q = questions.data[i];
		 if (q.display.includes(questionType)) {
			 filteredQuestions.push(q);
		 }
		 i = i+1;
	 }
	return filteredQuestions;
  }

  navigateToAdvanced(place, props) {
    this.state.navigation.navigate(place, props);
  }

  questionProps(type, res) {
    const PublicObj = {
      data: res.data,
      key: res.data.id,
      id: res.detail.objectID,
      dependencyID: res.detail.dependencyID,
      reducer: res.setting.reducer,
      submitFunction: res.setting.submitFunction,
      updateResponse: updateResponse,
    };

    const obj = {
      dropdown: {
        ...PublicObj,
      },
      dropdownMultiSelect: {
        ...PublicObj,
      },
      openTextBox: {
        ...PublicObj,
      },
      openTextBoxWithSelection: {
        ...PublicObj,
      },
      advancedOpenTextBox: {
        ...PublicObj,
        pageChange: this.navigateToAdvanced,
        importFrom: res.data.autoMethod,
      },
      advancedDropDown: {
        ...PublicObj,
        pageChange: this.navigateToAdvanced,
        importFrom: res.data.autoMethod,
      },
      countyDropDown: {
        ...PublicObj,
      },
      largeTextField: {
        ...PublicObj,
      },
      multiButton: {
        ...PublicObj,
      },
      numberButton: {
        ...PublicObj,
      },
      autoCompleteDropdown: {
        ...PublicObj,
      },
      questionHeader: {
        data: res.data,
        dependencyID: res.detail.dependencyID,
      },
    };
    return obj[type];
  }

  questionData(type) {
    const obj = {
      Driver: {
        reducer: "driverReducer",
        submitFunction: updateDriver,
        actionType: "UPDATEDRIVER",
        questionsData: this.filterQuestionsData("driver"),
      },
      Nonmotorist: {
        reducer: "nonmotoristReducer",
        submitFunction: updateNonmotorist,
        actionType: "UPDATENONMOTORIST",
        questionsData: this.filterQuestionsData("nonmotorist"),
      },
      Passenger: {
        reducer: "passengerReducer",
        submitFunction: updatePassenger,
        actionType: "UPDATEPASSENGER",
        questionsData: this.filterQuestionsData("passenger"),
      },
      Vehicle: {
        reducer: "vehicleReducer",
        submitFunction: updateVehicle,
        actionType: "UPDATEVEHICLE",
        questionsData: this.filterQuestionsData("vehicle"),
      },
      Road: {
        reducer: "roadReducer",
        submitFunction: updateRoad,
        actionType: "UPDATEROAD",
        questionsData: this.filterQuestionsData("road"),
      },
    };
    return type ? obj[type] : obj;
  }

  renderSingleQuestion(type, props) {
	  console.log("Rendering single question");
    switch (type) {
      case "dropdown":
        return <DropDownSingleSelect {...props} />;

      case "dropdownMultiSelect":
        return <DropDownMultiSelect {...props} />;

      case "openTextBox":
        return <OpenTextField {...props} />;

      case "openTextBoxWithSelection":
        return <OpenTextFieldWithSelection {...props} />;

      case "advancedOpenTextBox":
        return <AdvancedOpenTextField {...props} />;

      case "advancedDropDown":
        return <AdvancedDropDown {...props} />;

      case "countyDropDown":
        return <CountyDropDown {...props} />;

      case "largeTextField":
        return <LargeTextField {...props} />;

      case "multiButton":
        return <MultiButtonSelector {...props} />;
      case "numberButton":
        return <NumberButtonSelector {...props} />;
      case "autoCompleteDropdown":
        return <QuestionAutoCompleteDropDown {...props} />;
      case "questionHeader":
        return <QuestionHeader {...props} />;
    }
  }

  question = this.questionData(this.props.questionDetail.type);
  renderQuestions(questions) {
	  console.log("Rendering questions");
    const questionList = questions.map((q) =>
      this.renderSingleQuestion(
        q.answerType,
        this.questionProps(q.answerType, {
          data: q,
          setting: this.question,
          detail: this.props.questionDetail,
        })
      )
    );

    return <VStack>{questionList}</VStack>;
  }

  renderSingleSection(item) {
	  console.log("Rendering section");
    return (
      <Accordion.Item>
        <Accordion.Summary>
          {item.sectionTitle}
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>{this.renderQuestions(item.questions)}</Accordion.Details>
      </Accordion.Item>
    );
  }

  renderSections() {
	  console.log("Rendering sections");
	  let renderedSections = []
	  let i;
	  for (i = 0; i < this.question.questionsData.length; i++) {
		  let item = this.question.questionsData[i];
		  renderedSections.push(this.renderSingleSection(item));
	  }
    const result = (
      <Accordion index={[0]} mx={4} my={8}>
        {renderedSections}
      </Accordion>
    );
	return result;
  }

  componentDidMount() {
    const p = new Promise((r) =>
      setTimeout(() => {
        this.sections = this.renderSections();
		console.log('updated sections:', this.sections);
        this.setState({ loading: false });
      })
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.container}>
          <TopNavigation
            title={`Questions on ${this.props.questionDetail.name}`}
            backButton
            navigation={this.state.navigation}
          />
          <Center flex={1}>
            <Spinner accessibilityLabel="loadingScreen" size="lg" />
          </Center>
        </SafeAreaView>
      );
    } else {
		console.log(this.sections);
      return (
        <SafeAreaView style={styles.container}>
          <TopNavigation
            title={`Questions on ${this.props.questionDetail.name}`}
            backButton
            navigation={this.state.navigation}
          />
          <ScrollView>
            <Box>{this.sections}</Box>
          </ScrollView>
          <Divider />
          <Box p={4}>
            <Button
              onPress={() => {
                navigation.goBack();
              }}
            >
              Save Progress
            </Button>
          </Box>
          <VStack alignItems="center" mt={2} mb={8}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://forms.gle/aXVjxVrQU6jm3KUx6")
              }
            >
              <Text style={{ color: "blue" }}>Submit Feedback</Text>
            </TouchableOpacity>
          </VStack>
        </SafeAreaView>
      );
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
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
