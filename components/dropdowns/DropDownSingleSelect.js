import React, { Component } from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader
} from '@ui-kitten/components';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { genericWriteAction } from '../../actions/GenericAction';

const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(props.data[0]);  // Need to change indexing!
    const {data, key, genericReducer} = props;

    const subQuestionID = data.id.split("-")[1];

    let status;
    if(!genericReducer[data.id]) {
        status = 'danger'
    } else {
        status = 'success'
    }

    const setOption = (selection) => {
        setSelectedOption({text: selection.text});
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: data.id, content: selection.idCode})
    }

    const Header = () => (
        <CardHeader title={subQuestionID + ': ' + data.question}/>
      );

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
                    <Select
                        data={data.answerOptions}
                        selectedOption={selectedOption}
                        multiSelect={false}
                        onSelect={(e) => setOption(e)}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);


