import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/homeScreen';
import { ResultScreen } from './screens/resultScreen';
<<<<<<< HEAD
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';
=======
import { DiagramViewScreen } from './screens/diagramViewScreen';
import { WelcomeScreen } from './screens/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weatherScreen';
>>>>>>> a787d83f7096dfab58689d778d3d9e152b8dd27e

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen,
  Result: ResultScreen,
<<<<<<< HEAD
  Vehicle: VehicleInfoScreen
=======
  Map: DiagramViewScreen,
  Test: TesterScreen,
  Weather: WeatherScreen
>>>>>>> a787d83f7096dfab58689d778d3d9e152b8dd27e
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
