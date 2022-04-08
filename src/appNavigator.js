import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MapScreen } from './screens/map/mapScreen';
import { WelcomeScreen } from './screens/welcome/welcomeScreen';
import { WeatherScreen } from './screens/weather/weatherScreen';
import { VehicleInfoScreen } from './screens/vehicleInfo/vehicleinfoScreen';
import { BarcodeScanScreen } from './screens/barcodeScan/barcodeScanScreen';
import { QuickSurveyScreen } from './screens/quickSurvey/quickSurveyScreen';
import { HomeScreen } from './screens/home/homeScreen';
import { QuestionScreen } from './screens/questionScreen/questionScreen';
import { FinalReportScreen } from './screens/finalReport/finalReportScreen';
import { EmailFinalReportScreen } from './screens/emailFinalReport/emailFinalReportScreen';
import { SaveToDeviceScreen } from './screens/saveToDevice/saveToDeviceScreen';
import { ReportToDatabaseScreen } from './screens/reportToDatabase/ReportToDatabaseScreen';
import { DiagramToolScreen} from './screens/diagramTool/diagramToolScreen';

const HomeNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Map: MapScreen,
  Weather: WeatherScreen,
  Vehicle: VehicleInfoScreen,
  BarcodeScan: BarcodeScanScreen,
  Scan: BarcodeScanScreen,
  Survey: QuickSurveyScreen,
  Home: HomeScreen,
  Question: QuestionScreen,
  FinalReport: FinalReportScreen,
  EmailFinalReport: EmailFinalReportScreen,
  SaveToDevice: SaveToDeviceScreen,
  DiagramTool: DiagramToolScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
