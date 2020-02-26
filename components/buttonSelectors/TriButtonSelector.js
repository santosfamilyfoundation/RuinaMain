import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon, ButtonGroup } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './TriButtonSelector.style';


const TriButtonSelector = (props) => {
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
        <CardHeader title={data.id + ': ' + data.question}/>
    );

    if(!genericReducer[currId]) {
        status = 'danger'
    } else {
        status = 'success'
    }

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )
    const CrossIcon = (style) => (
        <Icon {...style} name='close-outline' />
    )
    const QuestionMarkIcon = (style) => (
        <Icon {...style} name='question-mark-outline' />
    )

    const HelperText = () => {
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

    const NoButton = () => {
        let appearance = (selection == '01') ? 'filled': 'outline';
        return (
            <Button
                style={styles.answerButton}
                appearance={appearance}
                icon={CrossIcon}
                onPress={() => submitField('01')}
            >
                01 No
            </Button>
        )
    }
    const YesButton = () => {
        let appearance = (selection == '02') ? 'filled': 'outline';
        return (
            <Button
                style={styles.answerButton}
                appearance={appearance}
                icon={CheckIcon}
                onPress={() => submitField('02')}
            >
                02 Yes
            </Button>
        )
    }
    const UnknownButton = () => {
        let appearance = (selection == '99') ? 'filled': 'outline';
        return (
            <Button
                size='medium'
                appearance={appearance}
                icon={QuestionMarkIcon}
                onPress={() => submitField('99')}
            >
                99 Unknown
            </Button>
        )
    }

    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Layout style={styles.input}>
                        <Layout style={styles.answers}>
                            {NoButton()}
                            {YesButton()}
                        </Layout>
                        {UnknownButton()}
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

export default connect(mapStateToProps, mapDispatchToProps)(TriButtonSelector);