import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { styles } from './Tooltip.style';
import ImageSelector from './image/imgIndex';
import { Box, VStack, Input, Text, Button, Modal, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Section } from './Section';

const TooltipView = (props) => {
    const {helperText, helperImg, toolTip} = props
    const [visible, setVisible] = React.useState(false);
    const[toolTipText, setToolTipText] = React.useState(toolTip ? true: false);
    const InfoIcon = (props) => (
        // <Image source={require('../image/test.jpg')} style={styles.img}/>
        <Icon name="help"/>
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
                /*<View style={styles.imgContainer}>
                    <Layout style={styles.modalContent}>
                        <Text>{toolTip}</Text>
                        <Image source={src} style={styles.img}/>
                    </Layout>
                </View>*/
                        )
            }else{
                return(
                    <Box>
                        <Text>{toolTip}</Text>
                    </Box>
                    /*<Layout style={styles.modalContent}>
                        <Text>{toolTip}</Text>
                    </Layout>*/
                )
            }
    }
               
    return (
    <Box>
        <VStack>
            {helperText ? <Text style={styles.helperText}>{helperText}</Text> : null}
            {toolTipText ?
            <>
                <IconButton onPress={toggleModal} icon={InfoIcon}/>
                <Modal visible={visible}>
                    <VStack>
                        {ModalContent()}
                        <IconButton onPress={() => setVisible(false)} icon={CloseIcon}/>
                    </VStack>
                </Modal>
            </> : null}
        </VStack>
    </Box>

    /*<Layout style={styles.container}>
        <View style={styles.rowContainer}>
            {helperText ? <Text style={styles.helperText}>{helperText}</Text>:null}
            {toolTipText ?
            <>
                <Button appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                    Info
                </Button>
                <Modal backdropStyle={styles.backdrop} visible={visible}>
                    <Card style={styles.content} disabled={true}>
                        {ModalContent()}
                        <Button appearance='ghost' icon={CloseIcon} onPress={() => setVisible(false)}>
                            Close
                        </Button>
                    </Card>
                </Modal>
            </> : null
            }
        </View>
    </Layout>*/
    )

}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps)(TooltipView);
