import React from 'react';
import { connect } from 'react-redux';
import { Button, Text, Layout, Card, CardHeader, Input } from '@ui-kitten/components';
import { genericWriteAction } from '../../actions/GenericAction';
import {styles} from './NumberButtonSelector.style'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';



const NumberButtonSelector = (props) => {
    const [selection, setSelection] = React.useState('');
    const {title, submitFunction, genericReducer, fieldName} = props;

    // if(genericReducer[fieldName] != null & selection != genericReducer[fieldName]) {
    //     setSelection(genericReducer[fieldName]);
    // }

    const submitField = (val) => {
        setSelection(val);
        submitFunction(val);
    }


    const Header = () => (
        <CardHeader title={title}/>
    );

    return (
        <Card header={Header}>
            <View style={{flex: 1, flexDirection:"row"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.container}>
                    <View style={styles.buttonSection}>
                        <Button style={styles.buttonStyle} appearance={(selection == '0') ? 'filled':'outline'} onPress={() => submitField('0')}>None</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '1') ? 'filled':'outline'} onPress={() => submitField('1')}>1</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '2') ? 'filled':'outline'} onPress={() => submitField('2')}>2</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '3') ? 'filled':'outline'} onPress={() => submitField('3')}>3</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '4') ? 'filled':'outline'} onPress={() => submitField('4')}>4</Button>
                        <Button style={styles.buttonStyle} appearance={(selection == '5') ? 'filled':'outline'} onPress={() => submitField('5')}>5</Button>
                    </View>
                    <View style={styles.questionInput}>
                        <Input 
                            placeholder = "other"
                            onChangeText = {submitField}
                            value = {(selection > 5) ? selection:''}
                            status={(selection > 5) ? 'primary':'basic'}
                        />
                    </View>
                </ScrollView>
            </View>
        </Card>
    )
}

const mapDispatchToProps = {
    genericWriteAction
}

const mapStateToProps = (state, props) => {
    const genericReducer = state[props.reducerName]
    return { genericReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtonSelector);