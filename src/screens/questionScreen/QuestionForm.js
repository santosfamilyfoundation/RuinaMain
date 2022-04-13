import React, { Component } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import {
   Divider,
   Box,
   Accordion,
   VStack,
   Button,
   Text,
   Center,
   Spinner,
} from "native-base";
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

class QuestionForm extends Component {
   constructor(props) {
      super(props);

      this.sections = undefined;

      this.state = {
        loading: true
      }
      this.question = this.questionData(this.props.questionDetail.type);
   }

   navigateToAdvanced(place, props) {
      this.props.navigation.navigate(place, props);
   }

   questionProps(type, res) {
      const PublicObj = {
         data: res.data,
         key: res.data.id,
         dependencyID: res.detail.dependencyID,
         reducer: res.setting.reducer,
         submitFunction: res.setting.submitFunction,
         updateResponse: this.props.updateResponse,
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
            submitFunction: this.props.updateDriver,
            actionType: "UPDATEDRIVER",
            questionsData: this.props.questionDetail.questions,
         },
         Nonmotorist: {
            reducer: "nonmotoristReducer",
            submitFunction: this.props.updateNonmotorist,
            actionType: "UPDATENONMOTORIST",
            questionsData: this.props.questionDetail.questions,
         },
         Passenger: {
            reducer: "passengerReducer",
            submitFunction: this.props.updatePassenger,
            actionType: "UPDATEPASSENGER",
            questionsData: this.props.questionDetail.questions,
         },
         Vehicle: {
            reducer: "vehicleReducer",
            submitFunction: this.props.updateVehicle,
            actionType: "UPDATEVEHICLE",
            questionsData: this.props.questionDetail.questions,
         },
         Road: {
            reducer: "roadReducer",
            submitFunction: this.props.updateRoad,
            actionType: "UPDATEROAD",
            questionsData: this.props.questionDetail.questions,
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

   renderQuestions(questions) {
      console.log("Rendering section questions");
      let questionList = [];
      for (const q of questions) {
         const obj = {
            data: q,
            setting: this.question,
            detail: this.props.questionDetail,
         };
         const dom = this.renderSingleQuestion(
            q.answerType,
            this.questionProps(q.answerType, obj)
         );
         questionList.push(dom);
      }
      return <VStack>{questionList}</VStack>;
   }

   renderSingleSection(item) {
      console.log("Rendering single section");
      return (
         <Accordion.Item>
            <Accordion.Summary>
               {item.sectionTitle}
               <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
               {this.renderQuestions(item.questions)}
            </Accordion.Details>
         </Accordion.Item>
      );
   }

   renderSections() {
      console.log("Rendering sections");
      return (
         <Accordion index={[0]} mx={4} my={8}>
            {this.question.questionsData.map((item) =>
               this.renderSingleSection(item)
            )}
         </Accordion>
      );
   }

   componentDidMount() {
      console.log("Component did mount");
      const p = new Promise((r) =>
         setTimeout(() => {
            this.sections = this.renderSections();
            console.log("updated sections:", this.sections);
            this.setState({loading: false})
         })
      );
   }

   render() {
      console.log("Rendering - value of this.state.loading:", this.state.loading);
      if (this.state.loading) {
         return (
            <SafeAreaView style={styles.container}>
               <TopNavigation
                  title={`Questions on ${this.props.questionDetail.name}`}
                  backButton
                  navigation={this.props.navigation}
               />
               <Center flex={1}>
                  <Spinner accessibilityLabel="loadingScreen" size="lg" />
               </Center>
            </SafeAreaView>
         );
      } else {
         console.log("sections in render:", this.sections);
         return (
            <SafeAreaView style={styles.container}>
               <TopNavigation
                  title={`Questions on ${this.props.questionDetail.name}`}
                  backButton
                  navigation={this.props.navigation}
               />
               <ScrollView>
                  <Box>{this.sections}</Box>
               </ScrollView>
               <Divider />
               <Box p={4}>
                  <Button
                     onPress={() => {
                        this.props.navigation.goBack();
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
