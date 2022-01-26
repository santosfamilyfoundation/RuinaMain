import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, HStack } from 'native-base';
import { styles } from './OpenTextFieldWithSelection.style';
import { updateResponse } from '../../actions/StoryActions';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import TextFieldValidation from '../../utils/TextFieldValidation.js';

const OpenTextFieldWithSelection = (props) => {
    const [value, setValue] = React.useState('');
    const [selected, setSelected] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);

    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;


    let currId = data.id
    let status;

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    if(!value) {
         if(existingData != null) {
             if(existingData[currId] != '' && existingData[currId] != null && !value) {
                 setValue(existingData[currId]);
             }
         }
     }
     if(!selected) {
             if(existingData != null) {
                 if(existingData[currId] != selected) {
                     setSelected(existingData[currId]);

                 }
             }
         }

    const dependencyField = () => {
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
         if (localText != 'Unknown'){
            setSelected(null)
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


    const onSelectOneOption = (option) => {
      setSelected(option.id)
      submitFunction({id, question: currId, selection: option.name});
      let textFieldValidation = TextFieldValidation
      textFieldValidation.submitField(option.name)
      var localStatus = textFieldValidation.status
       if (localStatus) {
          setIsInvalid(false)
       }
       else {
       setIsInvalid(true)
       }
    }



    const renderSingleButton = (option) => {
      return (
          <Button
              key={option.id}
              variant={selected === option.id ? 'solid': 'subtle'}
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
                errorMessage={`Invalid Input`}
                isInvalid={isInvalid}
                tooltip={tooltip()}
            >
                <Input
                    placeholder='Place your Text'
                    value = {valueSet(currId)}
                    onChangeText={(text) => onTextChange(text)}
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

