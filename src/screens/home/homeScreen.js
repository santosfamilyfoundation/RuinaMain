import React from 'react';
import Home from './Home';
import { styles } from '../screens.style';
import { Icon, TopNavigationAction, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <Home
        navigation = { navigation }
        edit = { navigation.state.params.edit }
    />
  );
};
