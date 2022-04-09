/*
  The BarcodeScan component is a class component used to scan driver license and license plates.
  If the user is scanning a driver license, the component will render a view of the camera and
  will search for barcode of a driver license. If the user is scanning a license plate, the
  component will render a view of the camera and will search for the letters and numbers on a
  United States license plate. For both renders, the component will render a "Go Back" button that
  allows the user to navigate back to the form screen without processing any information.
*/

import React, { PureComponent } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import { updateDriver } from "../../actions/DriverAction";
import { updateVehicle } from "../../actions/VehicleAction";
import { connect } from "react-redux";
import * as Constants from "../../constants";
import Camera, {
	Aspect,
	CaptureQuality,
	TorchMode,
} from "react-native-openalpr";

// Custom styles for views and text display
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "black",
	},
	preview: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	capture: {
		flex: 0,
		backgroundColor: "#fff",
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: "center",
		margin: 20,
	},
	textContainer: {
		position: "absolute",
		top: 100,
		left: 50,
	},
	text: {
		textAlign: "center",
		fontSize: 20,
	},
});

class BarcodeScan extends PureComponent {
	constructor(props) {
		super(props);
		this.scanDetails = props.navigation.state.params;
		this.type = this.scanDetails.type;
		this.questionId = this.scanDetails.questionId;
		this.questionReducer = this.scanDetails.questionReducer;
		this.state = {
			licenseData: "",
			plate: "",
		};
		console.log(props)
	}

	/*
    This function processes the data received from scanning the driver license
    barcode. The data is split into an array and parsed into a usable format.
    The function loops through the array and updates the driver reducer with the
    appropriate data. Once driver reducer and state are fully updated, the
    screen navigates back to the driver form.
  */
	onGoogleVisionBarcodesDetected(scanResult) {
		for (let barcode of scanResult.barcodes) {
			if (barcode.type === "PDF417") {
				data = barcode.rawData;
				const splitData = data.split("\n");
				var elements = {};
				for (var element of splitData) {
					element = element.trim();
					if (element.includes("ANSI") || element.includes("AAMV")) {
						// handle first line of DL output where one field is hidden
						const cutElement = element.substring(
							element.indexOf("DL") + 2
						); // remove string before first instance of DL
						const indexOfData =
							cutElement.substring(cutElement).indexOf("DL") + 2; // find second instance of DL in element
						elements[
							cutElement.substring(indexOfData, indexOfData + 3)
						] = cutElement.substring(indexOfData + 3);
					}
					if (element[0] == "D") {
						elements[element.substring(0, 3)] =
							element.substring(3);
					}
				}
				const id = this.props.navigation.state.params.objectID;
				if ("DAC" in elements) {
					// add first name
					this.props.updateDriver({
						id,
						question: Constants.FIRST_NAME_ID,
						selection: elements["DAC"],
					});
				}
				if ("DAD" in elements) {
					// add middle inital
					this.props.updateDriver({
						id,
						question: Constants.MIDDLE_INITIAL_ID,
						selection: elements["DAD"][0],
					});
				}
				if ("DCS" in elements) {
					// add last name
					this.props.updateDriver({
						id,
						question: Constants.LAST_NAME_ID,
						selection: elements["DCS"],
					});
				}
				if ("DBB" in elements) {
					// add date of birth
					const dob = elements["DBB"];
					const formattedDOB =
						dob.substring(dob.length - 4) +
						"/" +
						dob.substring(0, 2) +
						"/" +
						dob.substring(2, 4);
					this.props.updateDriver({
						id,
						question: Constants.DATE_OF_BIRTH_ID,
						selection: formattedDOB,
					});
				}
				if ("DAG" in elements) {
					// add street address
					this.props.updateDriver({
						id,
						question: Constants.STREET_ADDRESS_ID,
						selection: elements["DAG"],
					});
				}
				if ("DAI" in elements) {
					// add city
					this.props.updateDriver({
						id,
						question: Constants.CITY_ID,
						selection: elements["DAI"],
					});
				}
				if ("DAJ" in elements) {
					// add state
					this.props.updateDriver({
						id,
						question: Constants.STATE_ID,
						selection: elements["DAJ"],
					});
				}
				if ("DAK" in elements) {
					// add ZIP code
					var zip = elements["DAK"];
					if (zip.substring(zip.length - 4) == "0000") {
						// if last four digits are unknown, ignore them
						zip = zip.substring(0, zip.length - 4);
					}
					this.props.updateDriver({
						id,
						question: Constants.ZIP_CODE_ID,
						selection: zip,
					});
				}
				if ("DBC" in elements) {
					// add sex
					var sex = elements["DBC"];
					sex = sex == 2 ? 0 : sex; // if sex is female(2), change to correct id (0)
					this.props.updateDriver({
						id,
						question: Constants.SEX_ID,
						selection: sex,
					});
				}
				if ("DAQ" in elements) {
					// add driver's license id
					this.props.updateDriver({
						id,
						question: Constants.DLICENSE_ID,
						selection: elements["DAQ"],
					});
				}
				if ("DCD" in elements) {
					// add license endorsements
					const endorsmentValue = elements["DCD"].toUpperCase();
					var endorsementCode = "";
					switch (endorsmentValue) {
						case "NONE":
							endorsementCode = "None/Not Applicable";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "H":
							endorsementCode = "1";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "N":
							endorsementCode = "2";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "P":
							endorsementCode = "3";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "S":
							endorsementCode = "4";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "T":
							endorsementCode = "5";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "X":
							endorsementCode = "6";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						case "X":
							endorsementCode = "7";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_ENDORSEMENTS_ID,
								selection: endorsementCode,
							});
							break;
						default:
							break;
					}
				}
				if ("DCA" in elements) {
					// add driver's license class
					const licenseClass = elements["DCA"];
					var classChoice = "";
					switch (licenseClass) {
						case "B":
							classChoice = "2";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_CLASS_ID,
								selection: classChoice,
							});
							break;
						case "C":
							classChoice = "Class C";
							this.props.updateDriver({
								id,
								question: Constants.DLICENSE_CLASS_ID,
								selection: classChoice,
							});
							break;
					}
				}
				this.setState({
					licenseData: barcode.rawData,
				});
				this.props.navigation.goBack();
			}
		}
		return;
	}

	/*
    This function processes the OCR of the plate scan. When a plate is successfully read, the
    vehicle reducer is updated with plate information. The state is also updated with plate number.
    After the state a reducer are updated, the screen automatically navigates back to the vehicle
    form.
  */
	onPlateRecognized = ({ plate, confidence }) => {
		console.log(plate);
		const id = this.props.navigation.state.params.objectID;
		this.props.updateVehicle({
			id,
			question: Constants.LICENSE_PLATE_ID,
			selection: plate,
		});
		this.setState({ plate });
		this.props.navigation.goBack();
	};

	render() {
		if (this.type == Constants.LICENSE) {
			return (
				<View style={styles.container}>
					<RNCamera
						ref={(ref) => {
							this.camera = ref;
						}}
						style={styles.preview}
						type={RNCamera.Constants.Type.back}
						captureAudio={false}
						flashMode={RNCamera.Constants.FlashMode.on}
						androidCameraPermissionOptions={{
							title: "Permission to use camera",
							message:
								"We need your permission to use your camera",
							buttonPositive: "Ok",
							buttonNegative: "Cancel",
						}}
						onGoogleVisionBarcodesDetected={this.onGoogleVisionBarcodesDetected.bind(
							this
						)}
						googleVisionBarcodeType={
							RNCamera.Constants.GoogleVisionBarcodeDetection
								.BarcodeType.PDF_417
						}
						googleVisionBarcodeMode={
							RNCamera.Constants.GoogleVisionBarcodeDetection
								.BarcodeMode.ALTERNATE
						}
					/>
					<Button
						title="Go back"
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
			);
		} else if (this.type == Constants.PLATE) {
			return (
				<View style={styles.container}>
					<Camera
						style={styles.preview}
						aspect={Aspect.fill}
						captureQuality={CaptureQuality.medium}
						country="us"
						onPlateRecognized={this.onPlateRecognized}
						plateOutlineColor="#ff0000"
						showPlateOutline
						zoom={0}
						torchMode={TorchMode.auto}
						touchToFocus
					/>
					<Text style={styles.text}>{this.state.plate}</Text>
					<Button
						title="Go back"
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
			);
		}
	}
}

const mapDispatchToProps = {
	updateDriver,
	updateVehicle,
};

const mapStateToProps = (state) => {
	const { barcodeDetails, plateNumber } = state;
	return { barcodeDetails, plateNumber };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScan);
