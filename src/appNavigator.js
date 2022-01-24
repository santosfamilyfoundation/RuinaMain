import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NoteScreen } from './screens/note/noteScreen';
import { MapScreen } from './screens/map/mapScreen';
import { WelcomeScreen } from './screens/welcome/welcomeScreen';
import { TesterScreen } from './screens/testerScreen';
import { WeatherScreen } from './screens/weather/weatherScreen';
import { PhotoCaptureScreen } from './screens/photoCapture/photoCaptureScreen'
import { SinglePhotoScreen } from './screens/singlePhoto/singlePhotoScreen';
import { VehicleInfoScreen } from './screens/vehicleInfo/vehicleinfoScreen';
import { BarcodeScanScreen } from './screens/barcodeScan/barcodeScanScreen';
import { QuickSurveyScreen } from './screens/quickSurvey/quickSurveyScreen';
import { HomeScreen } from './screens/home/homeScreen';
import { QuestionScreen } from './screens/questionScreen/questionScreen';
import { InfoExchangeFormScreen } from './screens/infoExchange/infoExchangeFormScreen';
import { InfoExchangeScreen } from './screens/infoExchange/infoExchangeScreen';
import { PhotoGalleryScreen } from './screens/photoGallery/photoGalleryScreen';
import { FinalReportScreen } from './screens/finalReport/finalReportScreen';
import { EmailFinalReportScreen } from './screens/emailFinalReport/emailFinalReportScreen';
import { SaveToDeviceScreen } from './screens/saveToDevice/saveToDeviceScreen';
import { FeatureComingSoonScreen } from './screens/featureComingSoon/featureComingSoonScreen';
import { ReportToDatabaseScreen } from './screens/reportToDatabase/ReportToDatabaseScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Note: NoteScreen,
  Map: MapScreen,
  Test: TesterScreen,
  Weather: WeatherScreen,
  PhotoCapture: PhotoCaptureScreen,
  Vehicle: VehicleInfoScreen,
  BarcodeScan: BarcodeScanScreen,
  Scan: BarcodeScanScreen,
  Survey: QuickSurveyScreen,
  Home: HomeScreen,
  Question: QuestionScreen,
  InfoExchangeForm: InfoExchangeFormScreen,
  PhotoGallery: PhotoGalleryScreen,
  FinalReport: FinalReportScreen,
  EmailFinalReport: EmailFinalReportScreen,
  SaveToDevice: SaveToDeviceScreen,
  InfoExchange: InfoExchangeScreen,
  SinglePhoto: SinglePhotoScreen,
  ReportToDatabase: FeatureComingSoonScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
