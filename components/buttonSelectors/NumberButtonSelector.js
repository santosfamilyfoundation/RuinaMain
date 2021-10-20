import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Button, Text, HStack, Input } from 'native-base';
import { genericWriteAction } from '../../actions/GenericAction';
=======
import { Button, Text, Layout, Card, CardHeader, Input } from '@ui-kitten/components';
//import { genericWriteAction } from '../../actions/GenericAction';
>>>>>>> origin/master
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import TooltipView from '../Tooltip.js';
import { View } from 'react-native';
<<<<<<< HEAD
import Section from '../Section';
=======
import { updateResponse } from '../../actions/StoryActions';

>>>>>>> origin/master

const NumberButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState('');
<<<<<<< HEAD
    const {title, data, id, submitFunction, genericReducer, fieldName, updateResponse, dependencyID, startRange, endRange} = props;
=======
    const {data, id, submitFunction, questionReducer, fieldName, updateResponse, dependencyID} = props;

    let currId = data.id
    let status = 'danger'

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
>>>>>>> origin/master

    const submitField = (val) => {
        val = parseInt(val);
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction({id, question: currId, selection: val});
    }

    if(!existingData) {
        status = 'danger'
    } else {
        if(!existingData[currId]) {
            status = 'danger';
        } else if(existingData[currId] != selection) {
            status = 'danger'
        } else {
            status = 'success'
        }
    }

    const renderSingleButton = (num) => {
        return (
            <Button onPress={() => submitField(num)} size={10}>{num}</Button>
        )
    }

    const renderButtons = () => {
        let buttons = [];
        for (let i = startRange; i <= endRange; i++) {
            console.log(i);
            let button;
            if (i == 0) {
                button = renderSingleButton("None");
            } else {
                button = renderSingleButton(i);
            }
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
        <Section title={title}>
            {renderButtons()}
        </Section>
    )
}

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);