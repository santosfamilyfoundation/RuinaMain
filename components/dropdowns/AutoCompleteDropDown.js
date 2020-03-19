import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Card, Button, CardHeader, Icon, Autocomplete } from '@ui-kitten/components';
import { styles } from './AutoCompleteDropDown.style';


const AutoCompleteDropDown = (props) => {
    const [value, setValue] = React.useState('');   // value that will be stored in Redux
    const [title, setTitle] = React.useState('');   // value that will be displayed to user in form field
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction} = props;
    const [selectionData, setSelectionData] = React.useState(data.answerOptions);
    
    let status;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;

    // Populate if value already exists in redux
    if(!value) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                for(i = 0; i < selectionData.length; i++) {
                    if(selectionData[i].idCode == existingData[currId]) {
                        setValue(existingData[currId]);
                        setTitle(selectionData[i].title);
                    };
                };
                setButtonAppearance('filled');
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

    const clearField = () => {
        setValue('');
        setTitle('');
        submitFunction({id, question: currId, selection: null})
        setButtonAppearance('outline');
    }

    const onOptionSelect = (selection) => {
        setValue(selection.idCode);
        setTitle(selection.title);
        submitField();
    }

    const searchItems = (query) => {
        setValue(query);
        setTitle(query);
        let res = data.answerOptions.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        setSelectionData(res);
    }


    if(!value && buttonAppearance != 'outline') {
        setButtonAppearance('outline');
    } else if(existingData != null) {
        if(value != existingData[currId] && buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        }
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

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps)(AutoCompleteDropDown);