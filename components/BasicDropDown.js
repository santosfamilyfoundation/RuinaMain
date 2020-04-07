import React, { Component } from 'react';
import { Layout, Select, Text, Card, CardHeader } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const BasicDropDown = (props) => {

  const [selectedOption, setSelectedOption] = React.useState(null);  // Need to change indexing!

  const setOption = (selection) => {
        props.selectFunction(selection.text);
        setSelectedOption({text: selection.text});
    }

  return (
      <Layout style={styles.main}>
          <Select
              data={props.data}
              selectedOption={selectedOption}
              multiSelect={false}
              onSelect={(e) => setOption(e)}
              placeholder={props.defaultOption}
              disabled={props.isDisabled}
          />
      </Layout>
    );
};

const styles = StyleSheet.create({
  main:{
    margin: 10,
    minWidth: '50%'
  },
});

const mapStateToProps = (state) => {
  const { dropDownDetails } = state
  return { dropDownDetails }
};

export default connect(mapStateToProps)(BasicDropDown);
