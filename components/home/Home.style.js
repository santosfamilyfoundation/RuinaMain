import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    sectionCard: {
        margin: 5,
    },
    questionContainer: {
        marginRight: 15,
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
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
        // height: 300,
        width: '100%',
        margin: 5,
        flex: 1,
    },
    itemCardContent: {
        height:'90%',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap:"wrap",
        marginBottom: 5,
    },
    itemCardFooter: {
        textAlign:'center',
        color: 'black'
    },
    individualCard: {
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    nonMotoristCard:{
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})
