import React, { useEffect } from 'react';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { deleteRoadSingleResponse } from '../../actions/RoadAction';
import QuestionSection from '../QuestionSection';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import TooltipView from '../Tooltip';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CountyDropDown = (props) => {
    // json created from running:
    // node data/parseStateCounty.js in the root directory of the project
    // json is a dictionary where the keys are the states and US territories; values are each of its corresponding counties
    const countiesByStates = require('../../data/stateCountyMapping.json');

    const [selectedOption, setSelectedOption] = React.useState([]);
    const [deleteCountyFromState, setDeleteCountyFromState] = React.useState(false);
    const { data, key, id, questionReducer, submitFunction, updateResponse, deleteRoadSingleResponse } = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    const stateDropDownQuestionID = data.questionDependency[0].dependencyUuid;
    let existingDataState = existingData ? existingData[stateDropDownQuestionID] : null;

    // Populate if value already exists in redux
    // If no selected answer in UI for county question
    if (selectedOption < 1) {
//        if (selectedOption.length === 0) {
            // Road section isn't null
            if (existingData != null) {
                // Road section county response isn't null
                if (existingData[currId] != null) {
                    // Road section state response isn't null
                    if (existingDataState != null) {
                        // Check if county answer in redux is part of the list of counties under
                        // the state answer in redux
                        const correspondingCounties = countiesByStates[existingDataState];
                        if (correspondingCounties.includes(existingData[currId])) {
                            let curOption = [existingData[currId]];
                            setSelectedOption(curOption);
                        }
                    }
                }
            }
//        }
        // Check if user has updated state selection
        else {
            let selectedCounty = selectedOption[0]
            // If user has filled out the state question
            if (existingDataState != null) {
                const correspondingCounties = countiesByStates[existingDataState];
                if (!correspondingCounties.includes(selectedCounty)) {
                    // set county selected option to null
                    setSelectedOption([]);
                    // delete county answer from redux state
                    setDeleteCountyFromState(true);

                }
            } else {
                // If user tries to select "Please select a state..." option in County dropdown without selecting a state
                setSelectedOption([]);
                setDeleteCountyFromState(true);
            }
        }
    }

    // Gets called after each render
    useEffect(() => {
        if (deleteCountyFromState) {
            deleteRoadSingleResponse({ id: id, question: currId });
            setDeleteCountyFromState(false);
        }
    })

    let status;
    if (!existingData) {
        status = 'danger'
    } else {
        if (!existingData[currId]) {
            status = 'danger';
        }
        // if state question is not filled out
        else if (!existingDataState) {
            status = 'danger';
        } // if both state and county questions are filled out
        else {
            // when county selection falls under/is included in the state selection's county list
            // This is for the scenario when user changes state answer after filling out county question
            if (countiesByStates[existingDataState].includes(existingData[currId])){
                status = 'success';
            } else {
                status = 'danger';
            }
        }
    }

    let countyOptions = [];
    if (existingDataState) {
        countyOptions = countiesByStates[existingDataState].sort().map(county => {
            return { "name": county }
        });
    } else {
        countyOptions = [{
            "name": "Please select a state..."
        }]
    }
    const submitField = (selection) => {
        if (!selection || selection.length == 0) {
            setSelectedOptions([]);
            return submitFunction({id, question: currId, selection: null});
        }
        let selected = selection[0]
        updateResponse && updateResponse({ id, question: currId, selection: selected })
        setSelectedOption(selection);

    }

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    return (
        <QuestionSection
            key={key}
            title={data.question}
            helperText={data.helperText}
            tooltip={tooltip()}
            required={data.required}
        >
                <SectionedMultiSelect
                  items={countyOptions}
                  IconRenderer={Icon}
                  uniqueKey='name'
                  selectText={'Select Option ...'}
                  onSelectedItemsChange={(selectedItems) => {submitField(selectedItems)}}
                  onSelectedItemObjectsChange={(selectedObject) => submitFunction({id, question:currId, selection: selectedObject[0].name})}
                  selectedItems={selectedOption}
                  hideConfirm={true}
                  single={true}
                  showCancelButton={true}
                />
        </QuestionSection>
    );
};

const mapDispatchToProps = {
    updateResponse,
    deleteRoadSingleResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountyDropDown);
