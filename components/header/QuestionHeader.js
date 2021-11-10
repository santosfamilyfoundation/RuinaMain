import React from 'react';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';
import { Heading, Text, VStack } from 'native-base';

const QuestionHeader = (props) => {
    const {data, dependencyID} = props;
    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <VStack>
                <Heading size='sm'>{data.question}</Heading>
                <Text>{data.helperText}</Text>
            </VStack>
        )
    }else{
        return null
    }
};

const mapStateToProps = (state) => {
    const { response } = state.storyReducer
    return { response }
};

export default connect(mapStateToProps)(QuestionHeader);