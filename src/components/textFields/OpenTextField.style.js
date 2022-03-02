import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    imgContainer:{
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center'
    },
    img:{
      resizeMode: 'center', 
      width: 250, 
      height: 250
    },
    rowContainer:{
      flexDirection: 'row',
    },
    endRowcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    container: {
      width: '90%',
    },
    helperText: {
      margin: 11
    },
    content: {
      flex: 1,
      margin: 10,
    },
    input: {
      margin: 10,
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputField: {
      flex:1,
    },
    submitButton: {
      marginLeft: 10,
    }
});