import React, {Component} from 'react';
import { Heading, Divider, Box } from 'native-base';

const QuickSurveyCard = (props) => {
    const {title, content} = props;

    return (
        <Box>
            <Heading>{title}</Heading>
            <Divider/>
            {content}
        </Box>
    );
}

export default QuickSurveyCard;