import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Layout, Card, CardHeader, Input } from '@ui-kitten/components';
//import { genericWriteAction } from '../../actions/GenericAction';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import TooltipView from '../Tooltip.js';
import { View } from 'react-native';
import { updateResponse } from '../../actions/StoryActions';


const NumberButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState('');
    const {data, id, submitFunction, questionReducer, fieldName, updateResponse, dependencyID} = props;

    let currId = data.id
    let status = 'danger'

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!selection) {
        if(existingData != null) {
            if(existingData[currId] != selection) {
                setSelection(existingData[currId]);
            }
        }
    }

    const submitField = (val) => {
        setSelection(val);
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: val, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: val})
        }
        submitFunction({id, question: currId, selection: val});
    }

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
    
        const HelperTooltip = () => {
                return (
                            <TooltipView helperText={data.helperText} toolTip={data.tooltip} helperImg={data.helperImg}/>
                        )
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
        <CardHeader title={data.question}/>
    );

    return (
        <Layout style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                        {HelperTooltip()}
                        <Layout style={styles.input}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>

                            <Layout style={styles.buttonSection}>
                                <Button style={styles.buttonStyle} appearance={(selection == '0') ? 'filled':'outline'} onPress={() => submitField('0')}>None</Button>
                                <Button style={styles.buttonStyle} appearance={(selection == '1') ? 'filled':'outline'} onPress={() => submitField('1')}>1</Button>
                                <Button style={styles.buttonStyle} appearance={(selection == '2') ? 'filled':'outline'} onPress={() => submitField('2')}>2</Button>
                                <Button style={styles.buttonStyle} appearance={(selection == '3') ? 'filled':'outline'} onPress={() => submitField('3')}>3</Button>
                                <Button style={styles.buttonStyle} appearance={(selection == '4') ? 'filled':'outline'} onPress={() => submitField('4')}>4</Button>
                                <Button style={styles.buttonStyle} appearance={(selection == '5') ? 'filled':'outline'} onPress={() => submitField('5')}>5</Button>
                            </Layout>
                            <Layout style={styles.questionInput}>
                                <Input
                                    placeholder = "other"
                                    onChangeText = {submitField}
                                    value = {(selection > 5) ? selection:''}
                                    status={(selection > 5) ? 'primary':'basic'}
                                />
                            </Layout>
                    </ScrollView>
                        </Layout>
                </Layout>
            </Card>
        </Layout>
    )
}

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);