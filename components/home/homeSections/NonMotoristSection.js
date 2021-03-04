import React, { Component } from 'react';
import { styles } from '../Home.style';
import { Text, Card, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { deleteNonmotorist } from '../../../actions/NonmotoristAction';
import {questions} from '../../../data/questions';

class NonMotoristSection extends Component{

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }

    // _addNonmotorist () {
    //   let nonmotoristID = uuid.v1();
    //   this.props.addNonmotorist({id: nonmotoristID});
    //   // this.setState({
    //   //     nonmotorists: [...this.state.nonmotorists, {id: nonmotoristID}]
    //   // })
    // }

    render(){
        const {navigation, nonmotorist, index, edit} = this.props
        let nonmotoristQuestions = this.filterQuestionsData('nonmotorist');

        const navigateQuestion = (form, id, type) => {
            navigation.navigate('Question', {questions: form.data, objectID: id, type})
        }

        if (edit) {
          return(
              <Card style={styles.nonMotoristCard} onPress = {() => this.props.deleteNonmotorist({nonmotoristID: nonmotorist.id})}>
                  <Icon name= 'person-remove' width={75} height={75} alignSelf= "center" />
                  <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
              </Card>
          )
        } else {
          return(
              <Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist')}>
                  <Icon name= 'person' width={75} height={75} alignSelf= "center" />
                  <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
              </Card>
          )
        }
    }
}

const mapDispatchToProps = {
    deleteNonmotorist
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, mapDispatchToProps)(NonMotoristSection);
