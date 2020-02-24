import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';
import { DiagramViewScreen } from './screens/diagramViewScreen';
import { WelcomeScreen } from './screens/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weatherScreen';
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';
import { ScanScreen } from './screens/scanScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen,
  Result: ResultScreen,
  Map: DiagramViewScreen,
  Test: TesterScreen,
  Weather: WeatherScreen,
  Vehicle: VehicleInfoScreen,
  Scan: ScanScreen
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
