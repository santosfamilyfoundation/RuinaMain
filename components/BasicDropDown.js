import React, { Component } from 'react';
import { Layout, Select, Text, Card, CardHeader } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const BasicDropDown = (props) => {

  const [selectedOption, setSelectedOption] = React.useState(null);  // Need to change indexing!

  const setOption = (selection) => {
        setSelectedOption({text: selection.text});
        console.log("HERE AT SET")
    }

  const data = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' },
  ];

  return (
      <Layout style={styles.main}>
          <Select
              data={data}
              selectedOption={selectedOption}
              multiSelect={false}
              onSelect={(e) => setOption(e)}
          />
      </Layout>
    );
};

const styles = StyleSheet.create({
  main:{
    width: 200
  },
});




const mapStateToProps = (state) => {
  const { dropDownDetails } = state
  return { dropDownDetails }
};

export default connect(mapStateToProps)(BasicDropDown);
