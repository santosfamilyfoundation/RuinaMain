import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export const styles = StyleSheet.create({
  cameraPreview:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  captureButton:{
    flex: 0.15,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    textAlign: 'center',
    height: 50,
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
    flex: 0.2,
  },
  progressBar: {
    backgroundColor: 'blue',
    height: 5,
    shadowColor: '#000',
    alignSelf: 'flex-start',
  },
  topControlBar: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
