import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Input, HStack } from 'native-base';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { updateResponse } from '../../actions/StoryActions';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import SelectionValidation from '../../utils/SelectionValidation.js';



const NumberButtonSelector = (props) => {
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [selection, setSelection] = React.useState('');
    const { data, id, submitFunction, questionReducer, fieldName, updateResponse, dependencyID } = props;
    let currId = data.humanReadableId;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!selection) {
        if(existingData != null) {
            if(existingData[currId] != selection) {
                setSelection(existingData[currId]);
            }
        }
    }

    const submitField = (val) => {
         let selectionValidation = SelectionValidation
         selectionValidation.validateField(val);
         let localStatus = selectionValidation.status
         if (localStatus) {
            setIsInvalid(false)
            setSelection(val);
         }
         else {
            setIsInvalid(true)
            setSelection(val);
         }
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: val})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        submitFunction({id, question: currId, selection: val})
    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    return (
        <QuestionSection title={data.question} helperText={data.helperText} tooltip={tooltip()} required={data.required}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                <HStack space={4}>
                    <Button variant={selection === '0' ? 'solid': 'subtle'} onPress={() => submitField('0')}>None</Button>
                    <Button variant={selection === '1' ? 'solid': 'subtle'} onPress={() => submitField('1')}>1</Button>
                    <Button variant={selection === '2' ? 'solid': 'subtle'} onPress={() => submitField('2')}>2</Button>
                    <Button variant={selection === '3' ? 'solid': 'subtle'} onPress={() => submitField('3')}>3</Button>
                    <Button variant={selection === '4' ? 'solid': 'subtle'} onPress={() => submitField('4')}>4</Button>
                    <Button variant={selection === '5' ? 'solid': 'subtle'} onPress={() => submitField('5')}>5</Button>
                    <Input
                        placeholder = "Other"
                        onChangeText = {submitField}
                        value = {(selection > 5) ? selection:''}
                        size="md"
                        ml={4}
                    />
                </HStack>
            </ScrollView>
        </QuestionSection>
    )
}

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response};
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);
