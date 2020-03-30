import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Select,
} from '@ui-kitten/components';

export const DropDownQuestion = (props) => {

  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <Layout style={styles.container}>
      <Select
        data={props.data}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 228,
    minWidth: 400,
  },
});