/*
  The BarcodeScan component is a class component used to scan driver license and license plates.
  If the user is scanning a driver license, the component will render a view of the camera and
  will search for barcode of a driver license. If the user is scanning a license plate, the
  component will render a view of the camera and will search for the letters and numbers on a
  United States license plate. For both renders, the component will render a "Go Back" button that
  allows the user to navigate back to the form screen without processing any information.

	The license plate scanning uses from the react-native-openalpr library. Refer to the library
	for questions about the Camera component.

	Props:
			scanDetails - the object that maps the type, questionId, and questionReducer
			type - the type of scan (License or Plate)
			questionId - the id for the question
			questionReducer - the reducer function to save the question answer
*/

import React, { PureComponent } from "react";
import { StyleSheet, View, PermissionsAndroid } from "react-native";
import { Button, Spinner, Center } from "native-base";
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

// Custom styles for views
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
			cameraPermissionGranted: false,
		};
		this.requireCameraPermission();
	}

	/*
	This function checks the device's camera permissions.
	*/
	requireCameraPermission = async () => {
		try {
			const grantedCamera = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: "Android Camera Permission",
					message: "Ruina needs access to your camera to scan.",
					buttonNeutral: "Ask Me Later",
					buttonNegative: "Cancel",
					buttonPositive: "Okay",
				}
			);
			if (grantedCamera === PermissionsAndroid.RESULTS.GRANTED) {
				this.setState({ cameraPermissionGranted: true });
			} else {
				// Denied permissions will redirect to form
				this.setState({ filePermissionsGranted: false });
			}
		} catch (err) {
			console.warn(err);
		}
	};

	/*
    This function processes the data received from scanning the driver license
    barcode. The data is split into an array and parsed into a usable format.
    The function loops through the array and updates the driver reducer with the
    appropriate data. Once driver reducer and state are fully updated, the
    screen navigates back to the driver form.
    */
	onGoogleVisionBarcodesDetected(scanResult) {
		for (let barcode of scanResult.barcodes) {
			// Check if the barcode type is a stacked linear barcode, which is used for
			// driver's license barcodes
			if (barcode.type === Constant.BARCODETYPE) {
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
				if (Constants.BARCODE_FIRST_NAME in elements) {
					// add first name
					this.props.updateDriver({
						id,
						question: Constants.FIRST_NAME_ID,
						selection: elements[Constants.BARCODE_FIRST_NAME],
					});
				}
				if (Constants.BARCODE_MIDDLE_INITIAL in elements) {
					// add middle inital
					this.props.updateDriver({
						id,
						question: Constants.MIDDLE_INITIAL_ID,
						selection:
							elements[Constants.BARCODE_MIDDLE_INITIAL][0],
					});
				}
				if (Constants.BARCODE_LAST_NAME in elements) {
					// add last name
					this.props.updateDriver({
						id,
						question: Constants.LAST_NAME_ID,
						selection: elements[Constants.BARCODE_LAST_NAME],
					});
				}
				if (Constants.BARCODE_DATE_OF_BIRTH in elements) {
					// add date of birth
					const dob = elements[Constants.BARCODE_DATE_OF_BIRTH];
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
				if (Constants.BARCODE_STREET_ADDRESS in elements) {
					// add street address
					this.props.updateDriver({
						id,
						question: Constants.STREET_ADDRESS_ID,
						selection: elements[Constants.BARCODE_STREET_ADDRESS],
					});
				}
				if (Constants.BARCODE_CITY in elements) {
					// add city
					this.props.updateDriver({
						id,
						question: Constants.CITY_ID,
						selection: elements[Constants.BARCODE_CITY],
					});
				}
				if (Constants.BARCODE_STATE in elements) {
					// add state
					this.props.updateDriver({
						id,
						question: Constants.STATE_ID,
						selection: elements[Constants.BARCODE_STATE],
					});
				}
				if (Constants.BARCODE_ZIP_CODE in elements) {
					// add ZIP code
					var zip = elements[Constants.BARCODE_ZIP_CODE];
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
				if (Constants.BARCODE_SEX in elements) {
					// add sex
					var sex = elements[Constants.BARCODE_SEX];
					sex = sex == 2 ? 0 : sex; // if sex is female(2), change to correct id (0)
					this.props.updateDriver({
						id,
						question: Constants.SEX_ID,
						selection: sex,
					});
				}
				if (Constants.BARCODE_DLICENSE in elements) {
					// add driver's license id
					this.props.updateDriver({
						id,
						question: Constants.DLICENSE_ID,
						selection: elements[Constants.BARCODE_DLICENSE],
					});
				}
				if (Constants.BARCODE_DLICENSE_ENDORSEMENTS in elements) {
					// add license endorsements
					const endorsmentValue =
						elements[
							Constants.BARCODE_DLICENSE_ENDORSEMENTS
						].toUpperCase();
					const dlEndorsementMapping = {
						NONE: "None/Not Applicable",
						H: "1",
						N: "2",
						P: "3",
						S: "4",
						T: "5",
						X: "6",
					};
					this.props.updateDriver({
						id,
						question: Constants.DLICENSE_ENDORSEMENTS_ID,
						selection: dlEndorsementMapping[endorsmentValue],
					});
				}

				if (Constants.BARCODE_DLICENSE_CLASS in elements) {
					// add driver's license class
					const licenseClass =
						elements[Constants.BARCODE_DLICENSE_CLASS];

					const dlClassMappping = { B: "2", C: "Class C" };
					this.props.updateDriver({
						id,
						question: Constants.DLICENSE_CLASS_ID,
						selection: dlClassMappping[licenseClass],
					});
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
		if (this.state.cameraPermissionGranted) {
			if (this.type == Constants.LICENSE) {
				// rendering driver's license scanner
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
							mb={2}
							mt={2}
							onPress={() => this.props.navigation.goBack()}
						>
							Go Back
						</Button>
					</View>
				);
			} else if (this.type == Constants.PLATE) {
				// rendering license plate scanner
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
						<Button
							mb={2}
							mt={2}
							onPress={() => this.props.navigation.goBack()}
						>
							Go Back
						</Button>
					</View>
				);
			}
		} else {
			return (
				<Center flex={1}>
					<Spinner size="lg" accessibilityLabel="Loading App" />
				</Center>
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
