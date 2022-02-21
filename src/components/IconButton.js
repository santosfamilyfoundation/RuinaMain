import React from 'react';
import { Button, Icon, Text, HStack } from 'native-base';

const IconButton = (props) => {
    const { text, onPress, icon, leftMargin, rightMargin, topMargin } = props;

    return(
        <Button onPress={onPress} ml={leftMargin} mr={rightMargin} mt={topMargin}>
            <HStack alignItems='center'>
                {icon}
                {text ? <Text ml={2} color='white' fontWeight='semibold'>{text}</Text> : null }
            </HStack>
        </Button>
    )
}

export default IconButton