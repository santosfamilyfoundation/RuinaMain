import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { styles } from './OpenTextFieldWithSelection.style';
import { updateResponse } from '../../actions/StoryActions';
import { dependencyParser } from '../../utils/dependencyHelper';



const OpenTextFieldWithSelection = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);

    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;


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
            }
        }
    }

    const submitField = () => {
        if(!value) {
            return;
        }
        if (dependencyID!=null){
            const vehicleID = dependencyID[1] // Get vehicle id to identify different vehicles
            updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID})
        } else{
            updateResponse && updateResponse({id, question: currId, selection: value})
        }
        updateResponse && updateResponse({id, question: currId, selection: value})
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

    // const onSelectOption = () => {
    //   setValue('Uninsured');
    //   submitFunction({id, question: currId, selection: 'Uninsured'});
    //   setButtonAppearance('filled');
    // }

    const onSelectOneOption = (option) => {
      setValue(option.text);
      submitFunction({id, question: currId, selection: option.text});
      setButtonAppearance('filled');
    }

    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(existingData != null) {
        if(value != existingData[currId] && buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        }
    }

    // Input length checking
    if(value.length > data.maxLength && !isInvalid) {
        setIsInvalid(true);
    } else if(isInvalid && value.length <= data.maxLength) {
        setIsInvalid(false);
    }

    const Header = () => (
        <CardHeader title={data.question}/>
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
        if(data?.helperText?.length != 0) {
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

    const renderSingleButton = (option) => {
      let appearance = (value == option.text) ? 'filled': 'outline';
      return (
          <Button
              key={option.idCode}
              style={styles.answerButton}
              appearance={appearance}
              onPress={() => onSelectOneOption(option)}
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
                        <Layout style={styles.answers}>
                            {renderButtons()}
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
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenTextFieldWithSelection);

