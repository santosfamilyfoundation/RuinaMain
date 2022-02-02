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
    const [selected, setSelected] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);

    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;


    let currId = data.humanReadableId
    let status;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);
                setSelected(existingData[currId])
//                setButtonAppearance('filled');
            }
        }
    }

    const submitField = (text) => {
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: text, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: text})
        }
        updateResponse && updateResponse({id, question: currId, selection: text})
        submitFunction({id, question: currId, selection: text})
//        setButtonAppearance('filled');
    }

    const onTextChange = (text) => {
        setValue(text);
        if(!text) {
            submitFunction({id, question: currId, selection: null});
            return;
        }
        setSelected(null);
        submitField(text)
    }

    const onSelectOneOption = (option) => {
      setValue(option.name);
      submitFunction({id, question: currId, selection: option.name});
      setSelected(option.name)
    }

//    if(!value && buttonAppearance != 'outline') {
//        setButtonAppearance('outline');
//    } else if(existingData != null) {
//        if(value != existingData[currId] && buttonAppearance != 'outline') {
//            setButtonAppearance('outline');
//        }
//    }

    // Input length checking
//    if(value.length > data.maxLength && !isInvalid) {
//        setIsInvalid(true);
//    } else if(isInvalid && value.length <= data.maxLength) {
//        setIsInvalid(false);
//    }


    const renderSingleButton = (option) => {
//      let appearance = (value == option.text) ? 'filled': 'outline';
      return (
          <Button
              key={option.id}
              variant={selected === option.name ? 'solid': 'subtle'}
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
                    onChangeText={(text) => {onTextChange(text)}}
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

