import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Note from '../components/modules/Note'

export const NoteScreen = ({ navigation }) => {
  return (
          <Note
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};
