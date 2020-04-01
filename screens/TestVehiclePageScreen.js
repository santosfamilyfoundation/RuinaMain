import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import TestVehiclePage from '../components/TestVehiclePage';

export const TestVehiclePageScreen = ({ navigation}) => {

  return (
    <TestVehiclePage
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
