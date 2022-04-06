```
    The TopNavigation is a functional component that provides navigation to go between screens.
    The TopNavigation bar stays at the top of every screen. At the moment, the TopNavigation bar 
    only allows navigation back one screen (if the back button is visible).

    Props:
        title - the text that should display inside the top navigation bar (generally the name of the screen or "Ruina").
        backButton - a boolean that controls whether the back button should be visible.
        navigation - Navigation object to enable switching between screens
```;

import React from "react";
import {
   HStack,
   Divider,
   Heading,
   IconButton,
   ArrowBackIcon,
} from "native-base";

const TopNavigation = (props) => {
   const { title, backButton, navigation } = props;

   return (
      <>
         <HStack
            m={4}
            alignItems="center"
            justifyContent={
               backButton || props.children ? "space-between" : "center"
            }
         >
            {backButton ? (
               <IconButton
                  icon={<ArrowBackIcon name="arrow-back" />}
                  onPress={() => {
                     navigation.goBack();
                  }}
               />
            ) : null}
            <Heading textAlign="center">{title}</Heading>
            <HStack>{props.children}</HStack>
         </HStack>
         <Divider />
      </>
   );
};

export default TopNavigation;
