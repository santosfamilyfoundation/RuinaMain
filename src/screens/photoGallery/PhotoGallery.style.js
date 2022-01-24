import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    sectionCard: {
        margin: 15,
    },
    image :{
      width: 85,
      height: 85,
    },
    questionContainer: {
        marginRight: 15,
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    questionInput: {
        backgroundColor: 'lightgrey',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        paddingLeft: 10

    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        alignSelf: 'center'
    },
    itemCard: {
        height: 200,
        width: '30%',
        margin: 5,
    },
    itemCardContent: {
        height:'100%',
        justifyContent:'space-evenly',
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
    },
    itemCardFooter: {
        textAlign:'center',
    }
})
