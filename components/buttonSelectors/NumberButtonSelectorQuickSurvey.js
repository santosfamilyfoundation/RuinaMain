import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Layout, Card, CardHeader, Input } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';



const NumberButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState('');
    const {title, data, id, submitFunction, genericReducer, fieldName, updateResponse, dependencyID} = props;
    // let currId = data.id

    // if(genericReducer[fieldName] != null & selection != genericReducer[fieldName]) {
    //     setSelection(genericReducer[fieldName]);
    // }

    const submitField = (val) => {
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction(val);
    }

    const ModalContent = () => {
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
    };

        const HelperTooltip = () => {
        if (data.helperText != null && (data.tooltip != null||data.helperImg!=null)){
            return (
                <Layout style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.helperText}>{data.helperText}</Text>
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
        else if (data.helperText != null) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        else if (data.tooltip != null || data.helperImg != null) {
            return (
                <View style={styles.endRowcontainer}>
                    <Button  appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                        Info
                    </Button>
                    <Modal backdropStyle={styles.backdrop} visible={visible}>
                        <Card style={styles.content} disabled={true}>
                        {ModalContent()}
                        <Button appearance='ghost' icon={CloseIcon} onPress={() => setVisible(false)}>
                            Dismiss
                        </Button>
                        </Card>
                    </Modal>
                </View>
            )
        } else {
            return null;
        }
    }

    const InfoIcon = (props) => (
        <Icon {...props} name='info'/>
    );
    const CloseIcon = (props) => (
        <Icon {...props} name='close-outline'/>
    );

    const toggleModal = () => {
        setVisible(!visible);
    };

    const Header = () => (
        <CardHeader title={title}/>
    );

    return (
        <Card header={Header}>
            <View style={{flex: 1, flexDirection:"row"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                    <View style={styles.buttonSection}>
                        <Button style={styles.buttonStyle} appearance={(selection == '0') ? 'filled':'outline'} onPress={() => submitField('0')}>None</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '1') ? 'filled':'outline'} onPress={() => submitField('1')}>1</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '2') ? 'filled':'outline'} onPress={() => submitField('2')}>2</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '3') ? 'filled':'outline'} onPress={() => submitField('3')}>3</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '4') ? 'filled':'outline'} onPress={() => submitField('4')}>4</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '5') ? 'filled':'outline'} onPress={() => submitField('5')}>5</Button>
                    </View>
                    <View style={styles.questionInput}>
                        <Input
                            placeholder = "other"
                            onChangeText = {submitField}
                            value = {(selection > 5) ? selection:''}
                            status={(selection > 5) ? 'primary':'basic'}
                        />
                    </View>
                </ScrollView>
            </View>
        </Card>
    )
}

const mapDispatchToProps = {
    genericWriteAction
}

const mapStateToProps = (state, props) => {
    const genericReducer = state[props.reducerName]
    return { genericReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);