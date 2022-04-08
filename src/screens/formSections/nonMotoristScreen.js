import React from 'react';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const NonMotoristScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Non-Motorists"
          />
  );
};