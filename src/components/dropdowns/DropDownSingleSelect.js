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

const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState([]);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    if(!selectedOption) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(data.answerOptions[i].name == existingData[currId]) {
                        curOption = {
                            id: existingData[currId],
                            name: data.answerOptions[i].name
                        };
                    };
                };
                if (curOption != null) {
                    console.log('setting option!!!')
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

    const submitField = (selection) => {
        if (!selection || selection.length == 0) {
            setSelectedOptions([]);
            return submitFunction({id, question: currId, selection: null});
        }
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
        setSelectedOption(selection)
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
            >
                <SectionedMultiSelect
                  items={data.answerOptions}
                  IconRenderer={Icon}
                  uniqueKey='id'
                  selectText={'Select Option ...'}
                  onSelectedItemsChange={submitField}
                  onSelectedItemObjectsChange={(selectedObject) => {submitFunction({id, question: currId, selection: selectedObject[0].name})}}
                  selectedItems={selectedOption}
                  hideConfirm={true}
                  single={true}
                  showCancelButton={true}
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
