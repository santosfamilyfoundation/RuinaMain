import React, { Component } from "react";
import {
  View,
  ScrollView,
  BackHandler,
  PermissionsAndroid,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { VStack, HStack, Box, Text, Image, Alert, Center } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import VehicleSection from "../formSections/VehicleSection";
import NonMotoristSection from "../formSections/NonMotoristSection";
import { addNonmotorist } from "../../actions/NonmotoristAction";
import { addVehicle } from "../../actions/VehicleAction";
import { addDriver } from "../../actions/DriverAction";
import { addPhoto } from "../../actions/PhotoAction";
import backgroundSave from "../../utils/backgroundSave";
import Section from "../../components/Section";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import TopNavigation from "../../components/TopNavigation";
import { SvgXml } from "react-native-svg";
var uuid = require("react-native-uuid");

class Home extends Component {
  constructor(props) {
    super(props);

    this._addNonmotorist = this._addNonmotorist.bind(this);
    this._addVehicleSection = this._addVehicleSection.bind(this);
    this.questions = this.props.navigation.getParam("questions");

    this.state = {
      edit: props.edit || false,
      filePath: this.props.navigation.getParam("filePath"),
      openOldFile: this.props.navigation.getParam("openOldFile"),
    };
  }

  // add nonmotorist to global state
  _addNonmotorist() {
    let nonmotoristID = uuid.v1();
    this.props.addNonmotorist({ id: nonmotoristID });
  }

  // add a new vehicle section to global state (vehicle and driver)
  _addVehicleSection() {
    let vehicleID = uuid.v1(); // Generate a v1 (time-based) id
    let driverID = uuid.v1();
    this.props.addVehicle({ vehicleID, driverID });
    this.props.addDriver({ driverID, vehicleID });
  }

  filterQuestionsData = (questionType) => {
    return this.questions.data.filter((question) =>
      question.display.includes(questionType)
    );
  };

  // add event listener for when user clicks Android back button
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonPressAndroid
    );
  }

  // remove event listener when user no longer in Home
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonPressAndroid
    );
  }

  // basically do nothing when user clicks on Android back button
  // returning true means we have handled the event, and react-navigation's
  // listener will not get called, thus not popping the screen
  handleBackButtonPressAndroid = () => {
    return true;
  };

  render() {
    const {
      navigation,
      edit,
      driver,
      nonmotorist,
      vehicle,
      passenger,
      road,
      photo,
    } = this.props;

    const data = {
      driver: this.props.driver.data,
      nonmotorist: this.props.nonmotorist.data,
      vehicle: this.props.vehicle.data,
      passenger: this.props.passenger.data,
      road: this.props.road.data,
      quiz: this.props.quiz,
      photo: this.props.photo,
    };

    const captureState = new backgroundSave(
      this.state.filePath,
      this.state.openOldFile
    );
    captureState.captureCurrentState(JSON.stringify(data));

    const roadForm = this.filterQuestionsData("road");

    // navigate to question form
    const navigateQuestion = (form, id, type, name) => {
      navigation.navigate("Question", {
        questions: form,
        objectID: id,
        type,
        name,
        dependencyID: [id],
      });
    };
    // generate the vehicle section components based on global state
    let vehiclesListArr = vehicle.data.map((vehicle, index) => {
      const { edit } = this.state;
      return (
        <VehicleSection
          edit={edit}
          key={index}
          navigation={navigation}
          vehicle={vehicle}
          index={index}
          name={"Vehicle"}
          passenger={passenger}
          roadID={road.data[0].id}
          questions={this.questions}
        />
      );
    });

    // generate nonmotorist cards based on global state
    let nonmotoristListArr = nonmotorist.data.map((nonmotorist, index) => {
      const { edit } = this.state;
      return (
        <NonMotoristSection
          edit={edit}
          key={index}
          navigation={navigation}
          nonmotorist={nonmotorist}
          index={index}
          roadID={road.data[0].id}
          questions={this.questions}
        />
      );
    });

    const rightControls = () => {
      const { edit } = this.state;
      return (
        <View>
          <TopNavigation>
            {this.state.edit && (
              <IconButton
                text="Confirm Changes"
                onPress={() => {
                  this.setState({ edit: false });
                }}
                icon={<Icon color="white" name="save" size={25} />}
              />
            )}
            {!this.state.edit && (
              <>
                <IconButton
                  text="Edit Sections"
                  onPress={() => {
                    this.setState({ edit: true });
                  }}
                  icon={<Icon color="white" name="edit" size={25} />}
                />
                <IconButton
                  leftMargin={4}
                  text="Export Report"
                  onPress={() => {
                    navigation.navigate("FinalReport", {
                      questions: this.questions,
                    });
                  }}
                  icon={<Icon color="white" name="assignment" size={25} />}
                />
              </>
            )}
          </TopNavigation>
        </View>
      );
    };

    return (
      <SafeAreaView flex={1}>
        {rightControls()}
        <ScrollView marginBottom={24}>
          <Section title="Crash and Roadway">
            {this.state.edit ? (
              <HStack alignItems="center" mt={4}>
                <Icon name="edit-road" size={50} />
                <Text ml={2}>Crash/Road</Text>
              </HStack>
            ) : (
              <HStack>
                <IconButton
                  topMargin={4}
                  text={`Crash/Road \nForm`}
                  onPress={() =>
                    navigateQuestion(
                      roadForm,
                      road.data[0].id,
                      "Road",
                      "Crash/Road"
                    )
                  }
                  icon={<Icon color="white" name="edit-road" size={50} />}
                />
              </HStack>
            )}
          </Section>
          <VStack>
            {vehiclesListArr}
            {this.state.edit && (
              <IconButton
                leftMargin={4}
                rightMargin={4}
                text="Add Vehicle"
                onPress={() => this._addVehicleSection()}
                icon={<Icon color="white" name="local-taxi" size={50} />}
              />
            )}
          </VStack>
          {this.state.edit ? (
            <Section title="Non-motorists">
              <HStack flexWrap="wrap">{nonmotoristListArr}</HStack>
              <IconButton
                topMargin={4}
                text="Add Non-Motorist"
                onPress={() => this._addNonmotorist()}
                icon={<Icon color="white" name="person-add" size={50} />}
              />
            </Section>
          ) : (
            <>
              {nonmotoristListArr.length ? (
                <Section title="Non-motorists">
                  <HStack flexWrap="wrap">{nonmotoristListArr}</HStack>
                </Section>
              ) : null}
              <Section title="Crash Diagram">
                {photo.image ? (
                  <>
                    <IconButton
                      topMargin={4}
                      text="Edit Crash Diagram"
                      onPress={() => navigation.navigate("DiagramTool")}
                      icon={<Icon color="white" name="edit" size={50} />}
                    />
                    <Box m={4} borderColor="secondary.700">
                      <SvgXml xml={photo.image} width="100%" height="50%" />
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                      <Text>After svg</Text>
                    </Box>
                  </>
                ) : (
                  <IconButton
                    topMargin={4}
                    text="Add Crash Diagram"
                    onPress={() => navigation.navigate("DiagramTool")}
                    icon={<Icon color="white" name="add" size={50} />}
                  />
                )}
              </Section>
            </>
          )}
        </ScrollView>
        <VStack mt={4} alignItems="center" mb={8}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://forms.gle/aXVjxVrQU6jm3KUx6")
            }
          >
            <Text style={{ color: "blue" }}>Submit Feedback</Text>
          </TouchableOpacity>
        </VStack>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  addNonmotorist,
  addVehicle,
  addDriver,
  addPhoto,
};

const mapStateToProps = (state) => {
  return {
    driver: state.driverReducer,
    nonmotorist: state.nonmotoristReducer,
    vehicle: state.vehicleReducer,
    passenger: state.passengerReducer,
    quiz: state.quickquizReducer,
    road: state.roadReducer,
    photo: state.photosReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
