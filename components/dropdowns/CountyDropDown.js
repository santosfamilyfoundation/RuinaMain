import React, { useEffect } from 'react';
import {
    Layout,
    Select,
    Text,
    Card,
    CardHeader
} from '@ui-kitten/components';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { deleteRoadSingleResponse } from '../../actions/RoadAction';
import Section from '../Section';
import MultiSelect from 'react-native-multiple-select';


const CountyDropDown = (props) => {
    // json created from running: 
    // node data/parseStateCounty.js in the root directory of the project
    // json is a dictionary where the keys are the states and US territories; values are each of its corresponding counties
    const countiesByStates = require('../../data/stateCountyMapping.json');
    
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [deleteCountyFromState, setDeleteCountyFromState] = React.useState(false);
    const { data, key, id, questionReducer, submitFunction, updateResponse, deleteRoadSingleResponse } = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    const stateDropDownQuestionID = data.questionDependency[0].dependencyUid;
    let existingDataState = existingData ? existingData[stateDropDownQuestionID] : null;

    // Populate if value already exists in redux
    // If no selected answer in UI for county question
    if (!selectedOption) {
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
                        let curOption = {text: existingData[currId]};
                        setSelectedOption(curOption);
                    }
                }
            }
        }
    } 
    // Check if user has updated state selection
    else {
        let selectedCounty = selectedOption.text;
        // If user has filled out the state question
        if (existingDataState != null) {
            const correspondingCounties = countiesByStates[existingDataState];
            if (!correspondingCounties.includes(selectedCounty)) {
                // set county selected option to null
                setSelectedOption(null);
                // delete county answer from redux state
                setDeleteCountyFromState(true);
                  
            }
        } else {
            // If user tries to select "Please select a state..." option in County dropdown without selecting a state
            setSelectedOption(null);
            setDeleteCountyFromState(true);
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

    let countyOptions = null;
    if (existingDataState) {
        countyOptions = countiesByStates[existingDataState].sort().map((county) => { 
            return { "text": county } 
        });
    } else {
        countyOptions = [{
            "text": "Please select a state..."
        }]
    }    

    const submitField = (selection) => {
        setSelectedOption(selection);
        updateResponse && updateResponse({ id, question: currId, selection: selection.text })
        let content = selection.text;
        submitFunction({ id, question: currId, selection: content })
    }

    const HelperText = () => {
        if (data?.helperText?.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }


    return (
        <Section
            key={key}
            title={data.question}
            isForm
            helperText={data.helperText}
        >
            {HelperTooltip()}
            <MultiSelect
                placeholder='Select County'
                selectedItems={selectedOption}
                onSelectedItemsChange={(e) => submitField(e)}
                single={true}
                items={countyOptions}
                uniqueKey={data.question.humanReadableId}
            />
        </Section>
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
