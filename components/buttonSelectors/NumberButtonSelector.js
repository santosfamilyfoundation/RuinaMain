import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Input, HStack } from 'native-base';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { updateResponse } from '../../actions/StoryActions';
import TooltipView from '../Tooltip';
import Section from '../Section';



const NumberButtonSelector = (props) => {
    const [selection, setSelection] = React.useState('');
    const { data, id, submitFunction, questionReducer, fieldName, updateResponse, dependencyID } = props;
     let currId = data.id;

    const submitField = (val) => {
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction(val);
    }

    const HelperTooltip = () => {
        return(
            <TooltipView helperText={data.helperText} toolTip={data.tooltip} helperImg={data.helperImg}/>
        )
    }

    return (
        <Section title={data.question}>
            {HelperTooltip()}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                <HStack>
                    <Button onPress={() => submitField('0')}>None</Button>
                    <Button onPress={() => submitField('1')}>1</Button>
                    <Button onPress={() => submitField('2')}>2</Button>
                    <Button onPress={() => submitField('3')}>3</Button>
                    <Button onPress={() => submitField('4')}>4</Button>
                    <Button onPress={() => submitField('5')}>5</Button>
                    <Input
                        placeholder = "Other"
                        onChangeText = {submitField}
                        value = {(selection > 5) ? selection:''}
                        size="md"
                    />
                </HStack>
            </ScrollView>
        </Section>
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