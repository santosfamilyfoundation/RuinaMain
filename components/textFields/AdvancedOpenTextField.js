import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, Modal, CardHeader, Icon, ListItem, CheckBox } from '@ui-kitten/components';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { styles } from './AdvancedOpenTextField.style';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';
import vinValidator from 'vin-validator';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip.js';

//This component is used for "advanced" tool access (map, photo, VIN, and time)

const AdvancedOpenTextField = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [advancedButtonAppearance, setAdvancedButtonAppearance] = React.useState('outline');
    const [invalidLength, setInvalidLength] = React.useState(false);
    const [invalidVin, setInvalidVin] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, pageChange, importFrom, updateRoad, dependencyID} = props;
    let currId = data.id;
    let status;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null: reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null && !value) {
                setValue(existingData[currId]);
                setButtonAppearance('filled');
                setAdvancedButtonAppearance("filled")
            }
        }
    }

    const submitField = () => {
      //submits data to reducer and is shown as complete
        if(!value) {
            return;
        }
        submitFunction({id, question: currId, selection: value})
        switch(currId) {
          case "Bw7d2KTr": // VIN question id
            if (!vinValidator.validate(value)) {
              setInvalidVin(true);
            } else {
              setInvalidVin(false);
            }
            break;
          default:
            break;
        }
        ErrorMsg();
        setButtonAppearance('filled');
    }

    const onTextChange = (text) => {
        //Updated the reducer when user types
        if(!text) {
            submitFunction({id, question: currId, selection: null})
        }
        setValue(text);
    }

    const clearField = () => {
        // Resets the question field
        setValue('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

    // Update the fill of the check button to show completeness
    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(existingData != null) {
        if(value != existingData[currId] && buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        }
    }

    // checking if response length is valid
    // currently no questions use this, but could be added in the future
    if(value.length > data.maxLength && !invalidLength) {
        setInvalidLength(true);
    } else if(invalidLength && value.length <= data.maxLength) {
        setInvalidLength(false);
    }

    const onImportMapPress = () => {
      //Sends user to map tool
      let currStateVal = !reducerData?.response ? null: reducerData.response;

      if(advancedButtonAppearance == "filled"){
        clearField();
        setAdvancedButtonAppearance("outline");
      }else{
        setAdvancedButtonAppearance("filled")
        pageChange('Map', {id:id, questionID:props.data.id})
      }
    };

    const onImportCameraPress = () => {
      //Sends user to camera tool (for VIN, LISCENSE PLATE, or DRIVERS LISCENSE photo)
      if(advancedButtonAppearance == "filled"){
        clearField();
        setAdvancedButtonAppearance("outline");
      }else{
        setAdvancedButtonAppearance("filled")
        let type
        switch(importFrom) {
          case "VINCamera":
            type = Constants.VIN;
            break;
          case "plateCamera":
            type = Constants.PLATE;
            break;
          case "driverIDCamera":
            type = Constants.LICENSE
            break;
          default:
            type = Constants.VIN;
        }
        pageChange('Scan', {objectID:id, type:type, questionId:currId,
          questionReducer:questionReducer})

      }
    };

    const onImportTimePress = () => {
      //Gets the current date and time for user and autofills question
      if(advancedButtonAppearance == "filled"){
        clearField();
        setAdvancedButtonAppearance("outline");
      }else{
        setAdvancedButtonAppearance("filled")
        let now = new Date();
        let year = (now.getFullYear()).toString();
        let month = ((now.getMonth() + 1)).toString();
        let date = (now.getDate()).toString();
        let hours = (now.getHours()).toString();
        let min = (now.getMinutes()).toString();
        let fullDate = year + "/" +  month + "/" + date + "\t" + hours + ":" + min;;
        updateRoad({id, question:data.id, selection: fullDate });
      }
    };

    //Icons from Eva Icons: https://akveo.github.io/eva-icons/#/

    const MapIcon = (style) => (
        <Icon {...style} name='map-outline'  />
    );

    const CameraIcon = (style) => (
        <Icon {...style} name='camera-outline'  />
    );

    const ClockIcon = (style) => (
        <Icon {...style} name='clock-outline'  />
    );

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    );

    const renderClear = (style) => (
        <Icon {...style} name='close-outline'/>
    );

    const RenderHeaderIcon = () => {
        switch(importFrom) {
            case "map":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={MapIcon} onPress={()=> onImportMapPress() }></Button>
                )
            case "driverIDCamera":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={CameraIcon} onPress={()=> onImportCameraPress() }></Button>
                )
            case "plateCamera":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={CameraIcon} onPress={()=> onImportCameraPress() }></Button>
                )
            case "VINCamera":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={CameraIcon} onPress={()=> onImportCameraPress() }></Button>
                )
            case "time":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={ClockIcon} onPress={()=> onImportTimePress() }></Button>
                )
        }
    }

    const CustomCardHeader = () => {
        return (
            <CardHeader
                title={data.question}
                accessory={RenderHeaderIcon}
            />
        )
    }

    //Updates color status of card
    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
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
                    <TooltipView data={data} />
                )
            }
            else if (data.helperText != null) {
                return (<Text style={styles.helperText}>{data.helperText}</Text>)
            }
            else if (data.tooltip != null || data.helperImg != null) {
                return (
                    <TooltipView data={data} />
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

    const ErrorMsg = () => {
        if(invalidLength) {
            return(
                <Text>
                    Too long!
                </Text>
            )
        }
        if(invalidVin) {
          return(
            <Text style={{color:'red'}}>
              Warning: Invalid VIN
            </Text>
          )
        }
        return null;
    };

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <Layout key={key} style={styles.container}>
                <Card status={status} header={CustomCardHeader}>
                    <Layout style={styles.content}>
                        {HelperTooltip()}
                        <Layout style={styles.input}>
                            <Input
                                style={styles.inputField}
                                icon={renderClear}
                                onIconPress={() => clearField()}
                                placeholder='Place your Text'
                                value={value}
                                onChangeText={onTextChange}
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

const mapDispatchToProps = {
  updateRoad
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedOpenTextField);
