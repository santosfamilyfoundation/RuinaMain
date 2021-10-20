import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { Layout, Text, Card, Button, Modal, CardHeader, Icon, Autocomplete } from '@ui-kitten/components';
import { styles } from './AutoCompleteDropDown.style';
import { dependencyParser } from '../../utils/dependencyHelper';


const AutoCompleteDropDown = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState('');   // value that will be stored in Redux
    const [title, setTitle] = React.useState('');   // value that will be displayed to user in form field
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
    const [selectionData, setSelectionData] = React.useState(data.answerOptions);

    let status;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                for(i = 0; i < selectionData.length; i++) {
                    if(selectionData[i].text == existingData[currId]) {
                        setValue(existingData[currId]);
                        setTitle(selectionData[i].title);
                    };
                };
                setButtonAppearance('filled');
            }
        }
    }

    const submitField = () => {
        if(!value) {
            return;
        }
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: value})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        submitFunction({id, question: currId, selection: value})
        setButtonAppearance('filled');
    }

    const clearField = () => {
        setValue('');
        setTitle('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

    const onOptionSelect = (selection) => {
        setValue(selection.text);
        setTitle(selection.title);
        submitField();
    }

    const searchItems = (query) => {
        setValue(query);
        setTitle(query);
        let res = data.answerOptions.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        setSelectionData(res);
    }


    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(existingData != null) {
        if(value != existingData[currId] && buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        }
    }

    const Header = () => (
        <CardHeader title={data.question}/>
    );

    const renderClear = (style) => (
        <Icon {...style} name='close-outline'/>
    );


    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
    }

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )

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
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperTooltip()}
                    <Layout style={styles.input}>
                        <Autocomplete
                            style={styles.inputField}
                            value={title}
                            // value={value}
                            data={selectionData}
                            placeholder='Select your value'
                            icon={renderClear}
                            onIconPress={() => clearField()}
                            onChangeText={searchItems}
                            onSelect={(e) => onOptionSelect(e)}
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

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return {questionReducer, response }
};

export default connect(mapStateToProps)(AutoCompleteDropDown);
