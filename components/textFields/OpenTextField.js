import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './OpenTextField.style';

const OpenTextField = (props) => {
  const [value, setValue] = React.useState('');
  const {data} = props;

  return (
      <Layout style={styles.container}>
        <Card>
            <Layout style={styles.headingText}>
                <Text category="h6">{data.id}: <Text category="s1">{data.question}</Text></Text>
            </Layout>
            <Layout style={styles.content}>
                <Text style={styles.helperText}>{data.helperText}</Text>
                <Input
                    style={styles.inputField}
                    placeholder='Place your Text'
                    value={value}
                    onChangeText={setValue}
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenTextField);