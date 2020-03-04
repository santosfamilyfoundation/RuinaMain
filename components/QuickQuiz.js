import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Layout, TopNavigation, Card } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { changeVehicle, changeDrivers, changeNonmotorists, changePassengers, changeFatality, changeConstruction, changeIntersection, changeSchoolbus, changeLvhm, changeRespond } from '../actions/QuickQuizActions';
import { addVehicle, addLvhm } from '../actions/VehicleAction';
import { addNonmotorist } from '../actions/NonmotoristAction';
import { addDriver } from '../actions/DriverAction';
import { addPassenger } from '../actions/PassengerAction';

class QuickQuiz extends Component {
  state = {
    content: ''
  }
    render() {
      const {navigation,
        changeRespond,
        changeVehicle, 
        changeDrivers,
        changeNonmotorists,
        changePassengers, 
        changeFatality, 
        changeConstruction, 
        changeIntersection, 
        changeSchoolbus, 
        changeLvhm,
        addVehicle,
        addLvhm,
        addNonmotorist,
        addDriver,
        addPassenger
      } = this.props;

      const quiz = this.props.quiz;

      const dispatchAll = () => {
        addVehicle(quiz.numVehicle - quiz.numLvhm);
        addLvhm(quiz.numLvhm);
        addNonmotorist(quiz.numNonmotorist);
        addDriver(quiz.numDriver);
        addPassenger(quiz.numPassenger)
      }

      const moveHome = () => {
        if (quiz.hasResponded){
          navigation.navigate('Home');
          return
        }
        changeRespond();
        dispatchAll();
        navigation.navigate('Home');
      }

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Quick Quiz' alignment='center' leftControl={this.props.BackAction()}/>
              <ScrollView style={{ flex: 1 }}>
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
                      <Text style = {styles.questionText}>NUMBER OF DRIVERS INVOVLED</Text>
                      <TextInput 
                        style = {styles.questionInput}
                        onChangeText = {changeDrivers}
                        value = {`${quiz.numDriver}`}
                      />
                    </Card>
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                    <Card>
                      <Text style = {styles.questionText}>NUMBER OF LVHMs INVOVLED</Text>
                      <TextInput 
                        style = {styles.questionInput}
                        onChangeText = {changeLvhm}
                        value = {`${quiz.numLvhm}`}
                      />
                    </Card>
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                    <Card>
                      <Text style = {styles.questionText}>NUMBER OF NON-MOTORISTS INVOVLED</Text>
                      <TextInput 
                        style = {styles.questionInput}
                        onChangeText = {changeNonmotorists}
                        value = {`${quiz.numNonmotorist}`}
                      />
                    </Card>
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                    <Card>
                      <Text style = {styles.questionText}>NUMBER OF PASSENGERS INVOVLED</Text>
                      <TextInput 
                        style = {styles.questionInput}
                        onChangeText = {changePassengers}
                        value = {`${quiz.numPassenger}`}
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
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF LVHMs INVOVLED</Text>
                    <TextInput 
                      style = {styles.questionInput}
                      onChangeText = {changeLvhm}
                      value = {`${quiz.numLvhm}`}
                    />
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF DRIVERS INVOVLED</Text>
                    <TextInput 
                      style = {styles.questionInput}
                      onChangeText = {changeDrivers}
                      value = {`${quiz.numDriver}`}
                    />
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
                <Button onPress = {() => moveHome()}>Continue</Button>
                
              </ScrollView>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        paddingLeft: 10
        
    },
    cardStyle: {
        flexDirection: 'row',
    },
    buttonSytle: {
        marginRight: 15,
        width: 80
    }
})

const mapDispatchToProps = {
  changeRespond,
  changeVehicle, 
  changeDrivers,
  changeLvhm,
  changeNonmotorists,
  changePassengers, 
  changeFatality, 
  changeConstruction, 
  changeIntersection, 
  changeSchoolbus, 
  addVehicle,
  addLvhm,
  addNonmotorist,
  addDriver,
  addPassenger
}

const mapStateToProps = (state) => {
  const quiz = state.quickquizReducer
  return { quiz }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuiz);
