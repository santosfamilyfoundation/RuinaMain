import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../../image/imgIndex';
import QuestionSection from '../QuestionSection';
import { TextArea, Box, Text, Icon, VStack } from 'native-base';
import { styles } from './LargeTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import IconButton from '../IconButton';


const LargeTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, dependencyID} = props;

    let currId = data.humanReadableId
    let status;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    if(props.response != null) { 
        if (data.questionDependency != null){
            let tarQuesArr = data.questionDependency
            for(let i = 0; i <tarQuesArr.length; i++){ // Looping through dependent question
                let tarUid = tarQuesArr[i].dependencyUid
                let tarOptionCode = tarQuesArr[i].dependencyOptionCode
                for (let j = props.response.length-1; j >= 0; j--){
                    if (props.response[j].selection == tarOptionCode) {break}
                    if (typeof props.response[j].selection == "array"){
                        let resArr = props.response[j].selection.find(item => item != tarOptionCode)
                        if (resArr.length === props.response[j].selection.length){return null}
                    }
                    if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode){
                        return null
                    }
                }
            }
        }
    };

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);

            }
        }
    }

    const submitField = (text) => {
        if(!text) {
            return;
        }
        submitFunction({id, question: currId, selection: text})
    }

    const onTextChange = (text) => {
        setValue(text);
        if(!text) {
            submitFunction({id, question: currId, selection: null});
            return;
        }
        submitFunction({id, question: currId, selection: text})
    }

    const clearField = () => {
        setValue('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

//    if(value.length > data.maxLength && !isInvalid) {
//        setIsInvalid(true);
//    } else if(isInvalid && value.length <= data.maxLength) {
//        setIsInvalid(false);
//    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    var renderComponent = true;
    if (data.questionDependency != undefined && props.response != null) {
        renderComponent = dependencyParser(props.response, data, dependencyID)
    }

    if (renderComponent){
        return(
        <Box>
            <QuestionSection
             title={data.question}
             helperText={data.helperText}
             tooltip={tooltip()}
             errorMessage='Maximum Character Limit Exceeded'
             isInvalid={isInvalid}
             required={data.required}
            >
                <TextArea
                 placeholder="Place your text"
                 value={value}
                 onChangeText={(text) => {onTextChange(text)}}
                />
            </QuestionSection>
        </Box>
        )
    }else{
        return null
    }
};

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps)(LargeTextField);