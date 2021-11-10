import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { Input, Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './LargeTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip.js';
import TextFieldValidation from '../../utils/TextFieldValidation.js';


const LargeTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, dependencyID} = props;



    let currId = data.id
    let status

    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    if(props.response != null) { 
        if (data.questionDependency != null){
            let tarQuesArr = data.questionDependency
            for(let i = 0; i <tarQuesArr.length; i++){ // Looping through dependent question
                let tarUid = tarQuesArr[i].dependencyUid
                let tarOptionCode = tarQuesArr[i].dependencyOptionCode
                for (let j = props.response.length-1; j >= 0; j--){
                    if (props.response[j].selection == tarOptionCode) {break}
                    if (typeof props.response[j].selection == "array"){
                        let resArr = props.response[j].selection.find(item => item != tarOptionCode)
                        if (resArr.length === props.response[j].selection.length){return null}
                    }
                    if (props.response[j].question === tarUid && props.response[j].selection != tarOptionCode){
                        return null
                    }
                }
            }
        }
    };
    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);
                setButtonAppearance('filled');
            }
        }
    }
//    console.log(existingData[currId])
//
//    const debounceValidation = (func, timeout) => {
//    let timer;
//      return (...args) => {
//        clearTimeout(timer);
//        timer = setTimeout(() => { func.apply(this, args); }, timeout);
//      };
//    }
//
//
//    const validateInput = (text) => {
//          if(!text){
//            return;
//          }
//          if(text.length <= 500) {
//              setButtonAppearance('filled')
//          }
//          else{
//            setButtonAppearance('outline')
//          }
//
//
//    }
//    const submitField = (text) => {
//        const processChange = debounceValidation((text) => validateInput(text), 500);
//        if(!text) {
//            return;
//        }
//        processChange(text);
//    }


// something like 'textFieldValidation = new TextFieldValidation'
// something like 'if(textFieldValidation.submitField(localText){ setButtonAppearance('outline') } )'
     const onTextChange = (text) => {
        console.log('this is text',text)
        var localText = text
        submitFunction({id, question: currId, selection: localText})
        if(!text) {
              setButtonAppearance('outline')
        }
        textFieldValidation = TextFieldValidation
        textFieldValidation.submitField(localText);
        var localStatus = textFieldValidation.status
        console.log("localstatus ", localStatus)
        if (localStatus) {
        setButtonAppearance('filled')
        }
        else {
        setButtonAppearance('outline')
        }

//        submitField(localText)
    }

    const clearField = () => {
        console.log('is it even reaching here')
        submitFunction({id, question: currId, selection: null})
        setValue(existingData[currId])
        setButtonAppearance('outline');
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
                            multiline={true}
                            maxLength={data.maxLength}
                            icon={renderClear}
                            onIconPress={() => clearField()}
                            placeholder='Place your Text'
                            value = {existingData[currId]}
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

export default connect(mapStateToProps)(LargeTextField);