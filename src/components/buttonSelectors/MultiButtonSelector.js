/*
  The MultiButtonSelector component returns a group of buttons for questions in
  forms. The number of buttons is determined by the answers in the dowloaded
  spreadsheet.
 */
import React from "react";
import { connect } from "react-redux";
import { View, Image } from "react-native";
import { Box, Text, VStack, Button, HStack } from "native-base";
import QuestionSection from "../QuestionSection";
import ImageSelector from "../../image/imgIndex";
import { updateResponse } from "../../actions/StoryActions";
import TooltipView from "../Tooltip.js";
import { dependencyParser } from "../../utils/dependencyHelper";
import { SafeAreaView } from "react-navigation";

const MultiButtonSelector = (props) => {
  const [selection, setSelection] = React.useState(null);
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
    This function saves the value of the  selected button to the form reducer.
  */
  const submitField = (optionText, idCode) => {
    setSelection(optionText);
    if (dependencyID == null || dependencyID.length == 1) {
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
  // Check if the question has any dependencies to update
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
