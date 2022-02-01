import React from 'react';
import { HStack, Divider, Heading, IconButton, ArrowBackIcon, Box } from 'native-base';

const TopNavigation = (props) => {
    const { title, backButton, navigation } = props

    return(
        <>
         <HStack m={4} alignItems='center' justifyContent='space-between'>
            {backButton ?
                <IconButton
                 icon={<ArrowBackIcon name="arrow-back"/>}
                 onPress={()=>{navigation.goBack()}}
                />
                : null
            }
            <Heading textAlign="center">{title}</Heading>
            <HStack>
                {props.children}
            </HStack>
         </HStack>
         <Divider/>
        </>
    )
}

export default TopNavigation