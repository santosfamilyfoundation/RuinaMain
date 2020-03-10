import React, { Component } from 'react';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { TextInput } from 'react-native';

export default class OperatorForm extends Component{

    render(){
        return(
            <Card>
                <Text>ID: {this.props.id}</Text>
                <Text style={{marginBottom: 10}}>type: {this.props.type}</Text>
            </Card>
        )
    }

}