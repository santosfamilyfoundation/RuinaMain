import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  Vehicle: VehicleInfoScreen
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);