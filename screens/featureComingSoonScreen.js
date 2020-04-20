import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import FeatureComingSoon from '../components/modules/FeatureComingSoon';

export const FeatureComingSoonScreen = ({ navigation }) => {

  return (
    <FeatureComingSoon
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
