import React from 'react';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const DriverScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Driver"
          />
  );
};