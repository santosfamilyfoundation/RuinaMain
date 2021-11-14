import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { styles } from './Tooltip.style';
import ImageSelector from './image/imgIndex';
import { Box, VStack, Input, Text, Button, Modal, HStack, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Section from './Section';
//import IconButton from './IconButton'

const TooltipView = (props) => {
    const { helperImg, toolTip } = props
    const [visible, setVisible] = React.useState(false);
    const [toolTipText, setToolTipText] = React.useState(toolTip ? true: false);
    const InfoIcon = (props) => (
        <Icon name="help" color='white' size={25}/>
    )

    const CloseIcon = (style) => (
        <Icon name="close"/>
    );

    const toggleModal = () => {
        setVisible(!visible);
    };


    const ModalContent = () => {
        if (helperImg != null ){
            var img = new ImageSelector()
            const src = img.pathHandler(helperImg)
            return (
                <Box>
                    <VStack>
                        <Text>{toolTip}</Text>
                        <Image source={src}/>
                    </VStack>
                </Box>
                        )
            }else{
                return(
                    <Box>
                        <Text>{toolTip}</Text>
                    </Box>
                )
            }
    }
               
    return (
    <Box>
            {toolTipText ?
            <>
                <IconButton onPress={() => toggleModal()} icon={InfoIcon()} _icon={{color:'black'}}/>
                <Modal isOpen={visible} onClose={() => setVisible(false)} size='lg'>
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>
                            <HStack>
                                <Icon name="help" size={15}/>
                                <Text ml={4}>Tooltip</Text>
                            </HStack>
                        </Modal.Header>
                        <Modal.Body>
                            {ModalContent()}
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
            </> : null}
    </Box>
    )

}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps)(TooltipView);
