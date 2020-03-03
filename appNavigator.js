import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NoteScreen } from './screens/noteScreen';
import { ResultScreen } from './screens/resultScreen';
import { DiagramViewScreen } from './screens/diagramViewScreen';
import { WelcomeScreen } from './screens/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weatherScreen';
import { MapSummaryScreen } from './screens/MapSummaryScreen';
import { PhotoCaptureScreen } from './screens/photoCaptureScreen'
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';
import { ScanScreen } from './screens/scanScreen';
import { QuickQuizScreen } from './screens/quickquizScreen';
import { HomeScreen } from './screens/homeScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Note: NoteScreen,
  Result: ResultScreen,
  Map: DiagramViewScreen,
  Test: TesterScreen,
  Weather: WeatherScreen,
  MapSummary: MapSummaryScreen,
  PhotoCapture: PhotoCaptureScreen,
  Vehicle: VehicleInfoScreen,
  Scan: ScanScreen,
  Quiz: QuickQuizScreen,
  Home: HomeScreen
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
