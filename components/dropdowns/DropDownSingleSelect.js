import React from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader,
  Modal,
  Icon,
  Button
} from '@ui-kitten/components';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';

const DropDownSingleSelect = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id); 
    let existingData = !reducerData?.response ? null : reducerData.response;

    if(!selectedOption) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(data.answerOptions[i].text == existingData[currId]) {
                        curOption = {
                            idCode: existingData[currId],
                            text: data.answerOptions[i].text
                        };
                    };
                };
                if (curOption != null) {
                    setSelectedOption(curOption);
                }
            };
        };
    };

    let status;
    if(!existingData) {
        status = 'danger'
    } else {
        if(!existingData[currId]) {
            status = 'danger';
        } else {
            status = 'success';
        }
    }

    const submitField = (selection) => {
        setSelectedOption(selection);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: selection.idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        let content = selection.text;
        submitFunction({id, question: currId, selection: content})
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

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <Layout key={key} style={styles.container} >
                <Card header={Header} status={status}>
                    <Layout style={styles.content}>
                        {HelperTooltip()}
                        <Select
                            data={data.answerOptions}
                            selectedOption={selectedOption}
                            multiSelect={false}
                            onSelect={(e) => submitField(e)}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);
