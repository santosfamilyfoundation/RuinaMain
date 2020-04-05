import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import MapView from '../components/MapView'

export const MapViewScreen = ({ navigation}) => {

  return (
          <MapView
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                      onPress={() => navigation.goBack()}/> }
          />
  );
};
