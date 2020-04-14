import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import VehicleInfo from '../components/modules/VehicleInfo';

export const VehicleInfoScreen = ({ navigation }) => {

  return (
    <VehicleInfo
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};