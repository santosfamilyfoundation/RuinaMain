import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { changeVehicle, changePersons, changeFatality, changeConstruction, changeIntersection, changeSchoolbus, changeHazardous } from '../actions/QuickQuizActions';

class QuickQuiz extends Component {
  state = {
    content: ''
  }
    render() {
      const {changeVehicle, 
      changePersons, 
      changeFatality, 
      changeConstruction, 
      changeIntersection, 
      changeSchoolbus, 
      changeHazardous} = this.props;

      const quiz = this.props.quiz;

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Quick Quiz' alignment='center' leftControl={this.props.BackAction()}/>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF VEHICLES INVOVLED</Text>
                    <TextInput 
                      style = {styles.questionInput}
                      onChangeText = {changeVehicle}
                      value = {`${quiz.numVehicle}`}
                    />
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF PERSONS INVOVLED</Text>
                    <TextInput 
                      style = {styles.questionInput}
                      onChangeText = {changePersons}
                      value = {`${quiz.numPerson}`}
                    />
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>ARE THERE KNOWN FATALITIES?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle} onPress = {() => changeFatality(true)}>Yes</Button>
                        <Button style = {styles.buttonSytle} onPress = {() => changeFatality(false)}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THE CRASH IN A CONSTRUCTION ZONE?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle} onPress = {() => changeConstruction(true)}>Yes</Button>
                        <Button style = {styles.buttonSytle} onPress = {() => changeConstruction(false)}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THE CRASH IN AN INTERSECTION?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle} onPress = {() => changeIntersection(true)}>Yes</Button>
                        <Button style = {styles.buttonSytle} onPress = {() => changeIntersection(false)}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS A SCHOOL BUS INVOVLED?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle} onPress = {() => changeSchoolbus(true)}>Yes</Button>
                        <Button style = {styles.buttonSytle} onPress = {() => changeSchoolbus(false)}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THERE HAZARDOUS WASTE?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle} onPress = {() => changeHazardous(true)}>Yes</Button>
                        <Button style = {styles.buttonSytle} onPress = {() => changeHazardous(false)}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <Button onPress = {() => console.log(quiz)}>Continue</Button>

            </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    questionContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15
    },
    questionInput: {
        backgroundColor: 'lightgrey',
        height: 40,
        
    },
    cardStyle: {
        flexDirection: 'row',
        // flex: 0.6,
    },
    buttonSytle: {
        marginRight: 15,
        width: 80
    }
})

const mapDispatchToProps = {
  changeVehicle, 
  changePersons, 
  changeFatality, 
  changeConstruction, 
  changeIntersection, 
  changeSchoolbus, 
  changeHazardous
}

const mapStateToProps = (state) => {
  const quiz = state.quickquizReducer
  return { quiz }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuiz);
