import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export const styles = StyleSheet.create({
  cameraLayout:{
    flex: 1,
  },
  cameraPreview:{
    flex: 1,
    justifyContent:'center',
    width: SCREEN_WIDTH,
  },
  captureButton:{
    textAlign: 'center',
    padding: 10,
  },
  controlBar:{
    flexDirection: 'column',
    height: SCREEN_HEIGHT*0.2,
  },
  bottomControlBar:{
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.7
  },
  progressBar: {
    backgroundColor: 'lightgrey',
    height: 5,
    alignSelf: 'flex-start',
  },
  topControlBar: {
    paddingTop: 20,
    flex: 0.2
  },
});
