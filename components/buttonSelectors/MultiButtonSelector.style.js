import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginBottom: 10
    },
    helperText: {
      marginBottom: 10
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