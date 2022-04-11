/*
  The QuickSurvey component receives from the Welcome screen a file path or an
  empty string (for a new report) and loads the questions from the downloaded
  spreadsheet. If the component receives a file path, it fetches the saved JSON
  from the app file directory. When the JSON successfully loads with data, a
  dialog will alert the user and on acknowledgement will navigate to the Home
  screen. If the JSON fails or no file path is provided the component renders
  the set up questions (the number of vehicles, non-motorists, type of property,
  if there was a secondary crash, and crash severity). The bottom of the page is
  a "Continue" button that navigates to the Home screen. The questions do not
  need to be answered to continue to the Home screen.
*/
import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import {
  TextInput,
  Text,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";
import { Button, Heading, Divider, VStack, Center, Spinner } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { material } from "react-native-typography";
import { MaterialDialog } from "react-native-material-dialog";
import {
  changeVehicle,
  changeDrivers,
  changeNonmotorists,
  changePassengers,
  changeFatality,
  changeNonFatalInjury,
  changeRespond,
  changePhotos,
  updateSetup,
} from "../../actions/QuickQuizActions";
import { updateResponse } from "../../actions/StoryActions";
import { addVehicle, updateVehicle } from "../../actions/VehicleAction";
import {
  addNonmotorist,
  updateNonmotorist,
} from "../../actions/NonmotoristAction";
import { addDriver, updateDriver } from "../../actions/DriverAction";
import { addPassenger, updatePassenger } from "../../actions/PassengerAction";
import { addRoad, updateRoad } from "../../actions/RoadAction";
import { addPhoto } from "../../actions/PhotoAction";
import NumberButtonSelectorQuickSurvey from "../../components/buttonSelectors/NumberButtonSelectorQuickSurvey";
import MultiButtonSelectorQuickSurvey from "../../components/buttonSelectors/MultiButtonSelectorQuickSurvey";
import TopNavigation from "../../components/TopNavigation";
import ProcessQuestions from "../../utils/ProcessQuestionsSheets";
import backgroundSave from "../../utils/backgroundSave";

var uuid = require("react-native-uuid");

class QuickSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoSavedSession: this.props.navigation.getParam("autoSavedSession"), // should we try to load an autoSaved Report
      loadedAutoSave: false, // if we have loaded an autoSaved Report
      loadedAutoSaveSuccessMessageVisible: false,
      loadedAutoSaveFailMessageVisible: false,
      loading: true, //loading screen
      autosavedFilePath: this.props.navigation.getParam("selectedFile"),
    };
    this.questions = undefined;
    this.stateManager = undefined;
  }

  /*
    This function reads the file at a given file path. When the file is done
    reading the data is passed to parseLoadedState and the displays a dialog
    with a success message and the loading state is set to false. If the file
    cannot be read, the screen will render the setup questions.
  */
  async loadStateFromJSON() {
    await this.stateManager.RNFS.readFile(this.stateManager.path, "utf8")
      .then((data) => {
        try {
          const loadedState = JSON.parse(data);
          this.parseLoadedState(loadedState);
          this.setState({ loadedAutoSaveSuccessMessageVisible: true });
        } catch (e) {
          // catch any error while parsing the JSON
          console.log("ERROR: " + e.message);
        }
        // Hide loading screen
        this.setState({ loading: false });
      })
      .catch((err) => {
        // catch any error while reading autoSavedSession JSON from disk
        this.setState({ autoSavedSession: false });
        this.setState({ loading: false });
        console.log(err.message);
      });
  }

  /*
    This function runs during the initial render of the screen. The function
    loads the questions from the downloaded spreadsheet and saves them to a
    variable. If the screen is given a saved session and the data has not been
    loaded, it loads the data from the file. Otherwise, the loading state will
    be set to false.
  */
  async componentDidMount() {
    this.questions = await ProcessQuestions();
    this.stateManager = new backgroundSave(
      this.state.autosavedFilePath.label,
      this.state.autoSavedSession
    );
    if (this.state.autoSavedSession && !this.state.loadedAutoSave) {
      await this.loadStateFromJSON();
    } else {
      this.setState({ loading: false });
    }
  }

  /*
    This function takes the data read from the provided file. The data is
    divided to its respective page variable as list. Each of the lists are read
    saved to their respective reducers (e.i loadedDriver corresponds to the
    reducer functions addDriver and updateDriver).
  */
  parseLoadedState(loadedState) {
    // Parse all fields from loaded state
    const loadedQuiz = loadedState["quiz"];
    const loadedRoad = loadedState["road"][0]; // road is single dictionary in a list [{}]
    const loadedDriver = loadedState["driver"];
    const loadedVehicle = loadedState["vehicle"];
    const loadedPassenger = loadedState["passenger"];
    const loadedNonmotorist = loadedState["nonmotorist"];
    const loadedPhoto = loadedState["photo"];

    /*             Update Quiz               */
    this.props.changeVehicle(loadedQuiz["numVehicle"]);
    this.props.changeNonmotorists(loadedQuiz["numNonmotorist"]);
    this.props.changePhotos(loadedQuiz["photos"]);
    for (let setupQuestion in loadedQuiz["setupData"]) {
      this.props.updateSetup({
        question: setupQuestion,
        selection: loadedQuiz["setupData"][setupQuestion],
      });
    }
    this.props.changeFatality(loadedQuiz["fatality"]);
    this.props.changeNonFatalInjury(loadedQuiz["nonFatalInjury"]);

    /*              Add and Update Road               */
    // add road with pre-populated questions from loaded state setup questions in questions.js
    let roadID = loadedRoad["id"];
    this.props.addRoad({ setupData: loadedQuiz["setupData"], roadID: roadID });
    // update resposes from loaded road state
    let roadResponse = loadedRoad["response"];
    for (let question in roadResponse) {
      let answer = roadResponse[question];
      this.props.updateRoad({
        id: roadID,
        question: question,
        selection: answer,
      });
    }

    /*              Add and Update Driver               */
    // connect drivers with vehicles
    for (let i = 0; i < loadedDriver.length; i++) {
      let currentDriver = loadedDriver[i];
      let vehicleID = currentDriver["vehicle"];
      let driverID = currentDriver["id"];
      this.props.addDriver({ driverID, vehicleID });

      // update responses for this driver
      let response = currentDriver["response"];
      for (let question in response) {
        let answer = response[question];
        this.props.updateDriver({
          id: driverID,
          question: question,
          selection: answer,
        });
      }
    }

    /*              Add and Update Vehicle              */
    // connect vehicles with drivers
    for (let i = 0; i < loadedVehicle.length; i++) {
      let currentVehicle = loadedVehicle[i];
      let vehicleID = currentVehicle["id"];
      let driverID = currentVehicle["driver"];
      this.props.addVehicle({ vehicleID, driverID });

      // update responses for this vehicle
      let response = currentVehicle["response"];
      for (let question in response) {
        let answer = response[question];
        this.props.updateVehicle({
          id: vehicleID,
          question: question,
          selection: answer,
        });
      }
    }

    /*              Add and Update Passenger              */
    // add passengers to vehicles based on loaded state
    for (let i = 0; i < loadedPassenger.length; i++) {
      let currentPassenger = loadedPassenger[i];
      let vehicleID = currentPassenger["vehicle"];
      let passengerID = currentPassenger["id"];
      this.props.addPassenger({ id: passengerID, vehicleID: vehicleID });

      // update responses for this passenger
      let response = currentPassenger["response"];
      for (let question in response) {
        let answer = response[question];
        this.props.updatePassenger({
          id: passengerID,
          question: question,
          selection: answer,
        });
      }
    }

    /*              Add and Update Nonmotorists               */
    // add as many nonmotorists as in loaded state
    for (let i = 0; i < loadedNonmotorist.length; i++) {
      let currentNonmotorist = loadedNonmotorist[i];
      let nonmotoristID = currentNonmotorist["id"];
      this.props.addNonmotorist({ id: nonmotoristID });

      // update responses for this nonmotorist
      let response = currentNonmotorist["response"];
      for (let question in response) {
        let answer = response[question];
        this.props.updateNonmotorist({
          id: nonmotoristID,
          question: question,
          selection: answer,
        });
      }
    }

    /*              Add Photo             */
    // add passengers to vehicles based on loaded state
    this.props.addPhoto(loadedPhoto);
    this.setState({ loadedAutoSave: true });
  }

  /*
    This function returns a list of questions that are from the setup sheet.
  */
  filterSetupData = () => {
    return this.questions.data.filter((question) =>
      question.display.includes("setup")
    );
  };

  render() {
    const {
      navigation,
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
      addPhoto,
      updateResponse,
      updateSetup,
      updateVehicle,
      updateNonmotorist,
      updateDriver,
      updateRoad,
      updatePassenger,
    } = this.props;

    // contains the state from the QuickQuizReducer
    const quiz = this.props.quiz;

    // gets called from moveHome
    const dispatchAll = () => {
      // add as many nonmotorists as user inputs
      addNonmotorist(quiz.numNonmotorist);
      // add road with pre-populated questions from setup questions in questions.js
      addRoad({ setupData: quiz["setupData"], roadID: uuid.v1() });
      // connect vehicles with drivers
      for (let i = 0; i < quiz.numVehicle; i++) {
        let vehicleID = uuid.v1(); // Generate a v1 (time-based) id
        let driverID = uuid.v1();
        addVehicle({ vehicleID, driverID });
        addDriver({ driverID, vehicleID });
      }
    };

    // gets called when user clicks continue button
    const moveHome = () => {
      if (quiz.hasResponded) {
        this.props.navigation.navigate("Home", {
          edit: false,
          filePath: this.stateManager.path,
          openOldFile: true,
          questions: this.questions,
        });
        return;
      }

      changeRespond();
      if (!this.state.loadedAutoSave) {
        dispatchAll();
      }

      this.props.navigation.navigate("Home", {
        edit: false,
        filePath: this.stateManager.path,
        openOldFile: true,
        questions: this.questions,
      });
    };

    const submitField = () => {
      updateSetup;
      updateResponse;
    };

    /* render a single setup question
      note that right now we only render multiButton questions
      if more questions of different types were to be added to the setup tab, then
      we would need to create new quick survey components for them and render them here
    */
    const renderSingleQuestion = (question) => {
      switch (question.answerType) {
        case "multiButton":
          return (
            <SafeAreaView key={question.id}>
              <MultiButtonSelectorQuickSurvey
                data={question}
                reducer={"quickquizReducer"}
                submitFunction={updateSetup}
                updateResponse={updateResponse}
              />
            </SafeAreaView>
          );
      }
    };

    const renderedQuestions = () => {
      let res = this.filterSetupData().map((question) =>
        renderSingleQuestion(question)
      );
      return res;
    };

    if (this.state.loading) {
      return (
        <Center flex={1}>
          <Spinner accessibilityLabel="loadingScreen" size="lg" />
        </Center>
      );
    } else {
      if (this.state.loadedAutoSave) {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <MaterialDialog
              title={"Successfully Loaded your Last Session!"}
              visible={this.state.loadedAutoSaveSuccessMessageVisible}
              cancelLabel=""
              okLabel="Continue"
              onCancel={() => {
                this.setState({ loadedAutoSaveSuccessMessageVisible: false });
                moveHome();
              }}
              onOk={() => {
                this.setState({ loadedAutoSaveSuccessMessageVisible: false });
                moveHome();
              }}
            >
              <Text style={material.subheading}>
                Your last session is successfully loaded. Press Continue to edit
                the report.
              </Text>
            </MaterialDialog>
          </SafeAreaView>
        );
      } else {
        return (
          <React.Fragment>
            <TopNavigation title="Quick Survey" />
            <ScrollView>
              <VStack>
                <NumberButtonSelectorQuickSurvey
                  title="Number of vehicles involved"
                  submitFunction={changeVehicle}
                  reducerName="quickquizReducer"
                  fieldName="numVehicle"
                  startRange={1}
                  endRange={5}
                />
                <NumberButtonSelectorQuickSurvey
                  title="Number of non-motorists involved"
                  submitFunction={changeNonmotorists}
                  reducerName="quickquizReducer"
                  fieldName="numNonmotorist"
                  startRange={0}
                  endRange={5}
                  tooltipText="Non Motorist are people who were not in a vehicle at the time of the crash"
                />
                {renderedQuestions()}
              </VStack>
            </ScrollView>
            <Button onPress={() => moveHome()} mb={4} mx={4}>
              Continue
            </Button>
            <VStack mt={4} alignItems="center" mb={8}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://forms.gle/aXVjxVrQU6jm3KUx6")
                }
              >
                <Text style={{ color: "blue" }}>Submit Feedback</Text>
              </TouchableOpacity>
            </VStack>
          </React.Fragment>
        );
      }
    }
  }
}

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
  addPhoto,
  updateResponse,
  updateSetup,
  updateVehicle,
  updateNonmotorist,
  updateDriver,
  updateRoad,
  updatePassenger,
};

// corresponds to this.props.quiz
// helps component get updated state if updated by other components
const mapStateToProps = (state) => {
  const quiz = state.quickquizReducer;
  const { response } = state.storyReducer;
  const passenger = state.passengerReducer;
  const photo = state.PhotosReducer;
  return { quiz, passenger, response, photo };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSurvey);
