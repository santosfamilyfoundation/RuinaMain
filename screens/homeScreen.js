import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Home from '../components/Home'

export const HomeScreen = ({ navigation }) => {
  return (
          <Home 
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};