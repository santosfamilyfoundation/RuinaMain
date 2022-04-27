/*
This component renders the Home screen.
*/

import React from "react";
import Home from "./Home";

export const HomeScreen = ({ navigation }) => {
   return <Home navigation={navigation} edit={navigation.state.params.edit} />;
};
