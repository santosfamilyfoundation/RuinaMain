import React, {Component} from 'react';
import { Heading, Divider, Box, FormControl, VStack } from 'native-base';

const QuestionSection = (props) => {
    const { title, helperText, errorMessage } = props;

    return (
        <Box m={4} p={2} borderWidth='2' borderColor='muted.300' borderRadius='md'>
            <FormControl isInvalid={props.isInvalid}>
                <FormControl.Label>{title}</FormControl.Label>
                <Divider/>
                <VStack>
                    <FormControl.HelperText mb={4}>{helperText}</FormControl.HelperText>
                    <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
                    {props.children}
                </VStack>
            </FormControl>
        </Box>
    );
}

export default QuestionSection;