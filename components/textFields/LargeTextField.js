import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './LargeTextField.style';


const LargeTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [isInvalid, setIsInvalid] = React.useState(false);
    const {data, key, genericReducer, genericWriteAction} = props;

    let currId = data.id
    let status;

    // Populate if value already exists in redux
    if(genericReducer[currId] != null && !value) {
        setValue(genericReducer[currId]);
        setButtonAppearance('filled');
    }

    const submitField = () => {
        if(!value) {
            return;
        }
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: value});
        setButtonAppearance('filled');
    }

    const onTextChange = (text) => {
        if(!text) {
            genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: null});
        }
        setValue(text);
    }

    const clearField = () => {
        setValue('');
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: null});
        setButtonAppearance('outline');
    }

    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(value != genericReducer[currId] && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    }

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
        if(data.helperText != null) {
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
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Layout style={styles.input}>
                        <Input
                            style={styles.inputField}
                            multiline={true}
                            maxLength={data.maxLength}
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
    genericWriteAction
}

const mapStateToProps = (state) => {
    const { story, genericReducer } = state
    return { story, genericReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(LargeTextField);