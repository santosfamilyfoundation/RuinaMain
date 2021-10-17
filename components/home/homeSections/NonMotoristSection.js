import React, { Component } from 'react';
import { View, Pressable } from 'react-native';
import { styles } from '../Home.style';
import { Text, Box } from 'native-base';
//import { Text, Card, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { deleteNonmotorist } from '../../../actions/NonmotoristAction';
import {questions} from '../../../data/questions';

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
            <View>
                <Pressable onPress = {() => this.setState({beforeDelete:true})}>
                    <Box>
                        <Text>Remove Non-Motorist {index + 1}</Text>
                    </Box>
                </Pressable>

                <MaterialDialog
                    title={"Delete Confirmation"}
                    visible={this.state.beforeDelete}
                    onCancel={() => {
                        this.setState({beforeDelete: false})
                    }}
                    onOk={() => {
                        this.props.deleteNonmotorist({nonmotoristID: nonmotorist.id});
                        this.setState({ beforeDelete: false });
                    }}
                >
                    <Text>
                        Are you sure you want to delete this nonmotorist?
                    </Text>
                </MaterialDialog>
            </View>
              /*<View>
                <Card style={styles.nonMotoristCardRemove} onPress = {() => this.setState({beforeDelete:true})}>
                    <Icon name= 'person-remove' width={75} height={75} float alignSelf= "center" fill="white"/>
                    <Text style={styles.itemCardFooterEdit} category="s1">Remove Non-Motorist {index+1}</Text>
                </Card>

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
              </View>*/
          )
        } else {
          return(
            <Pressable onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist', (index+1))}>
                <Box>
                    <Text>Non-Motorist {index + 1}</Text>
                </Box>
            </Pressable>
              /*<Card style={styles.nonMotoristCard} onPress = {() => navigateQuestion(nonmotoristQuestions, nonmotorist.id, 'Nonmotorist', (index+1))}>
                  <Icon name= 'person' width={75} height={75} alignSelf= "center" />
                  <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
              </Card>*/
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
