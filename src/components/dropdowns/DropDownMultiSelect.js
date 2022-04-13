import React from 'react';
import { updateResponse } from '../../actions/StoryActions';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SelectionValidation from '../../utils/SelectionValidation.js'
import { Box } from "native-base";

const DropDownMultiSelect = (props) => {
    const [borderColor, setBorderColor] = React.useState("coolGray.200")
    const [errors, setErrors] = React.useState({});
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;

    let currId = data.humanReadableId;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    if (selectedOptions) {
    // Populate if value already exists in redux
    if(selectedOptions.length == 0) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let currOptions = []
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(existingData[currId].includes(data.answerOptions[i].name)) {
                        currOptions.push(data.answerOptions[i].id);
                    };
                };
                if(currOptions.length != 0) {
                    setSelectedOptions(currOptions);
                };
            };
        }
    };}

    // Disable/enable if numOptionsAllowed reached
    if(selectedOptions.length == data.numOptionsAllowed) {
        for(let i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = false;
            };
        };
    } else {
        for(let i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = false;
            };
        };
    }

    const setComplete = () => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }

    const setIncomplete = () => {
        status = 'danger'
        if(buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        };
    }

    // Determine submission status
    let status;
    if(!existingData) {
        setIncomplete();
    } else {
        if(!existingData[currId]) {
            setIncomplete();
        } else {
            let incompleteFlag = false;
            for(let i = 0; i < selectedOptions.length; i++) {
                if(!existingData[currId].includes(selectedOptions[i].name)){
                    incompleteFlag = true;
                }
            }
            if (selectedOptions.length < existingData[currId].length) {
                incompleteFlag = true;
            }
            if(incompleteFlag) {
                setIncomplete();
            } else {
                setComplete();
            }
        }
    }

    const validateLocal = (localInfo) => {
        let selectionValidation = SelectionValidation
             selectionValidation.validateField(localInfo);
             let localStatus = selectionValidation.status
             if (localStatus) {
                setBorderColor("coolGray.200")
                setIsInvalid(false);

             }
             else {
                setIsInvalid(true);
                setBorderColor("error.500")
                return;
             }
    }

    const submitField = (selectedItems, localInfo) => {
                 submitFunction({id, question: currId, selection: selectedItems})
//                 setSelectedOptions(selectedItems);
        let resId = []
        for(let i = 0; i < selectedItems.length; i++) {
            resId.push(selectedItems[i]);
        }

        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: resId})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
    }

    const addOption = (selectedItems) => {
        let upperLim = data.helperText
        let upperLimParsed = parseInt(upperLim[upperLim.length - 2])
        if (!selectedItems && selectedOptions){
            if (selectedOptions.length > upperLimParsed){
                validateLocal([])
                return
            }
            validateLocal(selectedOptions)
            return
        }
        if(selectedItems.length == 0) {
            setSelectedOptions([])
            validateLocal([])
            submitFunction({id, question: currId, selection: null})
            return;
        }
        if (selectedItems.length > upperLimParsed){
           validateLocal([])
           setSelectedOptions(selectedItems)
           submitField(selectedItems)
           return
        }
        else {
           setIsInvalid(false)
        }
        setSelectedOptions(selectedItems);
        let localInfo = selectedItems.concat(selectedOptions)
        validateLocal(localInfo)
        submitField(selectedItems);
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
                title={data.question}
                helperText={data.helperText}
                tooltip={tooltip()}
                errorMessage='Invalid input, make sure you satisfy the question requirements'
                isInvalid={isInvalid}
                required={data.required}
            >
                <Box borderColor={borderColor} borderWidth ="1">
                <SectionedMultiSelect
                  items={data.answerOptions}
                  IconRenderer={Icon}
                  uniqueKey='id'
                  selectText={'Select Options ...'}
                  onSelectedItemsChange={(selectedItems) => addOption(selectedItems)}
                  onSelectedItemObjectsChange={(selectedObject) => {
                    let res = [];
                    selectedObject.forEach(object => {res.push(object.name)});
                    submitFunction({id, question: currId, selection: res})
                  }}
                  selectedItems={selectedOptions}
                  onConfirm={addOption}
                  onCancel={addOption}
                  showCancelButton={true}
                />
                </Box>
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
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMultiSelect);
