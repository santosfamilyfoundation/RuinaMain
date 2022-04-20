/*
  This file is used by the appNavigation component to render the Welcome
  screen.
*/
import React from "react";
import Welcome from "./Welcome";

export const WelcomeScreen = ({ navigation }) => {
  return <Welcome navigation={navigation} />;
};
