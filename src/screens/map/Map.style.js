import { Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mapContainer:{
    height: "100%",
    justifyContent: 'flex-end',
    flex:1,
  },
  pageContainer :{
    flex: 1,
  },
  map: {
    height: SCREEN_HEIGHT,
    flex: 1
  },
  coords:{
    justifyContent: 'flex-start',
  },
  sideBox:{
    alignSelf: 'flex-end',
    padding: 10,
    width: 50,
    height: "100%",
  },
  sideBoxItems:{
    paddingBottom: 10,
    paddingTop: 10,
  },
  coordText:{
    fontSize: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  spinnerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
