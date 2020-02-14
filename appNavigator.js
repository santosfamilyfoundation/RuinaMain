import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';
import { DiagramViewScreen } from './screens/diagramViewScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  Map: DiagramViewScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
