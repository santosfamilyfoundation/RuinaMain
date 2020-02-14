import React from 'react';
import { connect } from 'react-redux';
import { Input, Layout, Text, Card, Button, CardHeader, Icon } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import { styles } from './OpenTextField.style';


const OpenTextField = (props) => {
  const [value, setValue] = React.useState('');
  const {data, key, genericReducer, genericWriteAction} = props;

  const Header = () => (
    <CardHeader title={data.id + ': ' + data.question}/>
  );

    let currId = data.id
    let status;
    if(!genericReducer[currId]) {
        status = 'danger'
    } else {
        status = 'success'
    }

  const CheckIcon = (style) => (
      <Icon {...style} name='checkmark-outline' />
  )

  return (
      <Layout key={key} style={styles.container}>
        <Card header={Header} status={status}>
            <Layout style={styles.content}>
                <Text style={styles.helperText}>{data.helperText}</Text>
                <Layout style={styles.input}>
                    <Input
                        style={styles.inputField}
                        placeholder='Place your Text'
                        value={value}
                        onChangeText={setValue}
                    />
                    <Button 
                        style={styles.submitButton} 
                        size='medium' 
                        icon={CheckIcon} 
                        onPress={() => genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: value})}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenTextField);