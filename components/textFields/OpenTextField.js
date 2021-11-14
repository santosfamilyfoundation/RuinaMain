import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { Input, Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './OpenTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip.js';
import TextFieldValidation from '../../utils/TextFieldValidation.js';


const OpenTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, dependencyID} = props;



    let currId = data.id
    let status

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);
                setButtonAppearance('filled');
            }
        }
    }

     const onTextChange = (text) => {
        console.log('this is text',text)
        var localText = text
        submitFunction({id, question: currId, selection: localText})
        if(!text) {
              setButtonAppearance('outline')
        }
        textFieldValidation = TextFieldValidation
        console.log('it breaks after the definition but before the submitField')
        textFieldValidation.submitField(localText);
        var localStatus = textFieldValidation.status
        console.log("localstatus ", localStatus)
        if (localStatus) {
        setButtonAppearance('filled')
        }
        else {
        setButtonAppearance('outline')
        }
    }

    const clearField = () => {
        submitFunction({id, question: currId, selection: null})
        console.log('sadly, it was this one')
        setValue(existingData[currId])
        setButtonAppearance('outline');
    }

    const valueSet = (currId) => {
        try {if (existingData[currId] != null){
            return existingData[currId]
        }
        }
        catch(err)
        {
        return null
        }
    }

    const Header = () => (
        <CardHeader title={data.question}/>
    );

    const renderClear = (style) => (
        <Icon {...style} name='close-outline'/>
    );

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )

    const CloseIcon = (style) => {
    <Icon {...style} name='checkmark-outline' />
    }

        const HelperTooltip = () => {
                     return (
                                 <TooltipView helperText={data.helperText} toolTip={data.tooltip} helperImg={data.helperImg}/>
                             )
                 }

    const InfoIcon = (props) => (
        // <Image source={require('../image/test.jpg')} style={styles.img}/>
        <Icon {...props} name='info'/>
    );


    const toggleModal = () => {
        setVisible(!visible);
    };

    const ErrorMsg = () => {
        if(isInvalid) {
            return(
                <Text>
                    Too long!
                </Text>
            )
        }
        return null;
    };

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    //use let or const, not var
    if (renderComponent){
        return(
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperTooltip()}
                    <Layout style={styles.input}>
                        <Input
                            style={styles.inputField}
                            multiline={false}
                            maxLength={data.maxLength}
                            icon={renderClear}
                            onIconPress={() => clearField()}
                            placeholder='Place your Text'
                            value = {valueSet(currId)}
                            onChangeText={(text) => onTextChange(text)}
                        />
                        <Button
                            style={styles.submitButton}
                            appearance={buttonAppearance}
                            size='medium'
                            icon={CheckIcon}
                            onPress={() => submitField()}
                        />
                    </Layout>
                    {ErrorMsg()}
                </Layout>
            </Card>
        </Layout>
        )
    }else{
        return null
    }
};

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps)(OpenTextField);