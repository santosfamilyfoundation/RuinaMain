import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);