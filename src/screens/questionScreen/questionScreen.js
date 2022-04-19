/*
Renders the QuestionForm screen.
*/

import React from "react";
import QuestionForm from "./QuestionForm";

export const QuestionScreen = ({ navigation }) => {
   return (
      <QuestionForm
         navigation={navigation}
         questionDetail={navigation.state.params}
      />
   );
};
