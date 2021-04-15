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


const CountyDropDown = (props) => {
    // json created from running: 
    // node data/parseStateCounty.js in the root directory of the project
    // json is a dictionary where the keys are the states and US territories; values are each of its corresponding counties
    const countiesByStates = require('../../data/stateCountyMapping.json');
    const stateDropDownQuestionID = "Sl6ypLYA"; // need to be changed later
    
    const countySelectRef = React.createRef();
    const [selectedOption, setSelectedOption] = React.useState(null);
    const { data, key, id, questionReducer, submitFunction, updateResponse } = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    const existingDataState = existingData[stateDropDownQuestionID];

    // if (props.response != null) {
    //     if (data.questionDependency != null) {
    //         console.log(props.response)
    //         let tarQuesArr = data.questionDependency
    //         for (let i = 0; i < tarQuesArr.length; i++) { // Looping through dependent question
    //             let tarUid = tarQuesArr[i].dependencyUid
    //             let tarOptionCode = tarQuesArr[i].dependencyOptionCode
    //             for (let j = props.response.length - 1; j >= 0; j--) { // Searching from the most recent changes made by user
    //                 if (props.response[j].selection == tarOptionCode) { break }
    //                 if (typeof props.response[j].selection == "array") {
    //                     let resArr = props.response[j].selection.find(item => item != tarOptionCode)
    //                     if (resArr.length === props.response[j].selection.length) { return null }
    //                 }
    //                 if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode) {
    //                     console.log("Dependent question does not display");
    //                     return null
    //                 }
    //             }
    //         }
    //     }
    // };

    // Populate if value already exists in redux
    if (!selectedOption) {
        if (existingData != null) {
            if (existingData[currId] != null && existingDataState != null) {
                let curOption;
                for (let i = 0; i < countiesByStates[existingDataState].length; i++) {
                    if (countiesByStates[existingDataState][i] == existingData[currId]) {
                        curOption = {
                            text: existingData[currId]
                        };
                    };
                };
                if (curOption != null) {
                    setSelectedOption(curOption);
                }
            };
        };
    };

    let status;
    if (!existingData) {
        status = 'danger'
    } else {
        if (!existingData[currId]) {
            status = 'danger';
        } else {
            status = 'success';
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
    console.log("State: ", existingDataState, ", County: ", countyOptions);

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
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountyDropDown);
