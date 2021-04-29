import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      padding: 24,
      alignItems: 'center',
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
      marginBottom: 10
    },
    helperText: {
      margin: 11
    },
    content: {
      margin: 10,
    },
    input: {
      marginBottom: 10,
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputField: {
      flex:1,
    },
    submitButton: {
      marginLeft: 10,
    },
    importButton: {
      margin: 8,
    },
    headerText: {
      marginHorizontal: 24,
      marginVertical: 16,
    },
    headerObjects: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
});
