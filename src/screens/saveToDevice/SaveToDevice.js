import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, Heading, Divider, Text, Box, Input, VStack } from 'native-base';
import { Platform, StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import Pdf from 'react-native-pdf';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import JSONconverter from '../../utils/jsonConverter';
import backgroundSave from '../../utils/backgroundSave';
import { createPDF, getDefaultFilename } from '../../utils/helperFunctions'
import TopNavigation from '../../components/TopNavigation';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Section from '../../components/Section'

class SaveToDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: getDefaultFilename(),
      devicePlatform: Platform.OS,
      reportSavedMessageVisible: false,
      reportSavedFailedMessageVisible: false,
      uri: '',
      data: '',
      encoding: '',
      isPDF: false,
    };
  }

componentDidMount() {
    const format = this.props.navigation.state.params.format;
    console.log(format);
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
      this.setState({encoding:'base64'});
      createPDF(data);
    } else {
      var converter = new JSONconverter();
      var file = converter.handleConverter(format, data);
      var encoding = format === "xlsx" ? 'ascii' : 'utf8';
      this.setState({data: file, encoding: encoding});
    }
  }

  // update filename based on user input
  setUserInputFilename = (text) => {
    this.setState({ filename: text });
  }

  async saveData() {
      const format = this.props.navigation.state.params.format;
      var device_platform = Platform.OS
      var RNFS = require('react-native-fs');

      // Notes for Android External Storage
      // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
      // for android: externalStorageDirectoryPath: /storage/emulated/0
      // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
      const path_ios = RNFS.DocumentDirectoryPath + '/' + this.state.filename + "." + format;
      const path_android = RNFS.ExternalStorageDirectoryPath + '/' + this.state.filename + "." + format;
      //const path = this.state.devicePlatform === 'ios' ? path_ios : path_android;
      let path;
      if (this.state.devicePlatform === 'ios'){
        path = path_ios;
      } else {
        path = path_android;
      }

      // write the file and save to Files app on device:
      try {
        let result = await RNFS.writeFile(path, this.state.data, this.state.encoding);
        console.log('FILE WRITTEN!');
        console.log('Data: ' + data + '\n' + 'Path: ' + path);
        this.setState({ reportSavedMessageVisible: true });

        // clear background save
        const clearBackgroundSave = new backgroundSave();
        var deleted = await clearBackgroundSave.deleteCapturedState();

        return path;
      } catch (err) {
        console.log(err.message);
        this.setState({ reportSavedFailedMessageVisible: true });
        return null;
      }
  }

  render() {
    return(
        <>
        <TopNavigation title="Save Crash Report to Files" backButton navigation={this.props.navigation}>
            <IconButton onPress={() => {this.props.navigation.navigate('Welcome')}} icon={<Icon color="white" size={25} name='file-document-outline'/>}  text='Start New Report'/>
        </TopNavigation>
        <Section title="Edit filename below.">
            <TextInput id="userInputFilename"
              value={this.state.filename}
              onChangeText={this.setUserInputFilename}
            />
        </Section>
        {this.state.isPDF &&
          <View style={styles.container}>
            <Pdf
                source={this.state}
                enableRTL={true}
                onLoadComplete={(numberOfPages,filePath)=>{
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                style={styles.pdf}/>
          </View>
        }
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
            Your report has been succesfully saved to the "Files/My Files" app on your device inside either SDCARD or "Internal storage".
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
        </>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer,
        photo: state.photosReducer,
        story: state.storyReducer,
        road: state.roadReducer,
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});

export default connect(mapStateToProps)(SaveToDevice)
