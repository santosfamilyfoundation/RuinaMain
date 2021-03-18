import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon, ListItem, CheckBox } from '@ui-kitten/components';
import { styles } from './AdvancedOpenTextField.style';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';
import vinValidator from 'vin-validator';

//This component is used for "advanced" tool access (map, photo, VIN, and time)

const AdvancedOpenTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [advancedButtonAppearance, setAdvancedButtonAppearance] = React.useState('outline');
    const [invalidLength, setInvalidLength] = React.useState(false);
    const [invalidVin, setInvalidVin] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, pageChange, importFrom, updateRoad} = props;
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
          case "V1":
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
        pageChange('Scan', {objectID:id, type:type})

      }
    };

    const onImportTimePress = () => {
      //Gets the current date and time for user and autofills question
      if(advancedButtonAppearance == "filled"){
        clearField();
        setAdvancedButtonAppearance("outline");
      }else{
        setAdvancedButtonAppearance("filled")
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        let fullDate = year.toString() + month.toString() + date.toString() + hours.toString() + min.toString();
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

    const HelperText = () => {
      //Text that shows up on questions with helper text fields
        if(data?.helperText?.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

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
            <Text>
              Warning: Invalid VIN
            </Text>
          )
        }
        return null;
    };

    return (
        <Layout key={key} style={styles.container}>
            <Card status={status} header={CustomCardHeader}>
                <Layout style={styles.content}>
                    {HelperText()}
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
    );
};

const mapDispatchToProps = {
  updateRoad
}

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedOpenTextField);
