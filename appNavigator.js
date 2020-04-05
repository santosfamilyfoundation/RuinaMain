import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NoteScreen } from './screens/noteScreen';
import { ResultScreen } from './screens/resultScreen';
import { MapScreen } from './screens/mapScreen';
import { WelcomeScreen } from './screens/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weatherScreen';
import { PhotoCaptureScreen } from './screens/photoCaptureScreen'
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';
import { ScanScreen } from './screens/scanScreen';
import { QuickQuizScreen } from './screens/quickquizScreen';
import { HomeScreen } from './screens/homeScreen';
import { QuestionScreen } from './screens/questionScreen';
import { InfoExchangeFormScreen } from './screens/infoExchangeScreen';
import { PhotoGalleryScreen } from './screens/photoGalleryScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Note: NoteScreen,
  Result: ResultScreen,
  Map: MapScreen,
  Test: TesterScreen,
  Weather: WeatherScreen,
  PhotoCapture: PhotoCaptureScreen,
  Vehicle: VehicleInfoScreen,
  Scan: ScanScreen,
  Quiz: QuickQuizScreen,
  Home: HomeScreen,
  Question: QuestionScreen,
  InfoExchange: InfoExchangeFormScreen,
  PhotoGallery: PhotoGalleryScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
