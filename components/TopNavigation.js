import React from 'react';
import { HStack, Divider, Heading, Icon, IconButton, ArrowBackIcon } from 'native-base';

const TopNavigation = (props) => {
    const { title, backButton, navigation } = props

    console.log(backButton)

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
         </HStack>
         <Divider/>
        </>
    )
}

export default TopNavigation