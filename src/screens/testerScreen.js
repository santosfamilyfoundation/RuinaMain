import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import AutoComponentContainer from '../containers/AutoComponentContainer';

export const TesterScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer
            navigation = { navigation }
            title = "Test"
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};
