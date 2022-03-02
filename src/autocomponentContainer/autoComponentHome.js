import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import AutoComponent from '../components/AutoComponent';

export const AutoComponentHome = ({ navigation }) => {
  return (
          <AutoComponent
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};
