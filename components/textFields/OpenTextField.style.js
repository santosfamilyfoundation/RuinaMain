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
        marginTop:-7,
        marginLeft:10,
        marginBottom:5,
        paddingTop:5,
        paddingBottom:0,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#3266FF',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    btnText: {
        fontSize: 20,
        color: "#FFFFFF",
    },
    rightControlsContainer:{
      flexDirection: 'row',
    },
    rightControls:{
      flexDirection: 'column',
      alignItems: 'center',
      padding: 5
    },
    rightControlsText:{
      fontSize: 10,
    },
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
    inputField: {
      flex:1,
    },
    submitButton: {
      marginLeft: 10,
    }
});