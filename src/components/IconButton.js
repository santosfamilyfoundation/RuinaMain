/*
    The IconButton component. Renders a simple white Button with an icon. The button can also optionally contain text.
    The icon should be passed as a prop to this component.
*/

import React from "react";
import { Button, Text, HStack } from "native-base";

const IconButton = (props) => {
   const { text, onPress, icon, leftMargin, rightMargin, topMargin } = props;

   return (
      <Button onPress={onPress} ml={leftMargin} mr={rightMargin} mt={topMargin}>
         <HStack alignItems="center">
            {icon}
            {text ? (
               <Text ml={2} color="white" fontWeight="semibold">
                  {text}
               </Text>
            ) : null}
         </HStack>
      </Button>
   );
};

export default IconButton;
