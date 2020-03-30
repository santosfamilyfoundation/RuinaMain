import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './AdvancedOpenTextField.style';
import { updateRoad } from '../../actions/RoadAction';

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
        if(!value) {
            return;
        }
        submitFunction({id, question: currId, selection: value})
        setButtonAppearance('filled');
    }

    const onTextChange = (text) => {
        if(!text) {
            submitFunction({id, question: currId, selection: null})
        }
        setValue(text);
    }

    const clearField = () => {
        setValue('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

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
      let currStateVal = !reducerData?.response ? null: reducerData.response;
      // if(Object.keys(reducerData.response).length == 0){
      //   pageChange('Map', {id:id, question:"THIS QUESTION"})
      // }

      pageChange('Map', {id:id, question:"THIS QUESTION"})
      setAdvancedButtonAppearance("filled")
    };

    const onImportCameraPress = () => {
      let currStateVal = !reducerData?.response ? null: reducerData.response;
      pageChange('Camera', {id:id, question:"THIS QUESTION"})
      setAdvancedButtonAppearance("filled")
    };

    const onImportTimePress = () => {
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

    const MapIcon = (style) => (
        <Icon {...style} name='map-outline'  />
    );

    const CameraIcon = (style) => (
        <Icon {...style} name='camera-outline'  />
    );

    const ClockIcon = (style) => (
        <Icon {...style} name='clock-outline'  />
    );

    const CustomCardHeader = () => (
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
          { importFrom == "Camera" ?
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


    const Header = () => (
        <CardHeader title={data.question} icon={MapIcon}/>
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

    const HelperText = () => {
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

    //const latValueFromMap = props.mapReducer.markers.length ? String(props.mapReducer.markers[0].coordinate.latitude) : null;
    //const currValue = latValueFromMap ? latValueFromMap : value;

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
