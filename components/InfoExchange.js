import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';
import TopNavigation from './TopNavigation';
import Section from './Section';

class InfoExchange extends Component {
    render(){

        const {
            driver,
            nonmotorist,
            } = this.props

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
            if(Object.entries(infoExchangeResultDriver).length !== 0){
                let sex;
                if (Object.entries(infoExchangeResultDriver)[i][1].P3 == "01"){
                    sex = "female"
                }else if (Object.entries(infoExchangeResultDriver)[i][1].P3 == "02"){
                    sex = "male"
                }else if(Object.entries(infoExchangeResultDriver)[i][1].P3 == "99"){
                    sex = "other"
                }
                renderDrivers.push(
                    <Section key={Object.entries(infoExchangeResultDriver)[i][0]} title={Object.entries(infoExchangeResultDriver)[i][1].P1}>
                        <Text style={{fontSize:20}}>
                            {JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P1) !== undefined ? "Name: "+JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P1).slice(1,-1):""}
                        </Text>
                        <Text style={{fontSize:20}}>
                            {JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P2) !== undefined ? "Date of Birth(YYMMDD): "+JSON.stringify(Object.entries(infoExchangeResultDriver)[i][1].P2).slice(1,-1):""}
                        </Text>
                        <Text style={{fontSize:20}}>
                            {sex !==undefined? "Sex: "+sex : ""}
                        </Text>
                    </Section>
                )
            }
        }

        const renderNonmotorists = [];
        for(let i=0;i<Object.entries(infoExchangeResultNonmotorist).length;i++){
            if(Object.entries(infoExchangeResultNonmotorist).length !== 0){
                let sex;
                if (Object.entries(infoExchangeResultNonmotorist)[i][1].P3 == "01"){
                    sex = "female"
                }else if (Object.entries(infoExchangeResultNonmotorist)[i][1].P3 == "02"){
                    sex = "male"
                }else if (Object.entries(infoExchangeResultNonmotorist)[i][1].P3 == "99"){
                    sex = "other"
                }
                renderNonmotorists.push(
                    <Section key={Object.entries(infoExchangeResultNonmotorist)[i][0]} title={Object.entries(infoExchangeResultNonmotorist)[i][1].P1}>
                        <Text style={{fontSize:20}}>
                            {JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P1) !==undefined ? "Name: "+JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P1).slice(1,-1):""}
                        </Text>
                        <Text style={{fontSize:20}}>
                            {JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P2) !==undefined ? "Date of Brith(YYMMDD): " + JSON.stringify(Object.entries(infoExchangeResultNonmotorist)[i][1].P2).slice(1,-1):""}
                        </Text>
                        <Text style={{fontSize:20}}>
                            {sex !== undefined? "Sex: "+sex : ""}
                        </Text>
                    </Section>
                )
            }
        }

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="InfoExchange Result" backButton navigation={this.props.navigation}/>
                <Section title='Drivers'>
                    {renderDrivers}
                </Section>
                <Section title='Non Motorists'>
                    {renderNonmotorists}
                </Section>
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
