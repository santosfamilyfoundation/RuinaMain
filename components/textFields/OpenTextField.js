import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './OpenTextField.style';


const OpenTextField = (props) => {
    const [value, setValue] = React.useState('');
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, genericReducer, genericWriteAction} = props;

    let currId = data.id
    let status;

    if(genericReducer[currId] != null && value != genericReducer[currId]) {
        setValue(genericReducer[currId]);
        setButtonAppearance('filled');
    }

    const submitField = () => {
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: value});
        setButtonAppearance('filled');
    }

    const clearField = () => {
        setValue('');
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: ''});
        setButtonAppearance('outline');
    }

    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(value != genericReducer[currId] && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    }

    const Header = () => (
        <CardHeader title={data.id + ': ' + data.question}/>
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

    return (
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
                            onChangeText={setValue}
                        />
                        <Button 
                            style={styles.submitButton} 
                            appearance={buttonAppearance}
                            size='medium' 
                            icon={CheckIcon} 
                            onPress={() => submitField()}
                        />
                    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenTextField);