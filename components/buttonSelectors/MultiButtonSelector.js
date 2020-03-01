import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon, ButtonGroup } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './MultiButtonSelector.style';


const MultiButtonSelector = (props) => {
    const [selection, setSelection] = React.useState('');
    const {data, key, genericReducer, genericWriteAction} = props;

    let currId = data.id
    let status;

    if(genericReducer[currId] != null && selection != genericReducer[currId]) {
        setSelection(genericReducer[currId]);
    };

    const submitField = (idCode) => {
        setSelection(idCode);
        genericWriteAction({actionType:"WRITE_SELECTION", field: data.id, content: idCode})
    }
    
    const Header = () => (
        <CardHeader title={data.question}/>
    );

    if(!genericReducer[currId]) {
        status = 'danger'
    } else {
        status = 'success'
    }

    // const CheckIcon = (style) => (
    //     <Icon {...style} name='checkmark-outline' />
    // )
    // const CrossIcon = (style) => (
    //     <Icon {...style} name='close-outline' />
    // )
    // const QuestionMarkIcon = (style) => (
    //     <Icon {...style} name='question-mark-outline' />
    // )

    const HelperText = () => {
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

    const renderSingleButton = (option) => {
        let appearance = (selection == option.idCode) ? 'filled': 'outline';
        return (
            <Button
                key={option.idCode}
                style={styles.answerButton}
                appearance={appearance}
                onPress={() => submitField(option.idCode)}
            >
                {option.idCode} {option.text}
            </Button>
        )
    }

    const renderButtons = () => {
        let res = data.answerOptions.map(option => (renderSingleButton(option)));
        return (
            res
        );
    }

    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Layout style={styles.input}>
                        <Layout style={styles.answers}>
                            {renderButtons()}
                        </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(MultiButtonSelector);