/*
  This file is used by the appNavigation component to render the BarcodeScan
  screen.
*/

import React from "react";
import BarcodeScan from "./BarcodeScan";

export const BarcodeScanScreen = ({ navigation }) => {
	return <BarcodeScan navigation={navigation} />;
};
