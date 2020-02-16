import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import DiagramView from '../components/DiagramView2'

export const DiagramViewScreen = ({ navigation }) => {
  return (
          <DiagramView
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                      onPress={() => navigation.goBack()}/> }
          />
  );
};
