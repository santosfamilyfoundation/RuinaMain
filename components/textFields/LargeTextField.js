import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { Input, Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './LargeTextField.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip.js';


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

    const debounceValidation = (func, timeout) => {
    let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
    //do a use ref: gives back an object, can set current field to a value and the value will be
    //on the next rerender


//    const processChange = debounceValidation((text) => validateInput(text), 10000);

    const validateInput = (text) => {
          console.log('this is where text goes: ', text)
//          setValue(text)
          console.log('this is where value goes: ', value)
          submitFunction({id, question: currId, selection: null})
          if(!value){
            console.log('this sucks')
            return;
          }
          if(value.length <= 500) {
              console.log('Fuck Jack Mao')
//              status = 'success'
              setButtonAppearance('filled')
          }
          else{
            console.log('made it to else')
            status = 'danger'
            setButtonAppearance('outline')
          }


    }
    const submitField = (text) => {
        const processChange = debounceValidation((text) => validateInput(text), 500);
        if(!text) {
            return;
        }
        console.log('please work')
        processChange(text);
    }

    const onTextChange = (text) => {
        console.log('this is text',text)
        if(!text) {
            submitFunction({id, question: currId, selection: null})
        }
        submitField(text)
        setValue(text);
        submitFunction({id, question: currId, selection: null})
        console.log('This is value: ', value)
    }

    const clearField = () => {
        console.log('is it even reaching here')
        setValue('');
        submitFunction({id, question: currId, selection: null})
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
                            value={value}
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