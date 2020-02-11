import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';
import {WeatherScreen} from './screens/weatherScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  Weather: WeatherScreen
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);