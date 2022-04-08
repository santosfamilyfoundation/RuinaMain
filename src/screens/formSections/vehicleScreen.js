import React from 'react';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const VehicleScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Vehicle"
          />
  );
};