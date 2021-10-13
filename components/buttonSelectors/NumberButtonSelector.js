import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, HStack, Input } from 'native-base';
import { genericWriteAction } from '../../actions/GenericAction';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import QuickSurveyCard from '../QuickSurveyCard';

const NumberButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState('');
    const {title, data, id, submitFunction, genericReducer, fieldName, updateResponse, dependencyID, startRange, endRange} = props;

    const submitField = (val) => {
        val = int(val);
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction(val);
    }

    const renderSingleButton = (num) => {
        return (
            <Button onPress={() => submitField(num)} size={10}>{num}</Button>
        )
    }

    const renderButtons = () => {
        let buttons = [];
        for (let i = startRange; i <= endRange; i++) {
            let button = renderSingleButton(i);
            buttons.push(button);
        }
        return(
            <HStack space={4}>
            {buttons}
            <Input placeholder = "other" onChangeText = {submitField} size="md"/>
            </HStack>
        )
    }

    return (
        <QuickSurveyCard title={title} content={renderButtons()}/>
        /*<Card header={Header}>
            <View style={{flex: 1, flexDirection:"row"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                    <View style={styles.buttonSection}>
                        <Button style={styles.buttonStyle} appearance={(selection == '0') ? 'filled':'outline'} onPress={() => submitField('0')}>None</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '1') ? 'filled':'outline'} onPress={() => submitField('1')}>1</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '2') ? 'filled':'outline'} onPress={() => submitField('2')}>2</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '3') ? 'filled':'outline'} onPress={() => submitField('3')}>3</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '4') ? 'filled':'outline'} onPress={() => submitField('4')}>4</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '5') ? 'filled':'outline'} onPress={() => submitField('5')}>5</Button>
                    </View>
                    <View style={styles.questionInput}>
                        <Input 
                            placeholder = "other"
                            onChangeText = {submitField}
                            value = {(selection > 5) ? selection:''}
                            status={(selection > 5) ? 'primary':'basic'}
                        />
                    </View>
                </ScrollView>
            </View>
        </Card>*/
    )
}

const mapDispatchToProps = {
    genericWriteAction
}

const mapStateToProps = (state, props) => {
    const genericReducer = state[props.reducerName]
    return { genericReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);