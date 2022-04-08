import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import {
  StyleSheet,
  Alert,
  View,
  Dimensions,
  VStack,
  Linking,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input, Button, Text } from "native-base";
import { MaterialDialog } from "react-native-material-dialog";
import { material } from "react-native-typography";
import Mailer from "react-native-mail";
import JSONconverter from "../../utils/jsonConverter";
import NetInfoAPI from "../../utils/NetAPI";
import Pdf from "react-native-pdf";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import backgroundSave from "../../utils/backgroundSave";
import TopNavigation from "../../components/TopNavigation";
import Section from "../../components/Section";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getDefaultFilename } from "../../utils/helperFunctions";

class EmailFinalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: getDefaultFilename(),
      offlineStatus: false,
      uri: [],
      data: [],
      format: [],
      encoding: [],
      isPDF: false,
    };
    this.changeFilename = this.changeFilename.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  async componentDidMount() {
    const format = this.props.navigation.getParam("format");
    const questions = this.props.navigation.getParam("questions");

    // convert data to desired format
    const export_data = {
      driver: this.props.driver.data,
      nonmotorist: this.props.nonmotorist.data,
      vehicle: this.props.vehicle.data,
      passenger: this.props.passenger.data,
      road: this.props.road.data,
      photo: this.props.photo.image,
    };

    for (let i = 0; i < format.length; i++) {
      if (format[i] === "pdf") {
        this.createPDF(export_data);
      } else {
        var converter = new JSONconverter();
        var file = await converter.handleConverter(format[i], export_data, questions);
        var encode = format[i] === "xlsx" ? "base64" : "utf8";
        this.state.data.push(file);
        this.state.format.push(format[i]);
        this.state.encoding.push(encode);
      }
    }
  }

  // update the filename
  changeFilename(text) {
    this.setState({ filename: text });
  }

  // generate html and convert it into a PDF
  async createPDF(export_data) {
    var converter = new JSONconverter();
    const htmlString = converter.handleConverter("pdf", export_data);
    let options = {
      html: htmlString,
      base64: true,
      fileName: "crash_report",
    };
    try {
      const pdf_data = await RNHTMLtoPDF.convert(options);
      this.state.uri.push(pdf_data.filePath);
      this.state.data.push(pdf_data.base64);
      this.state.isPDF = true;
      this.state.encoding.push("base64");
      this.state.format.push("pdf");
    } catch (error) {
      console.log("PDF Converter Error: ", error);
    }
  }

  async saveDataInternal() {
    var RNFS = require("react-native-fs");
    var pathList = [];
    // write the file
      for (let i = 0; i < this.state.format.length; i++) {
        // write the file and save to Files app on device:
        const filePath = RNFS.DocumentDirectoryPath + "/" + this.state.filename + "." + this.state.format[i];
        try {
            await RNFS.writeFile(filePath, this.state.data[i], this.state.encoding[i])
           if (
              this.state.format[i] === "xlsx" &&
              this.props.photo.image.length > 0
            ) {
              const photoPath =
                RNFS.DocumentDirectoryPath + "/" + this.state.filename + ".svg";
              const svgFile =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
                this.props.photo.image;
              await RNFS.writeFile(photoPath, svgFile, "utf8");
               pathList.push(photoPath);
          }
          pathList.push(filePath);
        } catch (err) {
          console.log("File Save Error: ", err.message);
          console.log("failed with", this.state.format[i]);
          break
        }
      }
      return pathList;
  }

  async sendEmail(path, filename) {
    var fp = [];
    for (let i = 0; i < path.length; i++) {
      fp.push({ path: path[i] });
    }
    await Mailer.mail(
      {
        subject: "Sending " + '"' + filename + '"',
        recipients: [""],
        ccRecipients: [""],
        bccRecipients: [""],
        body: "",
        customChooserTitle: "Send Crash Report", // Android only (defaults to "Send Mail")
        isHTML: true,
        attachments: fp,
      },
      (error, event) => {
        console.log("Mailer Error: ", error);
        Alert.alert(
          error,
          event,
          [
            {
              text: "Ok",
              onPress: () => console.log("OK: Email Error Response"),
            },
            {text: "Cancel",
                onPress: () => console.log("Cancel:Email Error Reponse")
            }
          ],
          { cancelable: false }
        );
      }
    );
  }
  async handleEmail() {
    const net = new NetInfoAPI();
    let netStatus = await net.checkNetOnce();
    if (netStatus == false) {
      this.setState({ offlineStatus: true });
      return;
    }
    // save data internally
    var paths = await this.saveDataInternal();
    // send email
    await this.sendEmail(paths, this.state.filename);
  }
  // required method that creates components of email screen
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          id="emailNavBar"
          title="Email Crash Report"
          backButton
          navigation={this.props.navigation}
        >
          <IconButton
            onPress={() => {
              this.props.navigation.navigate("Welcome");
            }}
            icon={<Icon color="white" size={25} name="file-document-outline" />}
            text="Start New Report"
          />
        </TopNavigation>
        <Section title="Edit filename below.">
          <Input
            defaultValue={this.state.filename}
            onChangeText={this.changeFilename}
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
                console.log("PDF error:", error);
              }}
              style={styles.pdf}
            />
          </View>
        )}

        <Button onPress={() => this.handleEmail()} m={4}>
          Send Report
        </Button>
        <SafeAreaView m={25} alignItems="center">
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://forms.gle/aXVjxVrQU6jm3KUx6")
            }
          >
            <Text style={{ color: "blue" }}>Submit Feedback</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <MaterialDialog
          title={"Can't email when offline!"}
          visible={this.state.offlineStatus}
          onCancel={() => {
            this.setState({ offlineStatus: false });
          }}
          onOk={() => {
            this.setState({ offlineStatus: false });
          }}
        >
          <Text style={material.subheading}>
            You can not send emails while being offline. Please check your
            internet connection and try again later.
          </Text>
        </MaterialDialog>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    driver: state.driverReducer,
    nonmotorist: state.nonmotoristReducer,
    vehicle: state.vehicleReducer,
    passenger: state.passengerReducer,
    photo: state.photosReducer,
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
    marginHorizontal: 5,
    marginTop: 20,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});

export default connect(mapStateToProps)(EmailFinalReport);
