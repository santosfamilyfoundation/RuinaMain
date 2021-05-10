import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    center:{
      
      alignItems: 'center',
    },
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
      width: 500, 
      height: 500
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
    helperTextOnly: {
      marginBottom: 11
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
    answers: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    answerButton: {
        marginRight: 10,
        marginBottom: 10,
    },
});