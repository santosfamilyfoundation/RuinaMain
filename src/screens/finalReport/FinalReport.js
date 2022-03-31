import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import {
  VStack,
  Button,
  Heading,
  Divider,
  Center,
  Text,
  Box,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  Linking,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
import {
  MaterialDialog,
  SinglePickerMaterialDialog,
  MultiPickerMaterialDialog,
} from "react-native-material-dialog";
import * as Constants from "../../constants";
import Section from "../../components/Section";
import TopNavigation from "../../components/TopNavigation";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StorageAccessFramework } from "expo-file-system";

class FinalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseLocalFormatVisible: false,
      chooseEmailFormatVisible: false,
      chooseReportFormatSelectedItem: undefined,
      exportAction: undefined,
      directoryUri: "",
      filePermissionsGranted: false,
      filePermissionsErrorMessageVisible: false,
    };
    this.requestExternalStoragePermission();
  }

  requestExternalStoragePermission = async () => {
    try {
      const permissions =
        await StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        console.log("You can use external storage");
        this.setState({ filePermissionsGranted: true });
        this.setState({ directoryUri: permissions.directoryUri });
      } else {
        // console.log("external permission denied");
        this.setState({ filePermissionsGranted: false });
        this.setState({ filePermissionsErrorMessageVisible: true });
      }
    } catch (err) {
      console.warn(err);
    }
  };
  resetState() {
    const { navigation } = this.props;

    navigation.navigate("Welcome");
    this.props.state = {};
  }
  render() {
    const { navigation } = this.props;

    const navigateSaveToDevice = (format, directoryUri) => {
      console.log("Save Report to Device!", directoryUri);
      navigation.navigate("SaveToDevice", {
        format: format,
        directoryUri: directoryUri,
      });
    };

    const navigateEmail = (format) => {
      console.log("navigating to email");
      navigation.navigate("EmailFinalReport", { format: format });
    };

    const navigateDatabase = (format) => {
      console.log("SEND REPORT TO DATABASE!");
      navigation.navigate("ReportToDatabase");
    };
    const file_format_extensions = Constants.ALLOW_JSON_EXPORT
      ? ["json", "pdf", "html", "xlsx"]
      : ["pdf", "html", "xlsx"];

    const cardButton = (message, navigateTo, disabledButton) => {
      if (message.includes('Local Device')) {
        return <Button onPress={() => this.setState({chooseLocalFormatVisible: true, exportAction: navigateTo})}
            isDisabled={!this.state.filePermissionsGranted || disabledButton}
          >
            {message}
          </Button>
      } else if (message.includes('Email')) {
      return <Button onPress={() => this.setState({chooseEmailFormatVisible: true,exportAction: navigateTo})}
            isDisabled={!this.state.filePermissionsGranted || disabledButton}
        >
            {message}
        </Button>
      } else {
        return <Button onPress={() => this.setState({exportAction: navigateTo})}
            isDisabled={!this.state.filePermissionsGranted || disabledButton}
        >
            {message}
        </Button>
      }
    };

    const feedbackButton = () => (
      <Button
        onPress={() => Linking.openURL("https://forms.gle/1sJzVj9MCzSRfzSV8")}
      >
        Submit Feedback
      </Button>
    );

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title="Final Report" backButton navigation={navigation}>
          <IconButton
            onPress={() => this.resetState()}
            icon={<Icon color="white" size={25} name="file-document-outline" />}
            text="Start New Report"
          />
        </TopNavigation>
        <ScrollView>
          <Center>
            <VStack mt={5} space={9}>
              <Section title="Save to Local Device">
                <Text my={2}>
                  Press this button to save the crash report to local device.
                </Text>
                {cardButton(
                  "Save Report to Local Device",
                  navigateSaveToDevice
                )}
              </Section>
              <Section title="Email">
                <Text my={2}>Press this button to email the crash report.</Text>
                {cardButton("Email Report", navigateEmail)}
              </Section>
              <Section title="Save to Database">
                <Text my={2}>FEATURE COMING SOON</Text>
                {cardButton("Save Report to Database", navigateDatabase, true)}
              </Section>
              <Section title="Feedback">
                <Text my={2}>
                  Tell us what you liked and what you did not like so we can
                  make your experience better.
                </Text>
                {feedbackButton()}
              </Section>
            </VStack>
          </Center>
          <MultiPickerMaterialDialog
            title={"Choose report export format"}
            scrolled
            items={file_format_extensions.map((row, index) => ({
              value: index,
              label: "." + row,
            }))}
            visible={this.state.chooseLocalFormatVisible}
            selectedItem={this.state.multiPickerSelectedItems}
            onCancel={() => this.setState({ chooseLocalFormatVisible: false })}
            onOk={(result) => {
              this.setState({ multiPickerVisible: false });

              this.setState({
                  chooseReportFormatSelectedItem: result.selectedItems,
              });
              console.log(
                "chooseReportFormatSelectedItem:",
                this.state.chooseReportFormatSelectedItem
              );
              this.setState({ chooseLocalFormatVisible: false });
              console.log("result:", result.selectedItems);
              console.log(
                "pop up window state:",
                this.state.chooseLocalFormatVisible
              );
              var export_types = [];
              for (let i = 0; i < result.selectedItems.length; i++) {
                export_types.push(result.selectedItems[i].label.substring(1));
              }
              console.log("export_types:", export_types);
              this.state.exportAction(export_types, this.state.directoryUri);
              console.log("exportAction", this.state.exportAction);
            }}
          />
          <MultiPickerMaterialDialog
              title={"Choose report export format"}
              scrolled
              items={file_format_extensions.map((row, index) => ({
                value: index,
                label: "." + row,
              }))}
              visible={
                this.state.chooseEmailFormatVisible
              }
              selectedItem={this.state.multiPickerSelectedItems}
              onCancel={() => this.setState({ chooseEmailFormatVisible: false })}
            onOk={(result) => {
                      this.setState({
                        chooseReportFormatSelectedItem: result.selectedItems,
                      });
                      console.log(
                        "chooseReportFormatSelectedItem:",
                        this.state.chooseReportFormatSelectedItem
                      );
                      this.setState({ chooseEmailFormatVisible: false });
                      console.log("result:", result.selectedItems);
                      console.log(
                        "pop up window state:",
                        this.state.chooseLocalFormatVisible
                      );
                      var export_types = [];
                      for (let i = 0; i < result.selectedItems.length; i++) {
                        export_types.push(result.selectedItems[i].label.substring(1));
                      }
                      console.log("export_types:", export_types);
                      this.state.exportAction(export_types, this.state.directoryUri);
                      console.log("exportAction", this.state.exportAction);
                    }}            />
        </ScrollView>
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
    quiz: state.quickquizReducer,
    story: state.storyReducer,
    road: state.roadReducer,
    photo: state.photosReducer,
  };
};

export default connect(mapStateToProps)(FinalReport);
