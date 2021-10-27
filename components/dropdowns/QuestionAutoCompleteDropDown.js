import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import ImageSelector from '../image/imgIndex';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { Box, VStack, Text, IconButton } from 'native-base';
import { styles } from './AutoCompleteDropDown.style';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import Section from '../Section';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuestionAutoCompleteDropDown = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState('');   // value that will be stored in Redux
    const [title, setTitle] = React.useState('');   // value that will be displayed to user in form field
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
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
                    if(selectionData[i].text == existingData[currId]) {
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
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: value})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: value, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        submitFunction({id, question: currId, selection: value})
//        setButtonAppearance('filled');
    }

    const clearField = () => {
        setValue('');
        setTitle('');
        submitFunction({id, question: currId, selection: null})
//        setButtonAppearance('outline');
    }

    const onOptionSelect = (selection) => {
        setValue(selection.text);
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

    /*const Header = () => (
        <CardHeader title={data.question}/>
    );*/

    const renderClear = (style) => (
        <Icon name='clear'/>
    );


    if(buttonAppearance == 'outline') {
        status = 'danger'
    } else {
        status = 'success'
    }

    /*const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )*/
    
    const HelperTooltip = () => {
        return (
            <TooltipView helperText={data.helperText} toolTip={data.tooltip} helperImg={data.helperImg}/>
        )
    }
    
    /*const InfoIcon = (props) => (
        <Icon {...props} name='info'/>
    );
    const CloseIcon = (props) => (
        <Icon {...props} name='close-outline'/>
    );

    const toggleModal = () => {
        setVisible(!visible);
    };*/

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent) {
        return(
        <Box>
            <Section title={data.question}>
                <VStack>
                    {HelperTooltip()}
                    <AutocompleteDropdown
                    initialValue = "Select your value"
                    dataSet = {selectionData}
                    onChangeText = {searchItems}
                    onSelectItem = {(e) => onOptionSelect(e)}
                    showClear = {true}
                    showChevron = {false}
                    ClearIconComponent = {renderClear()}
                    />
                    <IconButton icon={CheckIcon} onPress={() => submitField()}/>
                </VStack>
            </Section>
        </Box>
        /*<Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperTooltip()}
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
        </Layout>*/
        )
    }else{
        return null
    }
};

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return {questionReducer, response }
};

export default connect(mapStateToProps)(QuestionAutoCompleteDropDown);