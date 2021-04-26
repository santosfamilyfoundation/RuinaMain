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
    itemCardFooterEdit: {
        textAlign:'center',
        color: 'white'
    },
    itemCardFooterEditVehicle: {
        textAlign:'left',
        color: 'white',
        marginLeft: 10,
    },
    individualCard: {
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    individualCardAdd: {
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor:'#3467ff'
    },
    individualCardRemove: {
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#ef8837',
    },
    vehicleRemove: {
        margin: 10,
        width: '97.5%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ef8837',
        alignItems: 'center',
    },
    addVehicleSection: {
      alignItems: 'center',
      backgroundColor:'#3467ff',
      display:'flex',
      flexDirection:'row',
      padding: 25,
      paddingLeft: 35,
      margin: 10,
    },
    addVehicleSectionFooter: {
      textAlign:'left',
      color: 'white',
      margin: 10,
    },
    nonMotoristCard:{
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    nonMotoristCardAdd:{
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor:'#3467ff',
    },
    nonMotoristCardRemove:{
        height: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor:'#ef8837'
    },
    rightControlsContainer:{
      flexDirection: 'row',
    },
    rightControls:{
      backgroundColor:'black',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      paddingRight: 20,
      marginRight: 20,
    },
    rightControlsText:{
      fontSize: 16,
      color: 'white',
    },
})
