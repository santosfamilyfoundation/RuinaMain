import React from 'react';
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


const CountyDropDown = (props) => {
    // json created from running: 
    // node data/parseStateCounty.js in the root directory of the project
    // json is a dictionary where the keys are the states and US territories; values are each of its corresponding counties
    const countiesByStates = require('../../data/stateCountyMapping.json');
   
    
    const [selectedOption, setSelectedOption] = React.useState(null);
    const { data, key, id, questionReducer, submitFunction, updateResponse, deleteRoadSingleResponse } = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    const stateDropDownQuestionID = data.questionDependency[0].dependencyUid;
    let existingDataState = existingData ? existingData[stateDropDownQuestionID] : null;

    // Populate if value already exists in redux
    if (!selectedOption) {
        console.log("selected option: ", selectedOption);
        if (existingData != null) {
            if (existingData[currId] != null) {
                if (existingDataState != null) {
                    const correspondingCounties = countiesByStates[existingDataState];
                    if (correspondingCounties.includes(existingData[currId])) {
                        let curOption = {text: existingData[currId]};
                        setSelectedOption(curOption);
                    } else {
                        console.log("delete mismatch county");
                        deleteRoadSingleResponse({ id: id, question: currId });
                    }
                } else {
                    deleteRoadSingleResponse({ id: id, question: currId});
                }
            };
        };
    } 
    // Check if user update state selection
    else {
        let selectedCounty = selectedOption.text;
        if (existingDataState != null) {
            const correspondingCounties = countiesByStates[existingDataState];
            if (!correspondingCounties.includes(selectedCounty)) {
                console.log("delete mismatch county");
                setSelectedOption(null);
                //deleteRoadSingleResponse({ id: id, question: currId });
                  
            }
        } else {
            setSelectedOption(null);
            //deleteRoadSingleResponse({ id: id, question: currId });
        }
    }

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
    //console.log("State: ", existingDataState, ", County: ", countyOptions);

    const submitField = (selection) => {
        setSelectedOption(selection);
        updateResponse && updateResponse({ id, question: currId, selection: selection.text })
        let content = selection.text;
        submitFunction({ id, question: currId, selection: content })
    }

    const Header = () => (
        <CardHeader title={data.question} />
    );

    const HelperText = () => {
        if (data?.helperText?.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }


    return (
        <Layout key={key} style={styles.container} >
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Select
                        placeholder='Select County'
                        data={countyOptions}
                        selectedOption={selectedOption}
                        multiSelect={false}
                        onSelect={(e) => submitField(e)}
                    />
                </Layout>
            </Card>
        </Layout>
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
