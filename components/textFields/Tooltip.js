import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { styles } from './Tooltip.style';
import { Input, Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';

const TooltipView = (props) => {
            const {data} = props
            const ModalContent = (props) => {
                    if (data.helperImg != null ){
                        var img = new ImageSelector()
                        const src = img.pathHandler(data.helperImg)
                        return (
                            <View style={styles.imgContainer}>
                                <Layout style={styles.modalContent}>
                                    <Text>{data.tooltip}</Text>
                                    <Image source={src} style={styles.img}/>
                                </Layout>
                            </View>
                        )
                    }else{
                        return(
                            <Layout style={styles.modalContent}>
                                <Text>{data.tooltip}</Text>
                            </Layout>
                        )
                    }
                }
               
            return (
                 <Layout style={styles.container}>
                                        <View style={styles.rowContainer}>
                                            <Text style={styles.helperText}>{data.helperText||''}</Text>
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
                                        </View>
                                    </Layout>
            )

}
const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps)(TooltipView);
