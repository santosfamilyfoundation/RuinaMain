import React from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader,
  Button,
  Modal,
  Icon
} from '@ui-kitten/components';

import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownMultiSelect.style';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';


const DropDownMultiSelect = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;

    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    // Populate if value already exists in redux
    if(selectedOptions.length == 0) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let currOptions = []
                for (i = 0; i < data.answerOptions.length; i++) {
                    if(existingData[currId].includes(data.answerOptions[i].text)) {
                        currOptions.push(data.answerOptions[i]);
                    };
                };
                if(currOptions.length != 0) {
                    setSelectedOptions(currOptions);
                };
            };
        }
    };

    // Disable/enable if numOptionsAllowed reached
    if(selectedOptions.length == data.numOptionsAllowed) {
        for(let i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = true;
            };
        };
    } else {
        for(let i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = false;
            };
        };
    }

    const setComplete = () => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }

    const setIncomplete = () => {
        status = 'danger'
        if(buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        };
    }

    // Determine submission status
    let status;
    if(!existingData) {
        setIncomplete();
    } else {
        if(!existingData[currId]) {
            setIncomplete();
        } else {
            let incompleteFlag = false;
            for(let i = 0; i < selectedOptions.length; i++) {
                if(!existingData[currId].includes(selectedOptions[i].text)){
                    incompleteFlag = true;
                }
            }
            if (selectedOptions.length < existingData[currId].length) {
                incompleteFlag = true;
            }
            if(incompleteFlag) {
                setIncomplete();
            } else {
                setComplete();
            }
        }
    }
    const submitField = () => {
        if(selectedOptions.length == 0) {
            return;
        }
        let res = [];
        for(i = 0; i < selectedOptions.length; i++) {
            res.push(selectedOptions[i].text);
        }
        let resId = []
        for(i = 0; i < selectedOptions.length; i++) {
            resId.push(selectedOptions[i].idCode);
        }
        
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: resId})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: resId, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        submitFunction({id, question: currId, selection: res})
    }

    const clearRedux = () => {
        submitFunction({id, question: currId, selection: null})
    }

    const addOption = (options) => {
        if(options.length == 0) {
            clearRedux();
        }
        setSelectedOptions(options);
    }

    const Header = () => (
        <CardHeader title={data.question}/>
      );

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

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )
    
    const checkOptionCode = (entry, target) => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }
    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <Layout key={key} style={styles.container}>
                <Card header={Header} status={status}>
                    <Layout style={styles.content}>
                        {HelperTooltip()}
                        <Layout style={styles.input}>
                            <Select
                                style={styles.inputField}
                                data={data.answerOptions}
                                selectedOption={selectedOptions}
                                multiSelect={true}
                                onSelect={addOption}
                            />
                        </Layout>
                    </Layout>
                </Card>
            </Layout>
        )
    }else{
        return null
    }
};

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMultiSelect);
