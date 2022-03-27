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

    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && existingData[currId] != '' && !value) {
                setValue(existingData[currId]);
            }
        }
    }

     const onTextChange = (text) => {
        var localText = text
        submitFunction({id, question: currId, selection: localText})
        if(!text) {
            setIsInvalid(true)
            }
        let textFieldValidation = TextFieldValidation
        textFieldValidation.submitField(localText);
        var localStatus = textFieldValidation.status
        if (localStatus) {
            setIsInvalid(false)
            }
        else {
            setIsInvalid(true)
            }
    }

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
                errorMessage='Invalid Input'
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
