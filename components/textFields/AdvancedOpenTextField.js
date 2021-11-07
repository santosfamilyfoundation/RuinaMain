import React from 'react';
import { connect } from 'react-redux';
import { Input, Text, HStack } from 'native-base';
import { styles } from './AdvancedOpenTextField.style';
import { updateRoad } from '../../actions/RoadAction';
import * as Constants from '../../constants';
import vinValidator from 'vin-validator';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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

    const MapIcon = () => (
        <Icon name='map-outline' color='white' size={25} />
    );

    const CameraIcon = () => (
        <Icon name='camera-outline' color='white' size={25} />
    );

    const ClockIcon = () => (
        <Icon name='clock-outline' color='white' size={25} />
    );


    const RenderHeaderIcon = () => {
        switch(importFrom) {
            case "map":
                return (
                    <IconButton leftMargin={4} icon={MapIcon()} onPress={()=> onImportMapPress()}/>
                )
            case "driverIDCamera":
                return (
                    <IconButton leftMargin={4} icon={CameraIcon()} onPress={()=> onImportCameraPress()}/>
                )
            case "plateCamera":
                return (
                    <IconButton leftMargin={4} icon={CameraIcon()} onPress={()=> onImportCameraPress()}/>
                )
            case "VINCamera":
                return (
                    <IconButton leftMargin={4} icon={CameraIcon()} onPress={()=> onImportCameraPress()}/>
                )
            case "time":
                return (
                    <IconButton leftMargin={4} icon={ClockIcon()} onPress={()=> onImportTimePress()}/>
                )
        }
    }

    //Updates color status of card
    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
    }

     const HelperTooltip = () => {
            return (
                <TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>
            )
    }

    const ErrorMsg = () => {
        if(invalidLength) {
            return(
                'Too long!'
            )
        }
        if(invalidVin) {
          return(
              'Warning: Invalid VIN'
          )
        }
        return null;
    };

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <QuestionSection key={key}
                title={data.question}
                isForm
                helperText={data.helperText}
                errorMessage={ErrorMsg()}
            >
                {HelperTooltip()}
                <HStack>
                    <Input
                        placeholder='Place your Text'
                        value={value}
                        onChange={onTextChange}
                    />
                    {RenderHeaderIcon()}
                </HStack>
            </QuestionSection>
        )
    }
    else {
        return null;
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
