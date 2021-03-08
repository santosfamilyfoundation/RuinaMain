import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    styledButton: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'#3266FF',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    btnText: {
        fontSize: 20,
        color: "#FFFFFF",
    },
    bottomBar:{
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomBarText:{
      color: '#A9A9A9',
    },
  });
