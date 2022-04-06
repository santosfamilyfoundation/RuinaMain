```
    The Section is a functional component that encapsulates a section of questions.
    It renders a faint border around a set of questions, a heading for the section,
    a divider, and all of the questions for the section.

    Props:
        title - the text that should be rendered in the Heading of the Section.
        children - should be the Questions and QuestionSections that should be rendered in this Section
```;

import React, { Component } from "react";
import { Heading, Divider, Box, FormControl, VStack } from "native-base";

const Section = (props) => {
   const { title } = props;

   return (
      <Box m={4}>
         <Heading>{title}</Heading>
         <Divider />
         {props.children}
      </Box>
   );
};

export default Section;
