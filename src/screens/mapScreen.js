import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Map from '../components/map/Map'

export const MapScreen = ({ navigation}) => {

  return (
          <Map
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                      onPress={() => navigation.goBack()}/> }
          />
  );
};
