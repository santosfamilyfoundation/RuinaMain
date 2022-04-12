/*
  The NumberButtonSelector component returns a group of five buttons and an
  input field for the QuickSurvey component.
  Props:
      title - the text that should be rendered in the Heading of the Section.
      startRange - the first number that is acceptable.
      endRange - the last number that is acceptable.
 */
import React from "react";
import { connect } from "react-redux";
import { Button, Text, HStack, Input } from "native-base";
import { genericWriteAction } from "../../actions/GenericAction";
import { ScrollView } from "react-native-gesture-handler";
import TooltipView from "../Tooltip.js";
import { View } from "react-native";
import QuestionSection from "../QuestionSection";

const NumberButtonSelectorQuickSurvey = (props) => {
  const [selection, setSelection] = React.useState("");
  const {
    title,
    data,
    id,
    submitFunction,
    genericReducer,
    fieldName,
    updateResponse,
    dependencyID,
    startRange,
    endRange,
    tooltipText,
  } = props;

  // when button selected, set the option and update the quick survey setupData
  const submitField = (val) => {
    val = parseInt(val);
    setSelection(val);
    if (dependencyID != null) {
      const vehicleID = dependencyID[1]; // Get vehicle id to identify different vehicles
      updateResponse &&
        updateResponse({
          id,
          question: currId,
          selection: val,
          vehicleID: vehicleID,
        });
    } else {
      updateResponse &&
        updateResponse({ id, question: currId, selection: val });
    }
    submitFunction(val);
  };

  /*
    This function renders each of the buttons and sets their styling.
  */
  const renderSingleButton = (option) => {
    return (
      <Button
        variant={selection === option.id ? "solid" : "subtle"}
        onPress={() => submitField(option.id)}
        size={10}
        key={option.id}
      >
        {option.name}
      </Button>
    );
  };

  /*
    This function renders the buttons based on the answer options.
  */
  const renderButtons = () => {
    let buttons = [];
    for (let i = startRange; i <= endRange; i++) {
      let button;
      if (i == 0) {
        // Name is None because 0 gives is read as null so the button does not
        // have a name.
        button = renderSingleButton({ id: i, name: "None" });
      } else {
        button = renderSingleButton({ id: i, name: i });
      }
      buttons.push(button);
    }
    return (
      <HStack space={4} flexWrap="wrap">
        {buttons}
        <Input placeholder="other" onChangeText={submitField} size="md" />
      </HStack>
    );
  };

  // Renders tooltip component
  const tooltip = () => {
    return <TooltipView toolTip={tooltipText} />;
  };

  let renderComponent = true;
  // Check if the question has any dependencies to update
  if (data.questionDependency != undefined && props.response != null) {
    renderComponent = dependencyParser(props.response, data, dependencyID);
  }

  return (
    <QuestionSection title={title} tooltip={tooltip()} required={true}>
      {renderButtons()}
    </QuestionSection>
  );
};

const mapDispatchToProps = {
  genericWriteAction,
};

const mapStateToProps = (state, props) => {
  const genericReducer = state[props.reducerName];
  return { genericReducer };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberButtonSelectorQuickSurvey);
