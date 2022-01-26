import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import AutoComponentContainer from '../../autocomponentContainer/AutoComponentContainer';

export const RoadScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};