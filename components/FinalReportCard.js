import React from 'react';
import { Heading, Divider, Text, Button, Box } from 'native-base';

const FinalReportCard = (props) => {
    const { title, message, button } = props

    return(
        <Box>
            <Heading size="md">{title}</Heading>
            <Divider/>
            <Text>{message}</Text>
            {button}
        </Box>
    )
}

export default FinalReportCard;