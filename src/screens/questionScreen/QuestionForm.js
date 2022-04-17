/*
The QuestionForm is a functional component that renders the questions for a given section. It renders all the questions within
a ScrollView and includes a Save Progress button so that the user can go back to the Home screen (though it is not necessary
to press the Save Progress button to save progress, as the report is always auto-saving). The QuestionForm's props include:
questionDetail - an object that includes the set of all questions, the type of form, etc.
updateDriver, updateNonmotorist, updateVehicle, updatePassenger, updateRoad - reducers for updating the relevant entities
navigation - the object used to navigate back
updateResponse - reducer used to save form response to the redux state
*/

import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { Divider, Box, Accordion, VStack, Button, Text } from "native-base";
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
import {
   ADVANCED_OPENTEXTBOX,
   AUTOCOMPLETE_DROPDOWN,
   ADVANCED_DROPDOWN,
   COUNTY_DROPDOWN,
   DROPDOWN,
   DROPDOWN_MULTISELECT,
   LARGE_TEXT_FIELD,
   MULTIBUTTON,
   NUMBERBUTTON,
   OPENTEXTBOX,
   OPENTEXTBOX_SELECTION,
   QUESTION_HEADER,
} from "../../constants";

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
   } = props;

   // used to navigate to special screens, like the Map/License Plate Scanning screen
   // for the advanced dropdown or advanced open text box
   const navigateToAdvanced = (place, props) => {
      navigation.navigate(place, props);
   };

   /*
   Returns an object containing the relevant props for the question based on the question type.
   The object contains the following data:
   data - the question data
   key - the question ID
   id - the id of the form the question is part of
   dependencyID - the list of dependencies related to this question, including the entities this question is related (the forms)
   reducer - the reducer for this question
   submitFunction - the submit function for this question
   updateResponse - the updateResponse reducer

   For the advanced open text field and the advanced dropdown, which include functionality to autofill, 
   the question props object also includes a function to navigate to a special screen and the autofill method.
   */
   const questionProps = (type, res) => {
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
            pageChange: navigateToAdvanced,
            importFrom: res.data.autoMethod,
         },
         advancedDropDown: {
            ...PublicObj,
            pageChange: navigateToAdvanced,
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
   };

   /*
   Returns an object containing all of the data for the appropriate form, including the
   reducer type, function to update the reducer, the action type, and the actual questions.
   */
   const questionData = (type) => {
      const obj = {
         Driver: {
            reducer: "driverReducer",
            submitFunction: updateDriver,
            actionType: "UPDATEDRIVER",
            questionsData: questionDetail.questions,
         },
         Nonmotorist: {
            reducer: "nonmotoristReducer",
            submitFunction: updateNonmotorist,
            actionType: "UPDATENONMOTORIST",
            questionsData: questionDetail.questions,
         },
         Passenger: {
            reducer: "passengerReducer",
            submitFunction: updatePassenger,
            actionType: "UPDATEPASSENGER",
            questionsData: questionDetail.questions,
         },
         Vehicle: {
            reducer: "vehicleReducer",
            submitFunction: updateVehicle,
            actionType: "UPDATEVEHICLE",
            questionsData: questionDetail.questions,
         },
         Road: {
            reducer: "roadReducer",
            submitFunction: updateRoad,
            actionType: "UPDATEROAD",
            questionsData: questionDetail.questions,
         },
      };
      return type ? obj[type] : obj;
   };

   /*
   Returns a question component of the appropriate type with the given props.
   */
   const renderSingleQuestion = (type, props) => {
      switch (type) {
         case DROPDOWN:
            return <DropDownSingleSelect {...props} />;

         case DROPDOWN_MULTISELECT:
            return <DropDownMultiSelect {...props} />;

         case OPENTEXTBOX:
            return <OpenTextField {...props} />;

         case OPENTEXTBOX_SELECTION:
            return <OpenTextFieldWithSelection {...props} />;

         case ADVANCED_OPENTEXTBOX:
            return <AdvancedOpenTextField {...props} />;

         case ADVANCED_DROPDOWN:
            return <AdvancedDropDown {...props} />;

         case COUNTY_DROPDOWN:
            return <CountyDropDown {...props} />;

         case LARGE_TEXT_FIELD:
            return <LargeTextField {...props} />;

         case MULTIBUTTON:
            return <MultiButtonSelector {...props} />;

         case NUMBERBUTTON:
            return <NumberButtonSelector {...props} />;

         case AUTOCOMPLETE_DROPDOWN:
            return <QuestionAutoCompleteDropDown {...props} />;

         case QUESTION_HEADER:
            return <QuestionHeader {...props} />;
      }
   };

   // Retrieve the question data object for the form type
   const question = questionData(questionDetail.type);

   /*
   Returns the DOM for all the questions within a single section, given the list of 
   questions.
   */
   const renderedQuestions = (questions) => {
      let questionList = [];
      for (const q of questions) {
         const obj = { data: q, setting: question, detail: questionDetail };
         const dom = renderSingleQuestion(
            q.answerType,
            questionProps(q.answerType, obj)
         );
         questionList.push(dom);
      }
      return <VStack>{questionList}</VStack>;
   };

   /*
   Given a section of questions, returns the components to render the section.
   */
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
      );
   };

   /*
   Returns the components to render all of the sections for the form, given the complete
   question data object for the form.
   */
   const renderSections = (question) => {
      return (
         <Accordion index={[0]} mx={4} my={8}>
            {question.questionsData.map((item) => renderSingleSection(item))}
         </Accordion>
      );
   };

   return (
      <SafeAreaView style={styles.container}>
         <TopNavigation
            title={`Questions on ${questionDetail.name}`}
            backButton
            navigation={navigation}
         />
         <ScrollView>
            <Box>{renderSections(question)}</Box>
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
};

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
