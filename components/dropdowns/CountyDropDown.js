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
    let countyOptions = null;
    const stateDropDownQuestionID = "Sl6ypLYA"; // need to be changed later 


    const [selectedOption, setSelectedOption] = React.useState(null);
    const stateResponse = this.props.road.response[stateDropDownQuestionID];
    console.log(stateResponse);
    


    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    if (props.response != null) {
        if (data.questionDependency != null) {
            console.log(props.response)
            let tarQuesArr = data.questionDependency
            for (let i = 0; i < tarQuesArr.length; i++) { // Looping through dependent question
                let tarUid = tarQuesArr[i].dependencyUid
                let tarOptionCode = tarQuesArr[i].dependencyOptionCode
                for (let j = props.response.length - 1; j >= 0; j--) { // Searching from the most recent changes made by user
                    if (props.response[j].selection == tarOptionCode) { break }
                    if (typeof props.response[j].selection == "array") {
                        let resArr = props.response[j].selection.find(item => item != tarOptionCode)
                        if (resArr.length === props.response[j].selection.length) { return null }
                    }
                    if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode) {
                        console.log("Dependent question does not display");
                        return null
                    }
                }
            }
        }
    };

    // Populate if value already exists in redux
    if (!selectedOption) {
        if (existingData != null) {
            if (existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if (data.answerOptions[i].text == existingData[currId]) {
                        curOption = {
                            idCode: existingData[currId],
                            text: data.answerOptions[i].text
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

    const submitField = (selection) => {
        setSelectedOption(selection);
        updateResponse && updateResponse({ id, question: currId, selection: selection.idCode })
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
                        data={data.answerOptions}
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

const mapStateToProps = (state) => {
    const road = state.roadReducer;
    return { road }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountyDropDown);
