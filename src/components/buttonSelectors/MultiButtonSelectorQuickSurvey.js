/*
The MultiButtonSelector component returns a group of buttons for the QuickSurvey
component. The number of buttons is determined by the answers in the dowloaded
spreadsheet. This component is different from the MultiButtonSelector (used by
the QuestionForm component) because it uses the quickSurveyReducer and does not
check for any existing data.

Props:
* data - an object representing all data for the question
* quickSurveyReducer - the reducer used to update quickSurvey data
* submitFunction - this function updates the questions' association reducer
* updateResponse - the function that updates the story reducer.
* dependencyID - a list of form IDs that the question belongs to
 */
import React from "react";
import { connect } from "react-redux";
import { View, Image } from "react-native";
import { Button, VStack, HStack } from "native-base";
import ImageSelector from "../../image/imgIndex";
import TooltipView from "../Tooltip";
import { dependencyParser } from "../../utils/dependencyHelper";
import QuestionSection from "../QuestionSection";

const MultiButtonSelectorQuickSurvey = (props) => {
  // The selection state variable is used to store the name and value of the
  // button that has been selected. The inital value is null because no button
  // has been selected.
  const [selection, setSelection] = React.useState(null);
  // obtained as inputs to component made in QuickSurvey
  const {
    data,
    quickSurveyReducer,
    submitFunction,
    updateResponse,
    dependencyID,
  } = props;
  let currId = data.humanReadableId;

  /*
    This function checks which form the question is in and saves the value of
    the  selected button to the appropriate reducer.
  */
  const submitField = (optionText, idCode) => {
    setSelection(optionText);
    // Checks which form the question belongs to updates the story reducer with
    // newest id, question, selecion, and corresponding dependencyID (if needed)
    if (dependencyID == null || dependencyID.length == 1) {
      // This updates questions in the crash/road form or questions with no
      // associated form
      updateResponse && updateResponse({ question: currId, selection: idCode });
    } else {
      let vehicleID = dependencyID[1];
      switch (dependencyID.length) {
        case 2:
          // Case 2 updates the vehicle form
          updateResponse &&
            updateResponse({
              question: currId,
              selection: idCode,
              vehicleID: vehicleID,
            });
          break;
        case 3:
          // Case 3 updates the passenger form
          let passengerID = dependencyID[2];
          updateResponse &&
            updateResponse({
              question: currId,
              selection: idCode,
              vehicleID: vehicleID,
              passengerID: passengerID,
            });
        case 4:
          // Case 4 updates the nonmotorist form
          updateResponse &&
            updateResponse({
              question: currId,
              selection: idCode,
              vehicleID: vehicleID,
              nonmotoristID: dependencyID[3],
            });
        default:
          break;
      }
    }
    submitFunction({ question: data.humanReadableId, selection: optionText });
  };

  /*
    This function renders each of the buttons and sets their styling.
  */
  const renderSingleButton = (option) => {
    return (
      <Button
        key={option.id}
        mr={4}
        mb={4}
        variant={selection === option.name ? "solid" : "subtle"}
        onPress={() => submitField(option.name, option.id)}
      >
        {option.name}
      </Button>
    );
  };

  /*
    This function renders the buttons based on the answer options.
  */
  const renderButtons = () => {
    let res = data.answerOptions.map((option) => renderSingleButton(option));
    return <HStack flexWrap="wrap">{res}</HStack>;
  };

  // Renders tooltip component
  const tooltip = () => {
    return <TooltipView toolTip={data.tooltip} helperImg={data.helperImg} />;
  };

  let renderComponent = true;
  // Check if there are dependencies that need to be satisfied before the
  // question can be rendered
  if (data.questionDependency != undefined && props.response != null) {
    renderComponent = dependencyParser(props.response, data, dependencyID);
  }

  if (renderComponent) {
    return (
      <React.Fragment>
        <QuestionSection
          title={data.question}
          helperText={data.helperText}
          tooltip={tooltip()}
          required={data.required}
        >
          {renderButtons()}
        </QuestionSection>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state, props) => {
  const { response } = state.storyReducer;
  const { reducer } = props;
  const questionReducer = state[reducer];
  return { questionReducer, response };
};

export default connect(mapStateToProps)(MultiButtonSelectorQuickSurvey);
