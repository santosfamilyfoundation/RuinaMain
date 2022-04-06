/*
    The QuestionHeader component is used as a header for question that has subquestion.
    This component does not prompt the user for input in any way; it just displays
    a large header.
*/

import React from "react";
import { connect } from "react-redux";
import { dependencyParser } from "../utils/dependencyHelper";
import { Heading, Text, VStack } from "native-base";

const QuestionHeader = (props) => {
   const { data, dependencyID } = props;

   // check if this should be shown based on dependencies
   var renderComponent = true;
   if (data.questionDependency !== undefined && props.response !== null) {
      renderComponent = dependencyParser(props.response, data, dependencyID);
   }

   if (renderComponent) {
      return (
         <VStack ml={4} mt={4}>
            <Heading size="md">{data.question}</Heading>
            <Text>{data.helperText}</Text>
         </VStack>
      );
   } else {
      return null;
   }
};

const mapStateToProps = (state) => {
   const { response } = state.storyReducer;
   return { response };
};

export default connect(mapStateToProps)(QuestionHeader);
