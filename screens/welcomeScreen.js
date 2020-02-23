import React from 'react';
import Welcome from '../components/Welcome';

export const WelcomeScreen = ({ navigation }) => {
  return (
          <Welcome 
            navigation = { navigation }
          />
  );
};