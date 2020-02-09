import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NotepadHome } from './screens/notepadHomeScreen';
import { ResultScreen } from './screens/resultScreen';
import { HomeScreen } from './screens/homeScreen';
import { AutoComponentHome } from './screens/autoComponentHome';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  NotepadHome: NotepadHome,
  Result: ResultScreen,
  Auto1: AutoComponentHome,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);