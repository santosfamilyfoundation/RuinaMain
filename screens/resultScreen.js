import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Result from '../components/modules/Result';

export const ResultScreen = ({ navigation }) => {

  return (
    <Result
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};