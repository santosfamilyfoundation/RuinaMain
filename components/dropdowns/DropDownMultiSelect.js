import React from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader,
  Button,
  Icon
} from '@ui-kitten/components';
import { styles } from './DropDownMultiSelect.style';
import { connect } from 'react-redux';
import { genericWriteAction } from '../../actions/GenericAction';


const DropDownMultiSelect = (props) => {
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const {data, key, genericReducer} = props;

    let currId = data.id;

    if(selectedOptions.length == 0) {
        if(genericReducer[currId] != null) {
            currOptions = []
            for (i = 0; i < data.answerOptions.length; i++) {                
                if(genericReducer[currId].includes(data.answerOptions[i].idCode)) {
                    console.log("HERE")
                    currOptions.push(data.answerOptions[i]);
                };
            };
            if(currOptions.length != 0) {
                setSelectedOptions(currOptions);
            };
        };
    };

    // Disable/enable if numOptionsAllowed reached
    if(selectedOptions.length == data.numOptionsAllowed) {
        for(i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = true;
            };
        };
    } else {
        for(i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = false;
            };
        };
    }

    const setComplete = () => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }

    const setIncomplete = () => {
        status = 'danger'
        if(buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        };
    }

    let status;
    if(!genericReducer[currId]) {
        setIncomplete();
    } else {
        let incompleteFlag = false;
        for(i = 0; i < selectedOptions.length; i++) {
            if(!genericReducer[currId].includes(selectedOptions[i])){
                incompleteFlag = true;
            }
        }
        if(incompleteFlag) {
            setIncomplete();
        } else {
            setComplete();
        }
    }

    const submitField = () => {
        if(selectedOptions.length == 0) {
            return;
        }
        res = [];
        for(i = 0; i < selectedOptions.length; i++) {
            res.push(selectedOptions[i].idCode);
        }
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: res})
    }

    const clearRedux = () => {
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: null})
    }

    const addOption = (options) => {
        if(options.length == 0) {
            clearRedux();
        }
        setSelectedOptions(options);
    }

    const Header = () => (
        <CardHeader title={data.id + ': ' + data.question}/>
      );

    const HelperText = () => {
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )


    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Layout style={styles.input}>
                        <Select
                            style={styles.inputField}
                            data={data.answerOptions}
                            selectedOption={selectedOptions}
                            multiSelect={true}
                            onSelect={addOption}
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMultiSelect);


