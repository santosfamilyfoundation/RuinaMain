import React, { Component } from 'react';
import { styles } from './Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
import { nonmotoristQuestions } from '../data/nonmotoristQuestions';

export default class NonMotoristSection extends Component{
    render(){

        const {navigation, nonmotorist, index, name, question} = this.props

        // const NonMotoristHeader = () => (
        //     <CardHeader title={`Non-motorist ${index+1}`} />
        // );

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        return(
            // <Card key={nonmotorist.id} header = {NonMotoristHeader} style={styles.itemCard} >
            //     <View style={styles.itemCardContent}>
                    <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist')}>
                        <Icon name= 'person' width={75} height={75} alignSelf= "center" />
                        <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
                    </Card>
            //     </View>
            //  </Card>
        )
    }
}