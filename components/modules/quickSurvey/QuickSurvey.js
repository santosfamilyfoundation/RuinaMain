import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ButtonGroup, Layout, TopNavigation, Card, Input } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { changeVehicle, changeDrivers, changeNonmotorists, changePassengers, changeFatality, changeNonFatalInjury, changeRespond, changePhotos, updateSetup } from '../../../actions/QuickQuizActions';
import { addVehicle } from '../../../actions/VehicleAction';
import { addNonmotorist } from '../../../actions/NonmotoristAction';
import { addDriver } from '../../../actions/DriverAction';
import { addPassenger } from '../../../actions/PassengerAction';
import { addRoad } from '../../../actions/RoadAction';
import NumberButtonSelector from '../../buttonSelectors/NumberButtonSelector';
import MultiButtonSelectorQuickSurvey from '../../buttonSelectors/MultiButtonSelectorQuickSurvey';
import { styles } from './QuickSurvey.style';

import { questions } from '../../../data/questions';

var uuid = require('react-native-uuid');

class QuickSurvey extends Component {
    render() {
      const {navigation,
        changeRespond,
        changeVehicle,
        changeNonmotorists,
        changeFatality,
        changeNonFatalInjury,
        changePhotos,
        addVehicle,
        addNonmotorist,
        addDriver,
        addRoad,
        updateSetup,
      } = this.props;

      // contains the state from the QuickQuizReducer
      const quiz = this.props.quiz;

      // gets called from moveHome
      const dispatchAll = () => {
        // add as many nonmotorists as user inputs
        addNonmotorist(quiz.numNonmotorist);
        // add road with pre-populated questions from setup questions in questions.js
        addRoad(quiz["setupData"]);
        // connect vehicles with drivers
        for (let i = 0; i < (quiz.numVehicle); i++){
            let vehicleID = uuid.v1(); // Generate a v1 (time-based) id
            let driverID = uuid.v1();
            addVehicle({vehicleID, driverID})
            addDriver({driverID, vehicleID})
        }
      }

      // gets called when user clicks continue button
      const moveHome = () => {
        if (quiz.hasResponded){
          navigation.navigate('Home');
          return
        }
        changeRespond();
        dispatchAll();
        navigation.navigate('Home');
      }

      // filter out questions in questions.js with particular display
      const filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
      }

      let questionsData = filterQuestionsData('setup');

      // render a single setup question
      // note that right now we only render multiButton questions
      // if more questions of different types were to be added to the setup tab, then
      // we would need to create new quick survey components for them and render them here
      const renderSingleQuestion = (question) => {
        switch (question.answerType) {
          case 'multiButton':
            return (
              <SafeAreaView key={question.id} style = {styles.questionContainer}>
                <MultiButtonSelectorQuickSurvey
                  data={question}
                  reducer={"quickquizReducer"}
                  submitFunction={updateSetup}
                />
              </SafeAreaView>
            )
        }
      }

      // render all the setup questions
      const renderedQuestions = () => {
        let res = questionsData.map((question => (renderSingleQuestion(question))));
        return (
          res
        );
      }

      // render the entire quick survey
      // some questions are hardcoded right now because they don't correspond to
      // crash report questions and have special submitFunctions
      return (
          <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Quick Survey' alignment='center' leftControl={this.props.BackAction()}/>
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
                  title="Number of non-motorists involved"
                  submitFunction = {changeNonmotorists}
                  reducerName = "quickquizReducer"
                  fieldName = "numNonmotorist"
                />
              </SafeAreaView>
              {/*<SafeAreaView style = {styles.questionContainer}>
                <NumberButtonSelector
                  title="Number of fatalities"
                  submitFunction = {changeFatality}
                  reducerName = "quickquizReducer"
                  fieldName = "fatality"
                />
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <NumberButtonSelector
                  title="Number of non-fatal injuries"
                  submitFunction = {changeNonFatalInjury}
                  reducerName = "quickquizReducer"
                  fieldName = "nonFatalInjury"
                />
              </SafeAreaView>*/}
              {renderedQuestions()}
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>Photos taken?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                      <Button
                        style = {styles.buttonSytle}
                        onPress = {() => changePhotos(true)}
                        appearance={(quiz.photos ? 'filled':'outline')}
                      >
                        Yes
                      </Button>
                      <Button
                        style = {styles.buttonSytle}
                        onPress = {() => changePhotos(false)}
                        appearance={(quiz.photos ? 'outline':'filled')}
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

// all the possible actions in QuickSurvey
// helps component to fire an action event in Redux
// (dispatching action which may cause change of application state)
const mapDispatchToProps = {
  changeRespond,
  changeVehicle,
  changeNonmotorists,
  changeFatality,
  changeNonFatalInjury,
  changePhotos,
  addVehicle,
  addNonmotorist,
  addDriver,
  addRoad,
  updateSetup,
}

// corresponds to this.props.quiz
// helps component get updated state if updated by other components
const mapStateToProps = (state) => {
  const quiz = state.quickquizReducer
  return { quiz }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSurvey);
