import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../Home.style';
//import { Text, Card, Icon } from '@ui-kitten/components';
import { Box, Text } from 'native-base';
import { connect } from 'react-redux';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { deleteNonmotorist } from '../../../actions/NonmotoristAction';
import {questions} from '../../../data/questions';
import Section from '../../Section'
import IconButton from '../../IconButton'
import Icon from 'react-native-vector-icons/MaterialIcons'

class NonMotoristSection extends Component{

    constructor(props) {
        super(props);

        this.state = {
          beforeDelete: false,
        }
    }

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
    }

    render(){
        const {navigation, nonmotorist, index, edit, roadID} = this.props
        let nonmotoristQuestions = this.filterQuestionsData('nonmotorist');

        const navigateQuestion = (form, id, type, idx) => {
          var name = type + ' ' + idx;
          navigation.navigate('Question', {questions: form.data, objectID: id, type, name, dependencyID: [0, 0, 0, id]})
        }

        // describes two different nonmotorist cards (edit and non edit modes)
        if (edit) {
          return(
              <Box mt={4}>
                <IconButton
                 rightMargin={4}
                 onPress = {() => this.setState({beforeDelete:true})}
                 text={`Remove Non-Motorist ${index+1}`}
                 icon={<Icon color='white' name='person-remove-alt-1' size={50}/>}
                 />

                <MaterialDialog
                  title={"Delete Confirmation"}
                  visible={this.state.beforeDelete}
                  onCancel={() => {
                    this.setState({ beforeDelete: false });
                  }}
                  onOk={() => {
                    this.props.deleteNonmotorist({nonmotoristID: nonmotorist.id});
                    this.setState({ beforeDelete: false });
                  }}
                >
                  <Text style={material.subheading}>
                    Are you sure you want to delete this nonmotorist?
                  </Text>
                </MaterialDialog>
              </Box>
          )
        } else {
          return(
          <Box mt={4}>
              <IconButton
                onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist', (index+1))}
                text={`Non-Motorist ${index+1} Form`}
                rightMargin={4}
                icon = {<Icon color='white' name='person' size={50}/>}
              />
          </Box>
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
