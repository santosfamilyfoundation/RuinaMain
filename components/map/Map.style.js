import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:1000,
  },
  coords:{
    justifyContent: 'flex-start',
  },
  sideBox:{
    alignSelf: 'flex-end',
    backgroundColor: '#D3D3D3',
    padding: 10,
    flex: 1,
  },
  sideBoxItems:{
    paddingBottom: 10,
    paddingTop: 10,
  },
  coordText:{
    fontSize: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
  }
})
