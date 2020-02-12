import React, { Component } from 'react';
import {
  Layout,
  Select,
  Text
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
        props.genericWriteAction({actionType:'WRITE_SELECTION', field: 'Gen1', content: selection.text})
    }

    return (
        <Layout style={styles.container}>
            <Select
                data={data}
                selectedOption={selectedOption}
                multiSelect={false}
                onSelect={(e) => setOption(e)}
            />
            <Text>Hello</Text>
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


