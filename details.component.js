import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Detail from './components/Detail';

export const DetailsScreen = ({ navigation }) => {

  return (
    <Detail 
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};