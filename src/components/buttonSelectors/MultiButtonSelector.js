import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Box, Text, VStack, Button, HStack } from 'native-base';
import QuestionSection from '../QuestionSection';
import ImageSelector from '../../image/imgIndex';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './MultiButtonSelector.style';
import TooltipView from '../Tooltip.js';
import { dependencyParser } from '../../utils/dependencyHelper';
import { SafeAreaView } from 'react-navigation';

const MultiButtonSelector = (props) => {
    const [selection, setSelection] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;

    let currId = data.id

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


    const submitField = (optionText, idCode) => {
        setSelection(optionText);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        submitFunction({id, question: currId, selection: optionText})
    }

    const renderSingleButton = (option) => {
        return (
            <Button
                key={option.id}
                mr={4}
                mb={4}
                variant={selection === option.name ? 'solid': 'subtle'}
                onPress={() => submitField(option.name, option.id)}
            >
                {option.name}
            </Button>
        )
    }

    const renderButtons = () => {
        let res = data.answerOptions.map(option => (renderSingleButton(option)));
        return (
            <HStack flexWrap='wrap'>
                {res}
            </HStack>
        );
    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <QuestionSection key={key} title={data.question} helperText={data.helperText} tooltip={tooltip()}>
                <VStack>
                {renderButtons()}
                </VStack>
            </QuestionSection>
        )
    }else{
        return null
    }
};

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};


export default connect(mapStateToProps, mapDispatchToProps)(MultiButtonSelector);
