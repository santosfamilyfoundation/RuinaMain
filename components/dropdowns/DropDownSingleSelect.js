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


const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction } = props;

    // getRef[0].state.selectedOption
    // props.keyprops.id
    let currId = data.id;
    // reducerArr["driver"].reducer

    // console.log("QuestionReducer", questionReducer)
    // console.log('getRef', getRef())
    const reducerData = questionReducer.data.find(entry => entry.id == id); 
    let existingData = !reducerData?.response ? null : reducerData.response;

    updateResponse(existingData)
    
    console.log("props.storyReducer", props.storyReducer) 

    if(existingData != null) { 
        console.log(existingData)// currently there is data existing in the reducer 
        if (data.questionDependency != null){
            let tarQuesArr = data.questionDependency
            for(let i = 0; i <tarQuesArr.length; i++){
                // let tarUid = tarQuesArr[i].dependencyUid
                let tarId = tarQuesArr[i].id
                let tarOptionCode = tarQuesArr[i].dependencyOptionCode
                if (existingData[tarId]){
                    console.log("Exiting"+existingData[tarId])
                    // if(existingData[tarId]== tarOptionCode){
                    if(existingData[tarId]== tarOptionCode){
                        console.log("Should not showing component")
                        return null
                    }
                }
            }

        }
    };

    // Populate if value already exists in redux
    if(!selectedOption) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(data.answerOptions[i].idCode == existingData[currId]) {
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
        setSelectedOption(selection);
        let content = selection.idCode;
        submitFunction({id, question: currId, selection: content})
    }

    const Header = () => (
        <CardHeader title={data.question}/>
      );

    const HelperText = () => {
        if(data?.helperText?.length != 0) {
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

const mapStateToProps = (state, props) => {
    // console.log('state', state);
    const { story } = state;
    const { reponse } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer, reponse }
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);
