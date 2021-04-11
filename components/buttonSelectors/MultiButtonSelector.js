import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import ImageSelector from '../image/imgIndex';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './MultiButtonSelector.style';


const MultiButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction, updateResponse} = props;

    let currId = data.id
    let status = 'danger';

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    if(props.response != null) { 
        if (data.questionDependency != null){
            let tarQuesArr = data.questionDependency
            for(let i = 0; i <tarQuesArr.length; i++){
                let tarUid = tarQuesArr[i].dependencyUid
                let tarOptionCode = tarQuesArr[i].dependencyOptionCode
                for (let j = props.response.length-1; j >= 0; j--){
                    if (props.response[j].selection == tarOptionCode) {break}
                    if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode){
                        return null
                    }
                }
            }

        }
    };

    // Populate if value already exists in redux
    if(!selection) {
        if(existingData != null) {
            if(existingData[currId] != selection) {
                setSelection(existingData[currId]);
            }
        }
    }


    const submitField = (optionText, idCode) => {
        setSelection(optionText);
        updateResponse && updateResponse({id, question: currId, selection: idCode})
        submitFunction({id, question: currId, selection: optionText})

    }

    const Header = () => (
        <CardHeader title={data.question}/>
    );

    if(!existingData) {
        status = 'danger'
    } else {
        if(!existingData[currId]) {
            status = 'danger';
        } else if(existingData[currId] != selection) {
            status = 'danger'
        } else {
            status = 'success'
        }
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
        if (data.helperText != null && data.tooltip != null){
            return (
                <Layout style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.helperText}>{data.helperText}</Text>
                        <Modal
                            backdropStyle={styles.backdrop}
                            visible={visible}
                            content={ModalContent()}
                            onBackdropPress={toggleModal}>
                            <Button appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                                More Info
                            </Button>
                        </Modal>
                    </View>
                </Layout>
            )
        }
        else if (data.helperText != null) {
            return (<Text style={styles.helperTextOnly}>{data.helperText}</Text>)
        }
        else if (data.tooltip != null) {
            return (
                <View style={styles.endRowcontainer}>
                    <Button  appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                        More Info
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

    const renderSingleButton = (option) => {
        let appearance = (selection == option.text) ? 'filled': 'outline';
        return (
            <Button
                key={option.idCode}
                style={styles.answerButton}
                appearance={appearance}
                onPress={() => submitField(option.text, option.idCode)}
            >
                {option.text}
            </Button>
        )
    }

    const renderButtons = () => {
        let res = data.answerOptions.map(option => (renderSingleButton(option)));
        return (
            res
        );
    }

    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperTooltip()}
                    <Layout style={styles.input}>
                        <Layout style={styles.answers}>
                            {renderButtons()}
                        </Layout>
                    </Layout>
                </Layout>
            </Card>
        </Layout>
    );
};

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};


export default connect(mapStateToProps, mapDispatchToProps)(MultiButtonSelector);

