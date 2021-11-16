import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, HStack } from 'native-base';
import { styles } from './OpenTextFieldWithSelection.style';
import { updateResponse } from '../../actions/StoryActions';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';


const OpenTextFieldWithSelection = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);

    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;


    let currId = data.id
    let status;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);
                setButtonAppearance('filled');
            }
        }
    }

    const submitField = () => {
        if(!value) {
            return;
        }
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: value})
        }
        updateResponse && updateResponse({id, question: currId, selection: value})
        submitFunction({id, question: currId, selection: value})
        setButtonAppearance('filled');
    }

    const onTextChange = (text) => {
        if(!text) {
            submitFunction({id, question: currId, selection: null})
        }
        setValue(text);
    }

    const clearField = () => {
        setValue('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

    const onSelectOneOption = (option) => {
      setValue(option.text);
      submitFunction({id, question: currId, selection: option.text});
      setButtonAppearance('filled');
    }

    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(existingData != null) {
        if(value != existingData[currId] && buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        }
    }

    // Input length checking
//    if(value.length > data.maxLength && !isInvalid) {
//        setIsInvalid(true);
//    } else if(isInvalid && value.length <= data.maxLength) {
//        setIsInvalid(false);
//    }

    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
    }

    const renderSingleButton = (option) => {
      let appearance = (value == option.text) ? 'filled': 'outline';
      return (
          <Button
              key={option.id}
              style={styles.answerButton}
              onPress={() => onSelectOneOption(option)}
          >
              {option.name}
          </Button>
      )
    }

    const renderButtons = () => {
        let res = data.answerOptions.map(option => (renderSingleButton(option)));
        return (
            res
        );
    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <QuestionSection
                key={key}
                title={data.question}
                helperText={data.helperText}
                errorMessage={`Maximum Character Limit: ${data.maxLength}`}
                isInvalid={isInvalid}
                tooltip={tooltip()}
            >
                <Input
                    placeholder='Place your Text'
                    value={value}
                    onChange={onTextChange}
                />
                <HStack mt={4}>
                    {renderButtons()}
                </HStack>
            </QuestionSection>
        )
    } else {
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
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenTextFieldWithSelection);

