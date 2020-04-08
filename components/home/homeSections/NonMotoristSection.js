import React, { Component } from 'react';
import { styles } from '../Home.style';
import { Text, Card, Icon } from '@ui-kitten/components';
import {questions} from '../../../data/questions';

export default class NonMotoristSection extends Component{
    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }

    render(){
        const {navigation, nonmotorist, index, name, question} = this.props
        let nonmotoristQuestions = this.filterQuestionsData('nonmotorist');

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        return(
            <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist')}>
                <Icon name= 'person' width={75} height={75} alignSelf= "center" />
                <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
            </Card>
        )
    }
}