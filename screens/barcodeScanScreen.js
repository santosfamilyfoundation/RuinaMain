import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import BarcodeScan from '../components/photos/BarcodeScan'

export const BarcodeScanScreen = ({ navigation }) => {

  return (
    <BarcodeScan
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
