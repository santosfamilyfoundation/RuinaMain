import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      padding: 24,
      alignItems: 'center',
      alignContent: 'center'
    },
    imgContainer:{
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center'
    },
    img:{
      resizeMode: 'center', 
      width: 400, 
      height: 450
    },
    rowContainer:{
      flexWrap: "wrap",
      flexDirection: 'row',
    },
    container: {
      width: '90%',
      marginBottom: 10
    },
    helperText: {
      margin: 11
    },
    inputField: {
      maxWidth: 500,
    },
    headingText: {},
    content: {
      margin: 10,
    }
});