import React from 'react';
import { Button, Icon, Text, HStack } from 'native-base';

const IconButton = (props) => {
    const { text, onPress, icon, leftMargin, rightMargin, topMargin } = props;
//    const {style, setStyle} = React.useState(text ? 'filled' : 'outlined')

    return(
        <Button onPress={onPress} ml={leftMargin} mr={rightMargin} mt={topMargin}>
            <HStack alignItems='center'>
                {icon}
                <Text ml={2}>{text}</Text>
            </HStack>
        </Button>
    )
}

export default IconButton