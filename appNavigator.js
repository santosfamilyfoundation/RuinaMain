import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NoteScreen } from './screens/noteScreen';
import { ResultScreen } from './screens/resultScreen';
import { MapScreen } from './screens/mapScreen';
import { WelcomeScreen } from './screens/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weatherScreen';
import { PhotoCaptureScreen } from './screens/photoCaptureScreen'
import { SinglePhotoScreen } from './screens/singlePhotoScreen';
import { VehicleInfoScreen } from './screens/vehicleinfoScreen';
import { ScanScreen } from './screens/scanScreen';
import { QuickSurveyScreen } from './screens/quickSurveyScreen';
import { HomeScreen } from './screens/homeScreen';
import { QuestionScreen } from './screens/questionScreen';
import { InfoExchangeFormScreen } from './screens/infoExchangeFormScreen';
import { InfoExchangeScreen } from './screens/infoExchangeScreen';
import { PhotoGalleryScreen } from './screens/photoGalleryScreen';
import { FinalReportScreen } from './screens/finalReportScreen';
import { FeatureComingSoonScreen } from './screens/featureComingSoonScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Note: NoteScreen,
  Result: ResultScreen,
  Map: MapScreen,
  Test: TesterScreen,
  Weather: WeatherScreen,
  PhotoCapture: PhotoCaptureScreen,
  Vehicle: VehicleInfoScreen,
  // Scan: ScanScreen,  // uncomment for integration with Anyline
  Scan: FeatureComingSoonScreen,
  Survey: QuickSurveyScreen,
  Home: HomeScreen,
  Question: QuestionScreen,
  InfoExchangeForm: InfoExchangeFormScreen,
  PhotoGallery: PhotoGalleryScreen,
  FinalReport: FinalReportScreen,
  InfoExchange: InfoExchangeScreen,
  SinglePhoto: SinglePhotoScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
