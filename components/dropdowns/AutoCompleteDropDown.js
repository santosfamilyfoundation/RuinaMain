import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon, Autocomplete } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './AutoCompleteDropDown.style';


const AutoCompleteDropDown = (props) => {
    const [value, setValue] = React.useState('');   // value that will be stored in Redux
    const [title, setTitle] = React.useState('');   // value that will be displayed to user in form field
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, genericReducer, genericWriteAction} = props;
    const [selectionData, setSelectionData] = React.useState(data.answerOptions);

    let currId = data.id
    let status;

    // Populate if value already exists in redux
    if(genericReducer[currId] != null && !value) {
        for(i = 0; i < selectionData.length; i++) {
            if(selectionData[i].idCode == genericReducer[currId]) {
                setValue(genericReducer[currId]);
                setTitle(selectionData[i].title);
            };
        };
        setButtonAppearance('filled');
    }

    const submitField = () => {
        if(!value) {
            return;
        }
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: value});
        setButtonAppearance('filled');
    }

    const clearField = () => {
        setValue('');
        setTitle('');
        genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: null});
        setButtonAppearance('outline');
    }

    const onOptionSelect = (selection) => {
        setValue(selection.idCode);
        setTitle(selection.title);
        submitField();
    }

    const searchItems = (query) => {
        console.log("QUERY: ", query);
        setValue(query);
        setTitle(query);
        res = data.answerOptions.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        setSelectionData(res);
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
                        <Autocomplete
                            style={styles.inputField}
                            value={title}
                            // value={value}
                            data={selectionData}
                            placeholder='Select your value'
                            icon={renderClear}
                            onIconPress={() => clearField()}
                            onChangeText={searchItems}
                            onSelect={(e) => onOptionSelect(e)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteDropDown);