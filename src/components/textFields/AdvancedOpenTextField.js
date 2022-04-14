import React from "react";
import { connect } from "react-redux";
import { Input, Text, HStack } from "native-base";
import { styles } from "./AdvancedOpenTextField.style";
import { updateRoad } from "../../actions/RoadAction";
import * as Constants from "../../constants";
import vinValidator from "vin-validator";
import { dependencyParser } from "../../utils/dependencyHelper";
import TooltipView from "../Tooltip";
import QuestionSection from "../QuestionSection";
import IconButton from "../IconButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TextFieldValidation from "../../utils/TextFieldValidation.js";

//This component is used for "advanced" tool access (map, photo, VIN, and time)

const AdvancedOpenTextField = (props) => {
	const [visible, setVisible] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [buttonAppearance, setButtonAppearance] = React.useState("outline");
	const [invalidLength, setInvalidLength] = React.useState(false);
	const [invalidVin, setInvalidVin] = React.useState(false);
	const [isInvalid, setIsInvalid] = React.useState(false);
	const {
		data,
		key,
		id,
		questionReducer,
		submitFunction,
		pageChange,
		importFrom,
		updateRoad,
		dependencyID,
	} = props;
	let currId = data.humanReadableId;
	let status;
	const reducerData = questionReducer.data.find((entry) => entry.id == id);
	let existingData = !reducerData?.response ? null : reducerData.response;

	// Populate if value already exists in redux
	if (!value) {
		if (existingData != null) {
			if (
				existingData[currId] != null &&
				existingData[currId] != "" &&
				!value
			) {
				setValue(existingData[currId]);
			}
		}
	}

	const submitField = (text) => {
		//submits data to reducer and is shown as complete
		submitFunction({ id, question: currId, selection: text });
		switch (currId) {
			case Constants.VIN_ID: // VIN question id
				if (!vinValidator.validate(value)) {
					setInvalidVin(true);
				} else {
					setInvalidVin(false);
				}
				break;
			default:
				break;
		}
		ErrorMsg();
		setButtonAppearance("filled");
	};

	const onTextChange = (text) => {
		//Updated the reducer when user types
		let localText = text;
		if (!text) {
			submitFunction({ id, question: currId, selection: null });
			setIsInvalid(false);
		}
		let textFieldValidation = TextFieldValidation;
		textFieldValidation.submitField(localText);
		let localStatus = textFieldValidation.status;
		if (localStatus) {
			setIsInvalid(false);
		} else {
			setIsInvalid(true);
		}
		switch (currId) {
			case Constants.VIN_ID: // VIN question id
				if (!vinValidator.validate(value)) {
					setInvalidVin(true);
				} else {
					setInvalidVin(false);
				}
				break;
			default:
				break;
		}
		// Eventually the vin switch will live inside the TextFieldValidation Area
	};

	const valueSet = (currId) => {
		try {
			if (existingData[currId] != null) {
				return existingData[currId];
			}
		} catch (err) {
			return null;
		}
	};

	const onImportMapPress = () => {
		//Sends user to map tool
		let currStateVal = !reducerData?.response ? null : reducerData.response;

		pageChange("Map", { id: id, questionID: props.data.id });
	};

	const onImportCameraPress = () => {
		//Sends user to camera tool (for VIN, LICENSE PLATE, or DRIVERS LICENSE photo)

		let type;
		switch (importFrom) {
			case "VINCamera":
				type = Constants.VIN;
				break;
			case "plateCamera":
				type = Constants.PLATE;
				break;
			case "driverIDCamera":
				type = Constants.LICENSE;
				break;
			default:
				type = Constants.VIN;
		}
		pageChange("Scan", {
			objectID: id,
			type: type,
			questionId: currId,
			questionReducer: questionReducer,
		});
	};

	const onImportTimePress = () => {
		//Gets the current date and time for user and autofills question

		let now = new Date();
		let year = now.getFullYear().toString();
		let month = (now.getMonth() + 1).toString();
		let date = now.getDate().toString();
		let hours = now.getHours().toString();
		let min = now.getMinutes().toString();
		let fullDate =
			year + "/" + month + "/" + date + "\t" + hours + ":" + min;
		updateRoad({ id, question: data.humanReadableId, selection: fullDate });
	};

	const MapIcon = () => <Icon name="map-outline" color="white" size={25} />;

	const CameraIcon = () => (
		<Icon name="camera-outline" color="white" size={25} />
	);

	const ClockIcon = () => (
		<Icon name="clock-outline" color="white" size={25} />
	);

	const RenderHeaderIcon = () => {
		switch (importFrom) {
			case "map":
				return (
					<IconButton
						leftMargin={2}
						icon={MapIcon()}
						onPress={() => onImportMapPress()}
					/>
				);
			case "driverIDCamera":
				return (
					<IconButton
						leftMargin={2}
						icon={CameraIcon()}
						onPress={() => onImportCameraPress()}
					/>
				);
			case "plateCamera":
				return (
					<IconButton
						leftMargin={2}
						icon={CameraIcon()}
						onPress={() => onImportCameraPress()}
					/>
				);
			case "VINCamera":
				return (
					<IconButton
						leftMargin={2}
						icon={CameraIcon()}
						onPress={() => onImportCameraPress()}
					/>
				);
			case "time":
				return (
					<IconButton
						leftMargin={2}
						icon={ClockIcon()}
						onPress={() => onImportTimePress()}
					/>
				);
		}
	};

	const ErrorMsg = () => {
		if (invalidLength) {
			return "Too long!";
		}
		if (invalidVin) {
			return "Warning: Invalid VIN";
		}
		return null;
	};

	const tooltip = () => {
		return (
			<TooltipView toolTip={data.tooltip} helperImg={data.helperImg} />
		);
	};

	var renderComponent = true;
	if (data.questionDependency != undefined && props.response != null) {
		renderComponent = dependencyParser(props.response, data, dependencyID);
	}

	if (renderComponent) {
		return (
			<QuestionSection
				key={key}
				title={data.question}
				helperText={data.helperText}
				errorMessage={ErrorMsg()}
				tooltip={tooltip()}
				required={data.required}
			>
				<HStack justifyContent="space-between">
					<Input
						placeholder="Place your Text"
						value={valueSet(currId)}
						onChangeText={(text) => onTextChange(text)}
						w="90%"
					/>
					{RenderHeaderIcon()}
				</HStack>
			</QuestionSection>
		);
	} else {
		return null;
	}
};

const mapDispatchToProps = {
	updateRoad,
};

const mapStateToProps = (state, props) => {
	const { response } = state.storyReducer;
	const { reducer } = props;
	const questionReducer = state[reducer];
	return { questionReducer, response };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdvancedOpenTextField);
