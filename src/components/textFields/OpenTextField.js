import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, VStack, IconButton, CloseIcon, Text } from 'native-base';
import { styles } from './OpenTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import TextFieldValidation from '../../utils/TextFieldValidation.js';

const OpenTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, dependencyID} = props;

    let currId = data.humanReadableId
    let status;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;


    /* checks whether a saved value exists for each rendered field*/
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && existingData[currId] != '' && !value) {
                setValue(existingData[currId]);
            }
        }
    }

    /* when text field value changes, checks whether text is valid based on provided validation data, and then assigns state accordingly */
     const onTextChange = (text) => {
        var localText = text
        submitFunction({id, question: currId, selection: localText})
        if(!text) {
            setIsInvalid(true)
            }
        let textFieldValidation = TextFieldValidation
        textFieldValidation.submitField(localText, data.val_type, data.val_constraint);
        var localStatus = textFieldValidation.status
        if (localStatus) {
            setIsInvalid(false)
            }
        else {
            setIsInvalid(true)
            }
    }


    /* returns text field value, if it exists */
    const valueSet = (currId) => {
        try {if (existingData[currId] != null){
            return existingData[currId]
        }
        }
        catch(err)
        {
        return null
        }
    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    /* retrieve dependencies and props */
    var renderComponent = true;
    if (data.questionDependency != undefined && props.response != null) {
        renderComponent = dependencyParser(props.response, data, dependencyID)
    }

    if (renderComponent){
        return(
            <QuestionSection
                key={key}
                title={data.question}
                isForm
                helperText={data.helperText}
                errorMessage={data.warning_msg}
                isInvalid={isInvalid}
                tooltip={tooltip()}
                required={data.required}
            >
                <Input placeholder="Place your text"
                value = {valueSet(currId)}
                onChangeText={(text) => onTextChange(text)}/>
            </QuestionSection>
        )
    } else {
        return null
    }
};

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps)(OpenTextField);
