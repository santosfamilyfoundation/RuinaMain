import React from 'react';
import { Button, Icon, Text, HStack } from 'native-base';

const IconButton = (props) => {
    const { text, onPress, icon } = props;

    return(
        <Button onPress={onPress}>
            <HStack>
                {icon}
                <Text>{text}</Text>
            </HStack>
        </Button>
    )
}

export default IconButton