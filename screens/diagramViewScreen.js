import React from 'react';
import { SafeAreaView } from 'react-navigation';
import DiagramView from '../components/DiagramView2'

export const DiagramViewScreen = ({ navigation }) => {
  return (
cd          <DiagramView
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                      onPress={() => navigation.goBack()}/> }
          />
  );
};
