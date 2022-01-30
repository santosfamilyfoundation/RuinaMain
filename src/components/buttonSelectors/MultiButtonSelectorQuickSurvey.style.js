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
    helperText: {
      margin: 11
    },
    container: {
      marginBottom: 10,
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
