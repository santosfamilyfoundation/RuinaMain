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
import { updateDriver } from '../../../actions/DriverAction';
import { updateNonmotorist } from '../../../actions/NonmotoristAction';
import { updateVehicle } from '../../../actions/VehicleAction';
import { updatePassenger } from '../../../actions/PassengerAction';
import { updateRoad } from '../../../actions/RoadAction';

import NumberButtonSelector from '../../buttonSelectors/NumberButtonSelector';
import MultiButtonSelectorQuickSurvey from '../../buttonSelectors/MultiButtonSelectorQuickSurvey';
import { styles } from './QuickSurvey.style';

import { questions } from '../../../data/questions';
import backgroundSave from '../../../utils/backgroundSave';


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
        addPassenger,
        updateSetup,
        updateVehicle,
        updateNonmotorist,
        updateDriver,
        updateRoad,
        updatePassenger,
      } = this.props;

      const loadStateFromJSON = () => {
        const stateManager = new backgroundSave();
        stateManager.RNFS.readFile(stateManager.path, 'utf8')
        .then((data) => {
          const loadedState = JSON.parse(data);
          for (let d in loadedState) {
            console.log("LOADED: ", d, ": ", loadedState[d]);
          }

          // Parse all fields from loaded state
          const loadedQuiz = loadedState["quiz"];
          const loadedRoad = loadedState["road"][0]; // road is single dictionary in a list [{}]
          const loadedDriver = loadedState["driver"];
          const loadedVehicle = loadedState["vehicle"];
          const loadedPassenger = loadedState["passenger"];
          const loadedNonmotorist = loadedState["nonmotorist"];

          /*             Update Quiz               */
          changeVehicle(loadedQuiz["numVehicle"]);
          changeNonmotorists(loadedQuiz["numNonmotorist"]);
          changePhotos(loadedQuiz["photos"]);
          for (let setupQuestion in loadedQuiz["setupData"]) {
            updateSetup({ question: setupQuestion, selection: loadedQuiz["setupData"][setupQuestion]});
          }
          changeFatality(loadedQuiz["fatality"]);
          changeNonFatalInjury(loadedQuiz["nonFatalInjury"]);

          /*              Add and Update Road               */
          // add road with pre-populated questions from loaded state setup questions in questions.js
          let roadID = loadedRoad["id"];
          console.log("roadID: ", roadID);
          addRoad({ setupData: loadedQuiz["setupData"], roadID: roadID});
          // update resposes from loaded road state
          let roadResponse = loadedRoad["response"];
          for (let question in roadResponse) {
            let answer = roadResponse[question];
            updateRoad({ id: roadID, question: question, selection: answer });
          }
          
          /*              Add and Update Driver               */
          // connect drivers with vehicles
          for (let i = 0; i < loadedDriver.length; i++) {
            let currentDriver = loadedDriver[i];
            let vehicleID = currentDriver["vehicle"];
            let driverID = currentDriver["id"];
            console.log("driverID: ", driverID, "vehicleID: ", vehicleID);
            addDriver({ driverID, vehicleID });

            // update responses for this driver
            let response = currentDriver["response"];
            for (let question in response) {
              let answer = response[question];
              updateDriver({id: driverID, question: question, selection: answer});
            }
          }

          /*              Add and Update Vehicle              */
          // connect vehicles with drivers
          for (let i = 0; i < loadedVehicle.length; i++) {
            let currentVehicle = loadedVehicle[i];
            let vehicleID = currentVehicle["id"];
            let driverID = currentVehicle["driver"];
            console.log("vehicleID: ", vehicleID, "driverID: ", driverID);
            addVehicle({ vehicleID, driverID });

            // update responses for this vehicle
            let response = currentVehicle["response"];
            for (let question in response) {
              let answer = response[question];
              updateVehicle({ id: vehicleID, question: question, selection: answer });
            }
          }
        
          /*              Add and Update Passenger              */
          // add passengers to vehicles based on loaded state
          for (let i = 0; i < loadedPassenger.length; i++){
            let currentPassenger = loadedPassenger[i];
            let vehicleID = currentPassenger["vehicle"];
            let passengerID = currentPassenger["id"];
            console.log("vehicleID: ", vehicleID, "passengerID: ", passengerID);
            addPassenger({ id: passengerID, vehicleID: vehicleID });
            
            // update responses for this passenger
            let response = currentPassenger["response"];
            for (let question in response) {
              let answer = response[question];
              updatePassenger({id: passengerID, question: question, selection: answer});
            }
          }

          /*              Add and Update Nonmotorists               */
          // add as many nonmotorists as in loaded state
          for (let i = 0; i < loadedNonmotorist.length; i++) {
            let currentNonmotorist = loadedNonmotorist[i];
            let nonmotoristID = currentNonmotorist["id"];
            console.log("nonmotorist ID: ", nonmotoristID);
            addNonmotorist({ id: nonmotoristID});

            // update responses for this nonmotorist
            let response = currentNonmotorist["response"];
            for (let question in response) {
              let answer = response[question];
              updateNonmotorist({ id: nonmotoristID, question: question, selection: answer });
            }
          }
          console.log("Finish loading saved state from disk.")

        })
        .catch((err) => {
          console.log(err.message);
        })
      }

      // contains the state from the QuickQuizReducer
      const quiz = this.props.quiz;

      // gets called from moveHome
      const dispatchAll = () => {
        // add as many nonmotorists as user inputs
        addNonmotorist(quiz.numNonmotorist);
        // add road with pre-populated questions from setup questions in questions.js
        addRoad({ setupData: quiz["setupData"], roadID: uuid.v1()});
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
        //dispatchAll();
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
            <Button onPress={() => loadStateFromJSON()}>Load Report</Button>
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
  addPassenger,
  updateSetup,
  updateVehicle,
  updateNonmotorist,
  updateDriver,
  updateRoad,
  updatePassenger,
}

// corresponds to this.props.quiz
// helps component get updated state if updated by other components
const mapStateToProps = (state) => {
  const quiz = state.quickquizReducer
  const passenger = state.passengerReducer;
  return { quiz, passenger }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSurvey);
