import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import QuestionSection from '../QuestionSection';
import { Button, TextArea, Box, Text, Icon, VStack } from 'native-base';
import { styles } from './LargeTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import IconButton from '../IconButton';
import TextFieldValidation from '../../utils/TextFieldValidation.js';


const LargeTextField = (props) => {
    const [errors, setErrors] = React.useState({});
    const [value, setValue] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, dependencyID} = props;

    let currId = data.id
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
//                 setIsInvalid(false)
             }
         }
     }

      const onTextChange = (text) => {
         console.log('this is text',text)
         var localText = text
         submitFunction({id, question: currId, selection: localText})
         if(!text) {
            setIsInvalid(true)
         }
         textFieldValidation = TextFieldValidation
         console.log(textFieldValidation)
         textFieldValidation.submitField(localText);
         var localStatus = textFieldValidation.status
         console.log("localstatus ", localStatus)
         if (localStatus) {
            setIsInvalid(false)
         }
         else {
         setIsInvalid(true)
         }
     }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
        <Box>
            <QuestionSection
             title={data.question}
             helperText={data.helperText}
             tooltip={tooltip()}
             errorMessage='Invalid Input'
             isInvalid={isInvalid}
            >
                <TextArea
                 placeholder="Place your text"
                 value = {existingData[currId]}
                 onChangeText={(text) => onTextChange(text)}
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