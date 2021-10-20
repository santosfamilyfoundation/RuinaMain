import React from 'react';
import { HStack, Divider, Heading, Icon, IconButton, ArrowBackIcon } from 'native-base';

const TopNavigation = (props) => {
    const { title, backButton, navigation } = props

    return(
        <>
         <HStack>
            {backButton ?
                <IconButton
                 icon={<ArrowBackIcon name="arrow-back"/>}
                 onPress={()=>{navigation.goBack()}}
                />
                : null
            }
            <Heading textAlign="center">{title}</Heading>
            {props.children}
         </HStack>
         <Divider/>
        </>
    )
}

export default TopNavigation