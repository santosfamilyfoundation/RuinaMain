import React, { useEffect } from 'react';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { deleteRoadSingleResponse } from '../../actions/RoadAction';
import QuestionSection from '../QuestionSection';
import SelectBox from 'react-native-multi-selectbox';
import TooltipView from '../Tooltip';


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

    const stateDropDownQuestionID = data.questionDependency[0].dependencyUid;
    let existingDataState = existingData ? existingData[stateDropDownQuestionID] : null;

    // Populate if value already exists in redux
    // If no selected answer in UI for county question
    if (selectedOption.length === 0) {
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
                        let curOption = {item: existingData[currId]};
                        setSelectedOption(curOption);
                    }
                }
            }
        }
    } 
    // Check if user has updated state selection
    else {
        let selectedCounty = selectedOption.item;
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
        countyOptions = countiesByStates[existingDataState].sort().map((county) => { 
            return { "item": county }
        });
    } else {
        countyOptions = [{
            "item": "Please select a state..."
        }]
    }
    const submitField = (selection) => {
        setSelectedOption(selection);
        updateResponse && updateResponse({ id, question: currId, selection: selection.text })
        let content = selection.item;
        submitFunction({ id, question: currId, selection: content })
    }

    const HelperTooltip = () => {
        return (
             <TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>
        )
    }


    return (
        <QuestionSection
            key={key}
            title={data.question}
            helperText={data.helperText}
        >
            {HelperTooltip()}
            <SelectBox
                label='test box'
                options={countyOptions}
                value={selectedOption}
                onChange={(e) => submitField(e)}
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
