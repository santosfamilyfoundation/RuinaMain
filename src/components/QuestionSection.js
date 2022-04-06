```
    The QuestionSection component is a functional component used to render an entire question,
    including the question text, tooltip, helper text, and error message. The QuestionSection 
    renders a faint border around all of these elements so that the user can differentiate 
    between different questions more easily.
```

import React from "react";
import { Divider, Box, FormControl, VStack, HStack } from "native-base";

const QuestionSection = (props) => {
   const { title, helperText, errorMessage, tooltip, required } = props;

   return (
      <Box
         m={4}
         p={2}
         borderWidth="2"
         borderColor="muted.300"
         borderRadius="md"
      >
         <FormControl isInvalid={props.isInvalid} isRequired={required}>
            <HStack alignItems="center">
               <FormControl.Label>{title}</FormControl.Label>
               {tooltip}
            </HStack>
            <Divider />
            <VStack>
               <FormControl.HelperText mb={4}>
                  {helperText}
               </FormControl.HelperText>
               <FormControl.ErrorMessage>
                  {errorMessage}
               </FormControl.ErrorMessage>
               {props.children}
            </VStack>
         </FormControl>
      </Box>
   );
};

export default QuestionSection;
