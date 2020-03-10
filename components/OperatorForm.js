import React, { Component } from 'react';
import { Text, Card } from '@ui-kitten/components';
import { TextInput } from 'react-native';

export default class OperatorForm extends Component{

    render(){

        const { id, type, updateOperator } = this.props

        return(
            <Card>
                <Text>{type} C1-S1</Text>
                <TextInput
                    onChangeText={content => updateOperator("C1-S1", id, content)}
                    style={{borderWidth:5, borderColor: 'black', height: 40}}
                    defaultValue='  '
                />
                <Text>{type} C1-S2</Text>
                <TextInput
                    onChangeText={content => updateOperator("C1-S2", id, content)}
                    style={{borderWidth:5, borderColor: 'black', height: 40}}
                    defaultValue='  '
                />
            </Card>
        )
    }
};
