import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      padding: 24,
      alignItems: 'center',
      alignContent: 'center',
      width: '75%',
      height: 600
    },
    imgContainer:{
      marginTop: 10,
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    img:{
    marginTop: 30,
//      resizeMode: 'center',
      width: 500,
      height: 500
    },
    rowContainer:{
      flexWrap: 'wrap',
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
      margin: 1,
      flexShrink:1
    },
    inputField: {
      maxWidth: 500,
    },
    headingText: {
    },
    content: {
      margin: 10,
    }
});