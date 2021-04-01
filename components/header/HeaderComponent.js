import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from './HeaderComponent.style'
import { connect } from 'react-redux';

const HeaderComponent = (props) => {
    const {data} = props;
    // let currUid = data.questionUid;
    
    if(props.response != null) { 
    if (data.questionDependency != null){
        let tarQuesArr = data.questionDependency
        for(let i = 0; i <tarQuesArr.length; i++){ // Looping through dependent question
            let tarUid = tarQuesArr[i].dependencyUid
            let tarOptionCode = tarQuesArr[i].dependencyOptionCode
            for (let j = props.response.length-1; j > 0; j--){ // Searching from the most recent changes made by user
                if (typeof props.response[j].selection == "array"){
                    let resArr = props.response[j].selection.find(item => item != tarOptionCode)
                    if (resArr.length === props.response[j].selection.length){return null}
                }
                if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode){
                    return null
                }
            }
        }
    }
};
    return(
        <Layout style={styles.container}>
            <Text category='h5'>{data.question}</Text>
            <Text category='s1'>{data?.helperText}</Text>
        </Layout>
    )
};

const mapStateToProps = (state) => {
    // console.log('state', state);
    // const { story } = state;
    const { response } = state.storyReducer
    return { response }
};

export default connect(mapStateToProps)(HeaderComponent);