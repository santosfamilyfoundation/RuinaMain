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
import { DriverScreen } from './screens/questions/driverScreen';
import { NonMotoristScreen } from './screens/questions/nonMotoristScreen';
import { PassengerScreen } from './screens/questions/passengerScreen';
import { VehicleScreen } from './screens/questions/vehicleScreen';
import { RoadScreen } from './screens/questions/roadScreen';

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
  Home: HomeScreen,
  Driver: DriverScreen,
  NonMotorist: NonMotoristScreen,
  Passenger: PassengerScreen,
  Vehicle: VehicleScreen,
  Road: RoadScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
