import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const NonMotoristScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Non-Motorists"
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};