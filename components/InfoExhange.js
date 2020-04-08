import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import {TopNavigation,Card, CardHeader} from '@ui-kitten/components';


class InfoExchange extends Component {
    render(){

        const {
            driver,
            nonmotorist,
            } = this.props

        const NonMotoristHeader = () => (
            <CardHeader title="Non Motorists"/>
        )

        const DriverHeader = () => (

            <CardHeader title="Drivers"/>
        )

        let infoExchangeResultDriver = {};
        let infoExchangeResultNonmotorist = {};
        let infoQuestions = ["P1", "P2", "P3"];

        driver.data.map(driver => {
            let driverData = {};

            if (driver.response !== undefined) {
                for (let i=0;i<Object.entries(driver.response).length;i++){
                    if(infoQuestions.includes(Object.entries(driver.response)[i][0])){
                        driverData[Object.keys(driver.response)[i]] = Object.entries(driver.response)[i][1]
                    }
                }
                infoExchangeResultDriver[driver.id] = driverData;
            }
        })

        nonmotorist.data.map(nonmotorist => {
            let nonmotoristData = {};
            if (nonmotorist.response !== undefined){
                for (let i=0;i<Object.entries(nonmotorist.response).length;i++){
                    if(infoQuestions.includes(Object.entries(nonmotorist.response)[i][0])){
                        nonmotoristData[Object.keys(nonmotorist.response)[i]] = Object.entries(nonmotorist.response)[i][1]
                    }
                }
                infoExchangeResultNonmotorist[nonmotorist.id] = nonmotoristData
            }
        })

        const renderDrivers =[];
        for(let i=0;i<Object.entries(infoExchangeResultDriver).length;i++){
            renderDrivers.push(
                <Card key={Object.entries(infoExchangeResultDriver)[i][0]} header = {() => (<CardHeader title={Object.entries(infoExchangeResultDriver)[i][1].P1}/>)}>
                    <Text style={{fontSize:20}}>
                        Name: {JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P1).slice(1,-1)}
                    </Text>
                    <Text style={{fontSize:20}}>
                        Date of Birth(YYMMDD): {JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P2).slice(1,-1)}
                    </Text>
                    <Text style={{fontSize:20}}>
                        Sex: {JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P3).slice(1,-1) == "02" ? "male" : "female"}
                    </Text>
                </Card>
            )
        }

        const renderNonmotorists = [];
        for(let i=0;i<Object.entries(infoExchangeResultNonmotorist).length;i++){
            renderNonmotorists.push(
                <Card key={Object.entries(infoExchangeResultNonmotorist)[i][0]} header = {() => (<CardHeader title={Object.entries(infoExchangeResultNonmotorist)[i][1].P1}/>)}>
                    <Text style={{fontSize:20}}>
                        Name: {JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P1).slice(1,-1)}
                    </Text>
                    <Text style={{fontSize:20}}>
                        Date of Brith(YYMMDD): {JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P2).slice(1,-1)}
                    </Text>
                    <Text style={{fontSize:20}}>
                        Sex: {JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P3).slice(1,-1) == "02" ? "male" : "female"}
                    </Text>
                </Card>
            )
        }
        
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="InfoExchange Result" alignment="center" leftControl={this.props.BackAction()}/>
                <Card header={DriverHeader}>
                    {renderDrivers}
                </Card>
                <Card header={NonMotoristHeader}>
                    {renderNonmotorists}
                </Card>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{        
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}

export default connect(mapStateToProps)(InfoExchange)