import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import AutoComponentContainer from '../../containers/AutoComponentContainer';

export const VehicleScreen = ({ navigation }) => {
  return (
          <AutoComponentContainer 
            navigation = { navigation }
            title = "Vehicle"
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};