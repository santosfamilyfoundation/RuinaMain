import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ButtonGroup, Layout, TopNavigation, Card, Input } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { changeVehicle, changeDrivers, changeNonmotorists, changePassengers, changeFatality, changeConstruction, changeIntersection, changeSchoolbus, changeLvhm, changeRespond } from '../actions/QuickQuizActions';
import { addVehicle, addLvhm } from '../actions/VehicleAction';
import { addNonmotorist } from '../actions/NonmotoristAction';
import { addDriver } from '../actions/DriverAction';
import { addPassenger } from '../actions/PassengerAction';
import NumberButtonSelector from './buttonSelectors/NumberButtonSelector';
import { styles } from './QuickQuiz.style';

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
                  <NumberButtonSelector 
                    title="Number of vehicles involved"
                    submitFunction = {changeVehicle}
                    reducerName = "quickquizReducer"
                    fieldName = "numVehicle"
                  />
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <NumberButtonSelector 
                    title="Number of drivers involved"
                    submitFunction = {changeDrivers}
                    reducerName = "quickquizReducer"
                    fieldName = "numDriver"
                  />
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <NumberButtonSelector 
                    title="Number of non-motorists involved"
                    submitFunction = {changeNonmotorists}
                    reducerName = "quickquizReducer"
                    fieldName = "numNonmotorist"
                  />
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <NumberButtonSelector 
                    title="Number of passengers involved"
                    submitFunction = {changePassengers}
                    reducerName = "quickquizReducer"
                    fieldName = "numPassenger"
                  />
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <NumberButtonSelector 
                    title="Number of large or vehicles with hazardous material"
                    submitFunction = {changeLvhm}
                    reducerName = "quickquizReducer"
                    fieldName = "numLvhm"
                  />
                </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <Card style = {styles.cardStyle}>
                      <Text style = {styles.questionText}>Are there known fatalities?</Text>
                      <Layout style={{flexDirection: 'row'}}>
                          <Button 
                            style = {styles.buttonSytle} 
                            onPress = {() => changeFatality(true)}
                            appearance={(quiz.fatality ? 'filled':'outline')}
                          >
                            Yes
                          </Button>
                          <Button 
                            style = {styles.buttonSytle} 
                            onPress = {() => changeFatality(false)}
                            appearance={(quiz.fatality ? 'outline':'filled')}
                          >
                            No
                          </Button>
                      </Layout>
                  </Card>
              </SafeAreaView>
                <SafeAreaView style = {styles.questionContainer}>
                  <Card style = {styles.cardStyle}>
                      <Text style = {styles.questionText}>Is a school bus involved?</Text>
                      <Layout style={{flexDirection: 'row'}}>
                        <Button 
                          style = {styles.buttonSytle} 
                          onPress = {() => changeSchoolbus(true)}
                          appearance={(quiz.schoolbus ? 'filled':'outline')}
                        >
                          Yes
                        </Button>
                        <Button 
                          style = {styles.buttonSytle} 
                          onPress = {() => changeSchoolbus(false)}
                          appearance={(quiz.schoolbus ? 'outline':'filled')}
                        >
                          No
                        </Button>
                      </Layout>
                  </Card>
                </SafeAreaView>
              </ScrollView>
              <Button onPress = {() => moveHome()}>Continue</Button>
            </SafeAreaView>
          );
    }
};



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
