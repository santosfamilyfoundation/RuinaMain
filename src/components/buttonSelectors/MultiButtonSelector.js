/*
  The MultiButtonSelector component returns a group of buttons for questions in
  forms. The number of buttons is determined by the answers in the dowloaded
  spreadsheet.

  Props:
  * data - an object representing all data for the question
  * key - the UUID for the quesion
  * id - the UUID for the asscoiated form
  * questionReducer - the redux reducer used to update the stored question data
  * submitFunction - this function updates the questions' association reducer
  * updateResponse - the function that updates the story reducer.
  * dependencyID - a list of form IDs that the question belongs to
 */
import React from "react";
import { connect } from "react-redux";
import { Box, Text, VStack, Button, HStack } from "native-base";
import QuestionSection from "../QuestionSection";
import { updateResponse } from "../../actions/StoryActions";
import TooltipView from "../Tooltip.js";
import { dependencyParser } from "../../utils/dependencyHelper";
import { SafeAreaView } from "react-navigation";
import SelectionValidation from "../../utils/SelectionValidation.js";

const MultiButtonSelector = (props) => {
  // The selection state variable is used to store the name and value of the
  // button that has been selected. The inital value is null because no button
  // has been selected.
  const [selection, setSelection] = React.useState(null);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const {
    data,
    key,
    id,
    questionReducer,
    submitFunction,
    updateResponse,
    dependencyID,
  } = props;

  let currId = data.humanReadableId;

  const reducerData = questionReducer.data.find((entry) => entry.id == id);
  let existingData = !reducerData?.response ? null : reducerData.response;

  // Populate if value already exists in redux
  if (!selection) {
    if (existingData != null) {
      if (existingData[currId] != selection) {
        setSelection(existingData[currId]);
      }
    }
  }

  /*
    This function checks which form the question is in and saves the value of
    the  selected button to the appropriate reducer.
  */
  const submitField = (optionText, idCode) => {
    let selectionValidation = SelectionValidation;
    selectionValidation.validateField(optionText);
    let localStatus = selectionValidation.status;
    if (localStatus) {
      setIsInvalid(false);
      setSelection(optionText);
    } else {
      setIsInvalid(true);
      setSelection(optionText);
    }
    // Checks which form the question belongs to updates the story reducer with
    // newest id, question, selecion, and corresponding dependencyID (if needed)
    if (dependencyID == null || dependencyID.length == 1) {
      // This updates questions in the crash/road form or questions with no
      // associated form
      updateResponse &&
        updateResponse({ id, question: currId, selection: idCode });
    } else {
      let vehicleID = dependencyID[1];
      switch (dependencyID.length) {
        case 2:
          // Case 2 updates the vehicle form
          updateResponse &&
            updateResponse({
              id,
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
              id,
              question: currId,
              selection: idCode,
              vehicleID: vehicleID,
              passengerID: passengerID,
            });
        case 4:
          // Case 4 updates the nonmotorist form
          updateResponse &&
            updateResponse({
              id,
              question: currId,
              selection: idCode,
              vehicleID: vehicleID,
              nonmotoristID: dependencyID[3],
            });
        default:
          break;
      }
    }
    submitFunction({ id, question: currId, selection: optionText });
  };

  const selectionSet = (currId) => {
    try {
      if (existingData[currId] != null) {
        return existingData[currId];
      }
    } catch (err) {
      return null;
    }
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
      <QuestionSection
        key={key}
        title={data.question}
        helperText={data.helperText}
        tooltip={tooltip()}
        required={data.required}
      >
        <VStack>{renderButtons()}</VStack>
      </QuestionSection>
    );
  } else {
    return null;
  }
};

const mapDispatchToProps = {
  updateResponse,
};

const mapStateToProps = (state, props) => {
  const { response } = state.storyReducer;
  const { reducer } = props;
  const questionReducer = state[reducer];
  return { questionReducer, response };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiButtonSelector);
