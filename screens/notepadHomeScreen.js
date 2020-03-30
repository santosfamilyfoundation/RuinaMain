import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Notepad_Home from '../components/Notepad_Home';

export const NotepadHome = ({ navigation }) => {
  return (
          <Notepad_Home 
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};