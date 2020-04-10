import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardHeader, Layout } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import { styles } from '../../containers/AutoComponentContainer.style';
import OpenTextField from '../textFields/OpenTextField';
import AdvancedOpenTextField from '../textFields/AdvancedOpenTextField';
import { updateDriver } from '../../actions/DriverAction';
import { updateNonmotorist } from '../../actions/NonmotoristAction';
import {updateVehicle} from '../../actions/VehicleAction';
import {questions} from '../../data/questions';

class OperatorForm extends Component{
    filterQuestionsData(questionType){
        return questions.data.filter(question => question.display.includes(questionType));
    }

    render(){
        const { id, type, drivers, vehicles, nonmotorists, updateDriver, updateNonmotorist, updateVehicle } = this.props
        let operator;
        let vehicleId;
        let typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1)
        let questionsData = this.filterQuestionsData('info');

        switch(type) {
            case 'driver':
                operator = drivers.data.find(driver => driver.id == id)
                let vehicle = vehicles.data.find(vehicle => vehicle.driver == operator.id)
                vehicleId = vehicle.id;
                break;
            case 'nonmotorist':
                operator = nonmotorists.data.find(nonmotorist => nonmotorist.id == id)
                break;
        }

        const navigateToAdvanced = (place, props) =>{
            console.log("HERE");
            console.log(this.props);
            this.props.nav.navigate(place, props);
        }

        const renderDriverQuestion = (question) => {
            switch(question.answerType) {
                case 'openTextBox':
                    return (
                        <OpenTextField
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={"driverReducer"}
                            submitFunction={updateDriver}
                        />
                    )
                case 'advancedOpenTextBox':
                    return (
                        <AdvancedOpenTextField
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={"driverReducer"}
                            submitFunction={updateDriver}
                            pageChange={navigateToAdvanced}
                            importFrom={question.autoMethod}
                        />
                    )
            }
        }

        const renderNonmotoristQuestion = (question) => {
            switch(question.answerType) {
                case 'openTextBox':
                    return (
                        <OpenTextField
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={"nonmotoristReducer"}
                            submitFunction={updateNonmotorist}
                        />
                    )
                case 'advancedOpenTextBox':
                    return (
                        <AdvancedOpenTextField
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={"nonmotoristReducer"}
                            submitFunction={updateNonmotorist}
                            pageChange={navigateToAdvanced}
                            importFrom={question.autoMethod}
                        />
                    )
            }
        }

        const renderVehicleQuestion = (question) => {
            switch(question.answerType) {
                case 'openTextBox':
                    return (
                        <OpenTextField
                            data={question}
                            key={question.id}
                            id={vehicleId}
                            reducer={"vehicleReducer"}
                            submitFunction={updateVehicle}
                        />
                    )
                case 'advancedOpenTextBox':
                    return (
                        <AdvancedOpenTextField
                            data={question}
                            key={question.id}
                            id={vehicleId}
                            reducer={"vehicleReducer"}
                            submitFunction={updateVehicle}
                            pageChange={navigateToAdvanced}
                            importFrom={question.autoMethod}
                        />
                    )
            }
        }

        const renderedQuestions = questionsData.map((question) => {
            if(question.display.includes('driver')) {
                return renderDriverQuestion(question);
            } else if(question.display.includes('vehicle')) {
                return renderVehicleQuestion(question);
            } else if(question.display.includes('nonmotorist')) {
                return renderNonmotoristQuestion(question);
            }
        })


        return(
                <Card header= {() => <CardHeader title={`${typeUpperCase}: ${operator.response?.P1 || ''}`}/>} >
                    <ScrollView>
                        <Layout style={styles.content}>
                            {renderedQuestions}
                        </Layout>
                    </ScrollView>
                </Card>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        drivers: state.driverReducer,
        nonmotorists: state.nonmotoristReducer,
        vehicles: state.vehicleReducer,
        passengers: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}

const mapDispatchToProps = {
    updateDriver,
    updateNonmotorist,
    updateVehicle,
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorForm);