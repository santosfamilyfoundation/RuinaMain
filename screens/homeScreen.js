import React from 'react';
import { SafeAreaView } from 'react-navigation';
import Home from '../components/Home'

export const HomeScreen = ({ navigation }) => {
  return (
          <Home 
            navigation = { navigation }
          />
  );
};