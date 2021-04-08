import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    tooltipbtnContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    tooltipBtn: {
      margin: 5,
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