import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import Weather from '../components/Weather';

export const WeatherScreen = ({ navigation }) => {
  return (
          <Weather 
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};