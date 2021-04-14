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
      alignItems: 'center',
      textAlign: 'center'
    },
    img:{
      resizeMode: 'center', 
      width: 300,
      height: 300
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
      margin: 8,
      flexShrink:1
    },
    inputField: {
      maxWidth: 500,
    },
    headingText: {},
    content: {
      margin: 10,
    }
});