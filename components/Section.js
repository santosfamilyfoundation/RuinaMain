import React, {Component} from 'react';
import { Heading, Divider, Box } from 'native-base';

const Section = (props) => {
    const { title } = props;

    return (
        <Box>
            <Heading>{title}</Heading>
            <Divider/>
            {props.children}
        </Box>
    );
}

export default Section;