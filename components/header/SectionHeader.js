import React from 'react';
import { Heading, Text, VStack } from 'native-base';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';
import Section from '../Section';

const SectionHeader = (props) => {
    const {data, dependencyID} = props;
    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <VStack>
                <Heading size='md'>{data.question}</Heading>
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

export default connect(mapStateToProps)(SectionHeader);