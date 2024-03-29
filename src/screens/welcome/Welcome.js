/*
  The Welcome component is the landing page for the app. The screen has a header
  that has a title and button to import a new set of questions. When the import
  button is pressed, a dialog appears with a text inupt field for a Google Sheet
  link. In the body of the page there are two buttons. The top button ("Start
  New Report") starts a new report and navigates to the QuickSurvey screen. The
  bottom button ("Continue Report") opens a dialog with a single select list of
  saved reports. The report is selceted and navigates to the QuickSurvey screen
  to check if the saved report has data.
*/
import React, { Component } from "react";
import { combineReducers } from "redux";
import { SafeAreaView } from "react-navigation";
import {
	Linking,
	ActivityIndicator,
	Text,
	PermissionsAndroid,
} from "react-native";
import {
	Button,
	Divider,
	Container,
	Heading,
	VStack,
	Center,
	View,
	Spinner,
	Pressable,
	Box,
	AlertDialog,
	Input,
	Toast,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import backgroundSave from "../../utils/backgroundSave";
import {
	MaterialDialog,
	SinglePickerMaterialDialog,
} from "react-native-material-dialog";
import { material } from "react-native-typography";
import { connect } from "react-redux";
import TopNavigation from "../../components/TopNavigation";
import { resetDriver } from "../../actions/DriverAction";
import { resetNonmotorist } from "../../actions/NonmotoristAction";
import { resetPassenger } from "../../actions/PassengerAction";
import { resetVehicle } from "../../actions/VehicleAction";
import { resetRoad } from "../../actions/RoadAction";
import { resetQuiz } from "../../actions/QuickQuizActions";
import { resetMap } from "../../actions/MapAction";
import { resetStory } from "../../actions/StoryActions";
import { resetPhoto } from "../../actions/PhotoAction";
import { DEFAULT_SPREADSHEET } from "../../constants";
import RNFS from "react-native-fs";

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.stateManager = new backgroundSave("", false);
		this.state = {
			loading: true,
			displayOutputTest: false,
			autoSavedSession: false,
			autoSavedSessionDialogBoxVisible: false,
			filePickerDialogBoxVisible: false,
			filePathSelected: false,
			selectedFile: { label: "", value: "" },
			importQuestions: false,
			link: "",
		};
		this.unfinishedReportsPresent = false;
	}

	/*
    This function downloads the spreadsheet from a provided link and saves it to
    the questions folder in the app file directory. When the file successfully
    downloads, the dialog closes and returns true. When the file fails to
    download the dialog closes and returns false.
  */
	async getMobileSpreadsheet(link) {
		// create a path you want to write to
		let path = RNFS.DocumentDirectoryPath + "/questions";
		let errorBool;
		// download the file
		await RNFS.downloadFile({
			fromUrl: link,
			toFile: path,
		})
			.promise.then((response) => {
				this.setState({ importQuestions: false });
			})
			.catch((error) => {
				console.log("DOWNLOAD ERROR: ", error);
				errorBool = true;
				this.setState({ importQuestions: false });
			});
		this.setState({ link: "" });
		if (errorBool) {
			return false;
		}
		return true;
	}

	/*
    This function resets all the reducers for the app, fetches the list of
    saved files, and checks if there are questions for the reports saved in the
    app file directories.
  */
	async componentDidMount() {
		// reset all the app reducers
		this.props.resetDriver();
		this.props.resetNonmotorist();
		this.props.resetPassenger();
		this.props.resetRoad();
		this.props.resetVehicle();
		this.props.resetQuiz();
		this.props.resetStory();
		this.props.resetMap();
		this.props.resetPhoto();
		// Fetch the list of file paths of all in-progress reports on devices, if any.
		await this.stateManager.getFilePaths();
		this.unfinishedReportsAbsent = this.stateManager.filePaths.length == 0;
		// Fetch the data from the question folder in the app file directory
		const spreadsheetExists = await RNFS.exists(
			RNFS.DocumentDirectoryPath + "/questions"
		);
		// If the data does not exist, fetch the default spreadsheet
		if (!spreadsheetExists) {
			await this.getMobileSpreadsheet(DEFAULT_SPREADSHEET);
		}
		this.setState({ loading: false });
	}

	/*
    This function checks if the state manager identified any in-progress reports.
    If there is a non-empty list, update the state to show the dialog with a
    list of saved reports.
  */
	checkAutoSavedSession() {
		if (this.stateManager.filePaths != null) {
			this.setState({
				autoSavedSession: true,
				filePickerDialogBoxVisible: true,
			});
		} else {
			this.setState({
				autoSavedSession: false,
				filePickerDialogBoxVisible: false,
			});
		}
	}

	// This function handles closing the Question Import Dialog
	handleAlertDialogClose = () => this.setState({ importQuestions: false });

	render() {
		const navigateTo = (loc) => {
			this.props.navigation.navigate(loc, {
				autoSavedSession: this.state.autoSavedSession,
				selectedFile: this.state.selectedFile,
			});
		};
		// Controls the display of spreadsheet download success or failure message
		const importToast = (importSuccess) => {
			if (importSuccess) {
				Toast.show({
					title: "Questions successfully imported",
					placement: "top",
					status: "success",
					accessibilityAnnouncement:
						"Questions successfully imported",
					accessibilityLiveRegion: "polite",
					duration: 8000,
				});
			} else {
				Toast.show({
					title: "Questions failed to import",
					placement: "top",
					status: "error",
					accessibilityAnnouncement:
						"Questions failed to import. Ruina will use the default questions for the report forms.",
					accessibilityLiveRegion: "polite",
					duration: 8000,
				});
			}
		};
		if (this.state.loading) {
			return (
				<Center flex={1}>
					<Spinner size="lg" accessibilityLabel="Loading App" />
				</Center>
			);
		} else {
			return (
				<React.Fragment>
					<TopNavigation title="RUINA">
						<Button
							onPress={() =>
								this.setState({ importQuestions: true })
							}
						>
							Import Questions
						</Button>
					</TopNavigation>
					<Center flex={1} px="3">
						<Box>
							<Button
								onPress={() => navigateTo("Survey")}
								size="lg"
								p={4}
							>
								Start New Report
							</Button>
							<Button
								onPress={() => this.checkAutoSavedSession()}
								size="lg"
								p={4}
								isDisabled={
									this.stateManager.filePaths.length === 0
								}
								mt={8}
							>
								Continue Report
							</Button>
						</Box>
					</Center>
					<VStack alignItems="center" mb={8}>
						<TouchableOpacity
							onPress={() =>
								Linking.openURL(
									"https://forms.gle/aXVjxVrQU6jm3KUx6"
								)
							}
						>
							<Text style={{ color: "blue" }}>
								Submit Feedback
							</Text>
						</TouchableOpacity>
						<Text textAlign="center">
							{
								"Built by students at Olin College of Engineering in partnership with the Volpe Center and Santos Family Foundation"
							}
						</Text>
					</VStack>
					<AlertDialog
						isOpen={this.state.importQuestions}
						onClose={this.handleAlertDialogClose}
					>
						<AlertDialog.Content>
							<AlertDialog.CloseButton />
							<AlertDialog.Header>
								Import Crash Report Questions
							</AlertDialog.Header>
							<AlertDialog.Body>
								<Text>
									Enter the link to the Google Sheet
									containing your report questions. Double
									check that the sheet is viewable to anyone
									with the link.
								</Text>
								<Input
									my={4}
									value={this.state.link}
									onChangeText={(text) => {
										this.setState({ link: text });
									}}
									placeholder="Spreadsheet Link"
								/>
							</AlertDialog.Body>
							<AlertDialog.Footer>
								<Button.Group space={2}>
									<Button
										colorScheme="coolGray"
										onPress={this.handleAlertDialogClose}
									>
										Cancel
									</Button>
									<Button
										onPress={async () => {
											const importSuccess =
												await this.getMobileSpreadsheet(
													this.state.link
												);
											importToast(importSuccess);
										}}
									>
										Import
									</Button>
								</Button.Group>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog>
					<SinglePickerMaterialDialog
						title={
							"Choose the unfinished report you want to continue"
						}
						scrolled
						items={this.stateManager.filePaths.map(
							(row, index) => ({
								value: index,
								label: row,
							})
						)}
						visible={this.state.filePickerDialogBoxVisible}
						selectedItem={this.state.selectedFile}
						onCancel={() =>
							this.setState({ filePickerDialogBoxVisible: false })
						}
						onOk={(result) => {
							this.setState({
								filePathSelected: true,
								filePickerDialogBoxVisible: false,
								selectedFile: result.selectedItem,
								autoSavedSession: true,
							});

							this.props.navigation.navigate("Survey", {
								autoSavedSession: true,
								selectedFile: result.selectedItem,
								questions: this.questions,
							});
						}}
					/>
				</React.Fragment>
			);
		}
	}
}

const mapDispatchToProps = {
	resetDriver,
	resetNonmotorist,
	resetPassenger,
	resetVehicle,
	resetRoad,
	resetQuiz,
	resetStory,
	resetMap,
	resetPhoto,
};

const mapStateToProps = (state, action) => {
	return {
		driver: state.driverReducer,
		nonmotorist: state.nonmotoristReducer,
		vehicle: state.vehicleReducer,
		passenger: state.passengerReducer,
		quiz: state.quickquizReducer,
		road: state.roadReducer,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
