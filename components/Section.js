import React, {Component} from 'react';
import { Heading, Divider, Box, FormControl, VStack } from 'native-base';

const Section = (props) => {
    const { title } = props;

    return (
        <Box m={4}>
            <Heading>{title}</Heading>
            <Divider/>
            {props.children}
        </Box>
    );
}

export default Section;