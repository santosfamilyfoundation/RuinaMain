import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Card, CardHeader, Layout } from '@ui-kitten/components';
import { TextInput, ScrollView } from 'react-native';
import { styles } from '../containers/AutoComponentContainer.style';
import OpenTextField from './textFields/OpenTextField';
import { updateDriver } from '../actions/DriverAction';
import { updateNonmotorist } from '../actions/NonmotoristAction';
import {infoExchangeQuestions} from '../data/infoExchangeQuestions';
import MultiButtonSelector from './buttonSelectors/MultiButtonSelector';

class OperatorForm extends Component{
    render(){

        const { id, type, driver, nonmotorist, updateDriver, updateNonmotorist } = this.props
        let operator;
        let reducer;
        let submitFunction;
        let typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1)


        switch(type) {
            case 'driver':
                reducer = "driverReducer";
                submitFunction = updateDriver;
                operator = driver.data.find(driver => driver.id == id)
                break;
            case 'nonmotorist':
                reducer = "nonmotoristReducer";
                submitFunction = updateNonmotorist;
                operator = nonmotorist.data.find(nonmotorist => nonmotorist.id == id)
                break;
        }

        const renderSingleQuestion = (question) => {
            switch(question.answerType) {
                case 'openTextbox':
                    return (
                        <OpenTextField
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={reducer}
                            submitFunction={submitFunction}
                        />
                    )
                case 'multiButton':
                    return (
                        <MultiButtonSelector
                            data={question}
                            key={question.id}
                            id={id}
                            reducer={reducer}
                            submitFunction={submitFunction}
                        />
                    )
            }
        }

        const renderedQuestions = infoExchangeQuestions.data.map((question) => {
            return renderSingleQuestion(question);
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
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}

const mapDispatchToProps = {
    updateDriver,
    updateNonmotorist,
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorForm);