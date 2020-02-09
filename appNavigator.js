import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NotepadHome } from './screens/notepadHomeScreen';
import { ResultScreen } from './screens/resultScreen';
import { HomeScreen } from './screens/homeScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  NotepadHome: NotepadHome,
  Result: ResultScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);