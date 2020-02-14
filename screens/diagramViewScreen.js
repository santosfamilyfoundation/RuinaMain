import React from 'react';
import { SafeAreaView } from 'react-navigation';
import DiagramView from '../components/DiagramView'

export const DiagramViewScreen = ({ navigation }) => {
  return (
          <DiagramView
            navigation = { navigation }
          />
  );
};
