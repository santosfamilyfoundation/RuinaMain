import React from 'react';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const PassengerScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Passenger"
          />
  );
};