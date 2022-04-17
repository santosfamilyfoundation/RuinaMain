/*
The Home component is a class component that renders the Home screen, which displays all the forms that the user
has to fill out. The Home screen has two views: the edit view, which allows the user to edit the number of vehicles,
passengers, nonmotorists, etc., and the main view, which allows the user to navigate to the respective form by clicking
on the form icon buttons.

Component props:
- navigation - object that handles navigation between screens
- driver - driver object
- nonmotorist 
- vehicle
- passenger
- road
- photo
*/

import React, { Component } from "react";
import { View, ScrollView, BackHandler, Linking } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { VStack, HStack, Box, Text } from "native-base";
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

      // add actions for adding vehicle and nonmotorist data to the redux
      this._addNonmotorist = this._addNonmotorist.bind(this);
      this._addVehicleSection = this._addVehicleSection.bind(this);

      // get form questions
      this.questions = this.props.navigation.getParam("questions");

      /*
      The state contains the following information:
      - edit: a boolean determining whether the user is accessing the edit view or the main view
      - filePath: the filepath that the current report should be autosaved to
      - openOldFile: a boolean that indicates whether the current report is an in-progress report we have re-opened
       */
      this.state = {
         edit: props.edit || false,
         filePath: this.props.navigation.getParam("filePath"),
         openOldFile: this.props.navigation.getParam("openOldFile"),
      };
   }

   /*
   This function adds a new nonmotorist to the global state.
   */
   _addNonmotorist() {
      // generate unique id for nonmotorist
      let nonmotoristID = uuid.v1();
      this.props.addNonmotorist({ id: nonmotoristID });
   }

   /*
   This function add a new vehicle and associated driver to the global state.
   */
   _addVehicleSection() {
      // generate unique ids for vehicle and driver
      let vehicleID = uuid.v1();
      let driverID = uuid.v1();
      // add vehicle and driver to redux
      this.props.addVehicle({ vehicleID, driverID });
      this.props.addDriver({ driverID, vehicleID });
   }

   /*
   Filters the set of all questions to only questions that are associated with
   the road.
   */
   filterRoadQuestions = () => {
      return this.questions.data.filter((question) =>
         question.display.includes("road")
      );
   };

   componentDidMount() {
      // add event listener to go back when back button is pressed
      BackHandler.addEventListener(
         "hardwareBackPress",
         this.handleBackButtonPressAndroid
      );
   }

   componentWillUnmount() {
      // remove event listener when user no longer in Home
      BackHandler.removeEventListener(
         "hardwareBackPress",
         this.handleBackButtonPressAndroid
      );
   }

   /*
   Disables back button press on Android.
   */
   handleBackButtonPressAndroid = () => {
      return true;
   };

   render() {
      // set up data object with keys for each data type
      const data = {
         driver: this.props.driver.data,
         nonmotorist: this.props.nonmotorist.data,
         vehicle: this.props.vehicle.data,
         passenger: this.props.passenger.data,
         road: this.props.road.data,
         quiz: this.props.quiz,
         photo: this.props.photo,
      };

      // create background save object to be able autosave report
      const captureState = new backgroundSave(
         this.state.filePath,
         this.state.openOldFile
      );
      // save report
      captureState.captureCurrentState(JSON.stringify(data));

      const roadForm = this.filterRoadQuestions();

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

      // generate controls to show up in the top-right corner of the screen based on the view
      // if edit, show Confirm Changes button, otherwise show Edit Sections and Export Report buttons
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
                           icon={
                              <Icon color="white" name="assignment" size={25} />
                           }
                        />
                     </>
                  )}
               </TopNavigation>
            </View>
         );
      };

      // render the right view
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
                           icon={
                              <Icon color="white" name="edit-road" size={50} />
                           }
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
                        icon={
                           <Icon color="white" name="local-taxi" size={50} />
                        }
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
                        icon={
                           <Icon color="white" name="person-add" size={50} />
                        }
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
                                 onPress={() =>
                                    navigation.navigate("DiagramTool")
                                 }
                                 icon={
                                    <Icon color="white" name="edit" size={50} />
                                 }
                              />
                              <Box m={4} borderColor="secondary.700">
                                 <SvgXml
                                    xml={photo.image}
                                    width="100%"
                                    height="50%"
                                 />
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
