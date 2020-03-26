import React, { Component } from 'react';
import { styles } from './Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
import { nonmotoristQuestions } from '../data/nonmotoristQuestions';

export default class NonMotoristSection extends Component{
    render(){

        const {navigation, nonmotorist, index, name, question} = this.props

        const NonMotoristHeader = () => (
            <CardHeader title={`Non-motorist ${index+1}`} />
        );

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        return(
            <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
                <View style={styles.itemCardContent}>
                    <Card style={styles.individualCard} onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist')}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Non-Motorist</Text>
                    </Card>
                </View>
             </Card>
        )
    }
}