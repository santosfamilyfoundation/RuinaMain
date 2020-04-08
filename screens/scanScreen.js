import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Scan from '../components/modules/Scan';

export const ScanScreen = ({ navigation }) => {

  return (
    <Scan
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};