import React from 'react';
import Welcome from '../components/home/Welcome';

export const WelcomeScreen = ({ navigation }) => {
  return (
          <Welcome 
            navigation = { navigation }
          />
  );
};