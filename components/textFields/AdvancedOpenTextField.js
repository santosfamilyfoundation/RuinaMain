import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './AdvancedOpenTextField.style';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';

//This component is used for "advanced" tool access (map, photo, and time)

const AdvancedOpenTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [advancedButtonAppearance, setAdvancedButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, id, questionReducer, submitFunction, pageChange, importFrom, updateRoad} = props;
    let currId = data.id
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
    if(value.length > data.maxLength && !isInvalid) {
        setIsInvalid(true);
    } else if(isInvalid && value.length <= data.maxLength) {
        setIsInvalid(false);
    }

    const onImportMapPress = () => {
      //Sends user to map tool
      let currStateVal = !reducerData?.response ? null: reducerData.response;
      pageChange('Map', {id:id, questionID:props.data.id})
      setAdvancedButtonAppearance("filled")
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
          case "VIN_Camera":
            type = Constants.VIN;
            break;
          case "Plate_Camera":
            type = Constants.PLATE;
            break;
          case "License_Camera":
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

    const CustomCardHeader = () => (
        //Displays a button for the advanced tools
        <Layout style={styles.headerObjects}>
          <Text
            style={styles.headerText}
            category='h6'
          >
            {data.question}
          </Text>
          { importFrom == "Map" ?
              <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={MapIcon} onPress={()=> onImportMapPress() }></Button>
            :
              <Layout>
              </Layout>
          }
          { (importFrom == "License_Camera" || importFrom == "Plate_Camera" || importFrom == "VIN_Camera") ?
              <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={CameraIcon} onPress={()=> onImportCameraPress() }></Button>
            :
              <Layout>
              </Layout>
          }
          { importFrom == "Time" ?
              <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={ClockIcon} onPress={()=> onImportTimePress() }></Button>
            :
              <Layout>
              </Layout>
          }
        </Layout>
    );

    //Updates color status of card
    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
    }

    const HelperText = () => {
      //Text that shows up on questions with helper text fields
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

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
