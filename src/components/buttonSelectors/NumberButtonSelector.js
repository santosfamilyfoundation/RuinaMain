/*
  The NumberButtonSelector component returns a group of five buttons and an
  input field for questions in forms.
 */
import React from "react";
import { connect } from "react-redux";
import { Button, Text, Input, HStack } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { updateResponse } from "../../actions/StoryActions";
import TooltipView from "../Tooltip";
import QuestionSection from "../QuestionSection";

const NumberButtonSelector = (props) => {
  const [selection, setSelection] = React.useState("");
  const {
    data,
    id,
    submitFunction,
    questionReducer,
    fieldName,
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
    This function saves the value of the button pressed to the form reducer.
  */
  const submitField = (val) => {
    setSelection(val);
    // Check if the question has any dependencies
    if (dependencyID == null || dependencyID.length == 1) {
      updateResponse &&
        updateResponse({ id, question: currId, selection: val });
    } else {
      let vehicleID = dependencyID[1];
      switch (dependencyID.length) {
        // Case 2 updates the vehicle form
        case 2:
          updateResponse &&
            updateResponse({
              id,
              question: currId,
              selection: val,
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
              selection: val,
              vehicleID: vehicleID,
              passengerID: passengerID,
            });
        case 4:
          // Case 4 updates the nonmotorist form
          updateResponse &&
            updateResponse({
              id,
              question: currId,
              selection: val,
              vehicleID: vehicleID,
              nonmotoristID: dependencyID[3],
            });
        default:
          break;
      }
    }
    // Saves the selected answer to the JSON file
    submitFunction({ id, question: currId, selection: val });
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

  return (
    <QuestionSection
      title={data.question}
      helperText={data.helperText}
      tooltip={tooltip()}
      required={data.required}
    >
      <HStack space={4} flexWrap="wrap">
        <Button
          variant={selection === "0" ? "solid" : "subtle"}
          onPress={() => submitField("0")}
        >
          None
        </Button>
        <Button
          variant={selection === "1" ? "solid" : "subtle"}
          onPress={() => submitField("1")}
        >
          1
        </Button>
        <Button
          variant={selection === "2" ? "solid" : "subtle"}
          onPress={() => submitField("2")}
        >
          2
        </Button>
        <Button
          variant={selection === "3" ? "solid" : "subtle"}
          onPress={() => submitField("3")}
        >
          3
        </Button>
        <Button
          variant={selection === "4" ? "solid" : "subtle"}
          onPress={() => submitField("4")}
        >
          4
        </Button>
        <Button
          variant={selection === "5" ? "solid" : "subtle"}
          onPress={() => submitField("5")}
        >
          5
        </Button>
        <Input
          placeholder="Other"
          onChangeText={submitField}
          value={selection > 5 ? selection : ""}
          size="md"
          ml={4}
        />
      </HStack>
    </QuestionSection>
  );
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
)(NumberButtonSelector);
