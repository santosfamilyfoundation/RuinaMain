import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import ImageSelector from '../image/imgIndex';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './MultiButtonSelector.style';
import TooltipView from '../Tooltip.js';
import { dependencyParser } from '../../utils/dependencyHelper';


const MultiButtonSelector = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;

    let currId = data.id
    let status = 'danger';

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


    const submitField = (optionText, idCode) => {
        setSelection(optionText);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
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

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
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
    return { questionReducer, response}
};


export default connect(mapStateToProps, mapDispatchToProps)(MultiButtonSelector);
