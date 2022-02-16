import React from 'react';
import MultiSelect from 'react-native-multiple-select';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconButton from '../IconButton';
import SelectionValidation from '../../utils/SelectionValidation.js';

const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState([]);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
    const [isInvalid, setIsInvalid] = React.useState(false);
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    if(selectedOption.length < 1) {
        if(existingData != null) {
            console.log()
            if(existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(data.answerOptions[i].name == existingData[currId]) {
                        curOption = [data.answerOptions[i].id];
                    };
                };
                if (curOption != null) {
                    setSelectedOption(curOption);
                }
            };
        };
    };

    let status;
    if(!existingData) {
        status = 'danger'
    } else {
        if(!existingData[currId]) {
            status = 'danger';
        } else {
            status = 'success';
        }
    }

    const validateLocal = (localInfo) => {
            let selectionValidation = SelectionValidation
                 console.log(localInfo)
                 selectionValidation.validateField(localInfo);
                 let localStatus = selectionValidation.status
                 console.log('at the right place, at least')
                 if (localStatus) {
                    console.log(localStatus, ' local Status')
                    setIsInvalid(false);
                    console.log('selectedOption', selectedOption)

                 }
                 else {
                    setIsInvalid(true);
                    console.log('this part, yikes')
                    return;
                 }
        }

    const submitField = (selection) => {
        let selected = selection[0]
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: selected})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: selected, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: selected, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: selected, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        setSelectedOption(selection);
        submitFunction({id, question: currId, selection: selection})
    }

    const addOption = (selectedItem) => {
            console.log(selectedItem)
            console.log("this is what I'm getting", selectedOption)
            if (!selectedItem){
                console.log('check here: ', selectedOption)
                validateLocal(selectedOption)
                return
            }
            if(selectedItem.length == 0) {
                console.log('no one expected this one!!')
                setSelectedOption([])
                validateLocal([])
                submitFunction({id, question: currId, selection: []})
                return;
            }
            if (selectedItem[0] == selectedOption[0]){
                setSelectedOption([])
                submitFunction({id, question: currId, selection: []})
                validateLocal([])
                let selectedItem = []
                console.log('this is really unfortunate')
                return
                  }
            else {
               setIsInvalid(false)
               console.log(selectedItem, typeof(selectedItem))
               console.log("this is what I'm getting", typeof(selectedOption))
            }
            setSelectedOption(selectedItem);
            let localInfo = selectedItem
            validateLocal(localInfo)
            submitField(selectedItem);
        }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    let renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <QuestionSection
                key={key}
                title={data.question}
                helperText={data.helperText}
                tooltip={tooltip()}
                errorMessage='Invalid Input'
                isInvalid={isInvalid}
            >
                <SectionedMultiSelect
                  items={data.answerOptions}
                  IconRenderer={Icon}
                  uniqueKey='id'
                  selectText={'Select Option ...'}
                  onSelectedItemsChange={(selectedItems) => {addOption(selectedItems)}}
                  onSelectedItemObjectsChange={(selectedObject) => {submitFunction({id, question: currId, selection: selectedObject[0].name})}}
                  selectedItems={selectedOption}
                  hideConfirm={true}
                  single={true}
                  showCancelButton={true}
                  onCancel={(selectedItems) => {addOption(selectedItems)}}
//                  onConfirm={(selectedItems) => {addOption(selectedItems)}}
                />
            </QuestionSection>
        )
    } else{
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);
