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
    console.log("HERE!")

    const [selectedOption, setSelectedOption] = React.useState(props.data[0]);  // Need to change indexing!
    const {data, key} = props;


    const setOption = (selection) => {
        setSelectedOption({text: selection.text});
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: data.id, content: selection.idCode})
    }

    const Header = () => (
        <CardHeader title={data.id + ': ' + data.question}/>
      );

    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status='danger'>
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


