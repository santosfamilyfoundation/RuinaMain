import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import {
  Button,
  Heading,
  Divider,
  Text,
  Box,
  Input,
  VStack,
} from "native-base";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import { MaterialDialog } from "react-native-material-dialog";
import { material } from "react-native-typography";
import Pdf from "react-native-pdf";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import JSONconverter from "../../utils/jsonConverter";
import backgroundSave from "../../utils/backgroundSave";
import { getDefaultFilename } from "../../utils/helperFunctions";
import TopNavigation from "../../components/TopNavigation";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Section from "../../components/Section";
import {
  writeAsStringAsync,
  EncodingType,
  deleteAsync,
} from "expo-file-system";
import { StorageAccessFramework } from "expo-file-system";

class SaveToDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: getDefaultFilename(),
      devicePlatform: Platform.OS,
      reportSavedMessageVisible: false,
      reportSavedFailedMessageVisible: false,
      uri: "",
      data: "",
      encoding: "",
      reportMimeType: null,
      isPDF: false,
    };
  }

  async componentDidMount() {
    const format = this.props.navigation.state.params.format;
    // convert data to desired format
    const data = {
      driver: this.props.driver.data,
      nonmotorist: this.props.nonmotorist.data,
      vehicle: this.props.vehicle.data,
      passenger: this.props.passenger.data,
      road: this.props.road.data,
      photo: this.props.photo.image,
    };

    if (format === "pdf") {
      this.setState({
        encoding: EncodingType.Base64,
        reportMimeType: "application/pdf",
      });
      this.createPDF(data);
    } else {
      var converter = new JSONconverter();
      var file = await converter.handleConverter(format, data);
      var encoding =
        format === "xlsx" ? EncodingType.Base64 : EncodingType.UTF8;
      var reportMimeType =
        format === "xlsx"
          ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          : "text/html";
      this.setState({
        data: file,
        encoding: encoding,
        reportMimeType: reportMimeType,
      });
    }
  }

  // update filename based on user input
  setUserInputFilename = (text) => {
    this.setState({ filename: text });
  };

  createPDF = async (data) => {
    var converter = new JSONconverter();
    // const htmlString = converter.handleConverter('pdftest', "");
    const htmlString = converter.handleConverter("pdf", data);
    let options = {
      html: htmlString,
      base64: true,
      fileName: "crash_report",
    };
    try {
      const data = await RNHTMLtoPDF.convert(options);
      console.log("got PDF data");
      this.setState({ uri: data.filePath, data: data.base64, isPDF: true });
    } catch (error) {
      console.log("error->", error);
    }
  };

  async saveData() {
    const format = this.props.navigation.state.params.format;
    const directoryUri = this.props.navigation.state.params.directoryUri;

    var device_platform = Platform.OS;
    var RNFS = require("react-native-fs");

    // Notes for Android External Storage
    // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
    // for android: externalStorageDirectoryPath: /storage/emulated/0
    // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
    const path_ios =
      RNFS.DocumentDirectoryPath + "/" + this.state.filename + "." + format;
    const path_android = await StorageAccessFramework.createFileAsync(
      directoryUri,
      this.state.filename + "." + format,
      this.state.reportMimeType
    );
    //const path = this.state.devicePlatform === 'ios' ? path_ios : path_android;
    let path;
    if (this.state.devicePlatform === "ios") {
      path = path_ios;
    } else {
      path = path_android;
    }

    let photoPath;
    let svgFile;
    if (format === "xlsx" && this.props.photo.image.length > 0) {
      photoPath = await StorageAccessFramework.createFileAsync(
        directoryUri,
        this.state.filename + ".svg",
        "image/svg+xml"
      );
      svgFile =
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
        this.props.photo.image;
    }

    // write the file and save to Files app on device:
    try {
      let fileResult = await writeAsStringAsync(path, this.state.data, {
        encoding: this.state.encoding,
      });
      if (photoPath) {
        let photoResult = await writeAsStringAsync(photoPath, svgFile, {
          encoding: EncodingType.UTF8,
        });
      }
      console.log("FILE WRITTEN!");
      console.log("Data: " + data + "\n" + "Path: " + path);
      this.setState({ reportSavedMessageVisible: true });

      // clear background save
      const clearBackgroundSave = new backgroundSave();
      var deleted = await clearBackgroundSave.deleteCapturedState();

      return path;
    } catch (err) {
      console.log(err.message);
      this.setState({ reportSavedFailedMessageVisible: true });
      await deleteAsync(path_android);
      if (photoPath) {
        await deleteAsync(photoPath);
      }
      return null;
    }
  }

  render() {
    return (
      <>
        <ScrollView>
          <TopNavigation
            title="Save Crash Report to Files"
            backButton
            navigation={this.props.navigation}
          >
            <IconButton
              onPress={() => {
                this.props.navigation.navigate("Welcome");
              }}
              icon={
                <Icon color="white" size={25} name="file-document-outline" />
              }
              text="Start New Report"
            />
          </TopNavigation>
          <Section title="Edit filename below.">
            <TextInput
              id="userInputFilename"
              value={this.state.filename}
              onChangeText={this.setUserInputFilename}
            />
          </Section>
          {this.state.isPDF && (
            <View style={styles.container}>
              <Pdf
                source={this.state}
                enableRTL={true}
                onLoadComplete={(numberOfPages, filePath) => {
                  console.log(`number of pages: ${numberOfPages}`);
                }}
                onError={(error) => {
                  console.log(error);
                }}
                style={styles.pdf}
              />
            </View>
          )}
          <Button onPress={() => this.saveData()} m={4}>
            Save Report
          </Button>
          <MaterialDialog
            title={"Your Report is saved successfully!"}
            visible={this.state.reportSavedMessageVisible}
            onCancel={() => {
              this.setState({ reportSavedMessageVisible: false });
            }}
            onOk={() => {
              this.setState({ reportSavedMessageVisible: false });
            }}
          >
            <Text style={material.subheading}>
              Your report has been succesfully saved to the "Files/My Files" app
              on your device inside either SDCARD or "Internal storage".
            </Text>
          </MaterialDialog>

          <MaterialDialog
            title={"Fail to save your report!"}
            visible={this.state.reportSavedFailedMessageVisible}
            onCancel={() => {
              this.setState({ reportSavedFailedMessageVisible: false });
            }}
            onOk={() => {
              this.setState({ reportSavedFailedMessageVisible: false });
            }}
          >
            <Text>
              Your report did not save successfully. Please try again later.
            </Text>
          </MaterialDialog>
          <SafeAreaView alignItems="center">
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://forms.gle/aXVjxVrQU6jm3KUx6")
              }
            >
              <Text style={{ color: "blue" }}>Submit Feedback</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    driver: state.driverReducer,
    nonmotorist: state.nonmotoristReducer,
    vehicle: state.vehicleReducer,
    passenger: state.passengerReducer,
    quiz: state.quickquizReducer,
    photo: state.photosReducer,
    story: state.storyReducer,
    road: state.roadReducer,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});

export default connect(mapStateToProps)(SaveToDevice);
