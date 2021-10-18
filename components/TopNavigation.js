import React from 'react';
import { HStack, Divider, Heading } from 'native-base';
import Icon from 'react-native-vector-icons'

const TopNavigation = (props) => {
    const { title, backButton, navigation } = props

    return(
        <>
         <HStack>
            {backButton ?
                <IconButton
                 icon={<Icon name="arrow-back" size={25}/>}
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