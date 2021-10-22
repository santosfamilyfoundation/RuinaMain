import React, {Component} from 'react';
import { Heading, Divider, Box, FormControl, VStack } from 'native-base';

const Section = (props) => {
    const { title, isForm} = props;

    return (
        <Box>
            {isForm ?
                <FormControl isInvalid={props.isInvalid}>
                <FormControl.Label bold fontSize='xl'>{title}</FormControl.Label>
                <Divider/>
                <VStack>
                    <FormControl.HelperText>{props.helperText}</FormControl.HelperText>
                    <FormControl.ErrorMessage>{props.errorMessage}</FormControl.ErrorMessage>
                    {props.children}
                </VStack>
                </FormControl>
                :
                <>
                    <Heading>{title}</Heading>
                    <Divider/>
                    {props.children}
                </>
            }
        </Box>
    );
}

export default Section;