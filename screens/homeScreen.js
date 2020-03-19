import React from 'react';
<<<<<<< HEAD
=======
import { Icon, TopNavigationAction } from '@ui-kitten/components';
>>>>>>> 2f899a4ac2fd1c2bac6cff7ae6a8b6a5f3319cbc
import Home from '../components/Home';

export const HomeScreen = ({ navigation }) => {

  return (
    <Home
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};