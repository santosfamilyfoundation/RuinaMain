import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export const styles = StyleSheet.create({
  photoLayout:{
    flex: 1,
  },
  controlBar:{
    flexDirection: 'column',
    height: SCREEN_HEIGHT*0.2,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
  tag:{
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    alignSelf: 'center',
    flex: 1,
  },
  image :{
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT*0.8,
  },
});
