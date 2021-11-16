import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Input, HStack } from 'native-base';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { updateResponse } from '../../actions/StoryActions';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';



const NumberButtonSelector = (props) => {
    const [selection, setSelection] = React.useState('');
    const { data, id, submitFunction, questionReducer, fieldName, updateResponse, dependencyID } = props;
     let currId = data.id;

    const submitField = (val) => {
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            console.log(vehicleID)
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction(val);
    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    return (
        <QuestionSection title={data.question} helperText={data.helperText} tooltip={tooltip()}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                <HStack>
                    <Button variant={selection == '0' ? 'solid': 'outline'} onPress={() => submitField('0')}>None</Button>
                    <Button variant={selection == '1' ? 'solid': 'outline'} onPress={() => submitField('1')} ml={4}>1</Button>
                    <Button variant={selection == '2' ? 'solid': 'outline'} onPress={() => submitField('2')} ml={4}>2</Button>
                    <Button variant={selection == '3' ? 'solid': 'outline'} onPress={() => submitField('3')} ml={4}>3</Button>
                    <Button variant={selection == '4' ? 'solid': 'outline'} onPress={() => submitField('4')} ml={4}>4</Button>
                    <Button variant={selection == '5' ? 'solid': 'outline'} onPress={() => submitField('5')} ml={4}>5</Button>
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