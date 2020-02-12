import React, { Component } from 'react';
import {
  Layout,
  Select,
  Text,
  Card
} from '@ui-kitten/components';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { genericWriteAction } from '../../actions/GenericAction';

const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(props.data[0]);  // Need to change indexing!
    const {data} = props;

    console.log(data)

    const setOption = (selection) => {
        setSelectedOption({text: selection.text});
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: data.id, content: selection.idCode})
    }

    return (
        <Layout style={styles.container}>
            <Card>
                <Layout style={styles.headingText}>
                    <Text category="h6">{data.id}: <Text category="s1">{data.question}</Text></Text>
                </Layout>
                <Layout style={styles.content}>
                    <Text style={styles.helperText}>{data.helperText}</Text>
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


