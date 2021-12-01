import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import {TopNavigation, Card, CardHeader, Text, Button} from '@ui-kitten/components';
import { Platform, StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import Pdf from 'react-native-pdf';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import JSONconverter from '../utils/jsonConverter';
import backgroundSave from '../utils/backgroundSave';
//import RNFetchBlob from 'rn-fetch-blob';

class SaveToDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: this.getDefaultFilename(),
      devicePlatform: Platform.OS,
      reportSavedMessageVisible: false,
      reportSavedFailedMessageVisible: false,
      uri: [],
      data: [],
      encoding: [],
      format: [],
      isPDF: false,
    };
  }

async componentDidMount() {
    const format = this.props.navigation.state.params.format;
    console.log(format);
    // convert data to desired format
    const export_data = {
      driver: this.props.driver.data,
      nonmotorist: this.props.nonmotorist.data,
      vehicle: this.props.vehicle.data,
      passenger: this.props.passenger.data,
      road: this.props.road.data,
    };
    for (let i = 0; i < format.length; i++){
        if (format[i] === "pdf") {
          console.log("PDF LOOP")
          this.createPDF(export_data);
        } else {
          var converter = new JSONconverter();
          var file = converter.handleConverter(format[i], export_data);
          var encode = format[i] === "xlsx" ? 'ascii' : 'utf8';
          console.log('encode for html', encode);
          console.log('HTML FILE', typeof(file));
          this.state.data.push(file);
          this.state.format.push(format[i])
          console.log('data html', typeof(data[0]));

          this.state.encoding.push(encode);
//          this.setState({data: this.state.data.push(file), encoding: this.state.encoding.push(encode)});
        }
    }
  }

  // generate default filename
  getDefaultFilename() {
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
    var localDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return "Crash Report " + localDate + " at " + localTime;
  }

  // generate html and convert it into a PDF
  async createPDF(export_data) {
    var converter = new JSONconverter()
    // const htmlString = converter.handleConverter('pdftest', "");
    const htmlString = converter.handleConverter('pdf', export_data)
    let options = {
      html: htmlString,
      base64: true,
      fileName: 'crash_report',
    };
    try {
      const pdf_data = await RNHTMLtoPDF.convert(options);
      console.log("got PDF data");
//      let updated_data = [pdf_data.base64];

      this.state.uri.push(pdf_data.filePath);
      this.state.data.push(pdf_data.base64);
      this.state.isPDF= true;
      this.state.encoding.push("base64");
      this.state.format.push("pdf");
      console.log("what is uri",this.state.uri[0])
      console.log("Type of encoding",this.state.encoding[0])
    } catch (error) {
      console.log('this is the pdf converter error->', error);
    }
  }

  // update filename based on user input
  setUserInputFilename = (text) => {
    this.setState({ filename: text });
  }

  async saveData() {
      const format = this.state.format;
      var device_platform = Platform.OS
      var RNFS = require('react-native-fs');

      // Notes for Android External Storage
      // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
      // for android: externalStorageDirectoryPath: /storage/emulated/0
      // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
      var path_ios = RNFS.DocumentDirectoryPath + '/' + this.state.filename;
      var path_android = RNFS.ExternalStorageDirectoryPath + '/' + this.state.filename;
      //const path = this.state.devicePlatform === 'ios' ? path_ios : path_android;
      let path;
      if (this.state.devicePlatform === 'ios'){
        path = path_ios;
      } else {
        path = path_android;
      }
//      console.log("this.state.data: " + this.state.data)
      console.log("this.state.format: " + this.state.format)
      for (let i = 0; i < format.length; i++){
      // write the file and save to Files app on device:
          try {
            if (format[i] == "pdf"){
                var filepath = path  + "." + format[i]
                console.log('data and encoding', format[i], this.state.encoding[i]);
                RNFS.writeFile(filepath, this.state.data[i], "base64");
                console.log(filepath);
//                console.log('Data: ' + this.state.data[i]);
                this.setState({ reportSavedMessageVisible: true });

            } else {
                var filepath = path  + "." + format[i]
                console.log('data and encoding', format[i], this.state.encoding[i]);
                RNFS.writeFile(filepath, this.state.data[i], this.state.encoding[i]);
//                console.log('FILE WRITTEN!');
//                console.log('Data: ' + this.state.data[i]);
                this.setState({ reportSavedMessageVisible: true });

            }


//            return path;
          } catch (err) {
            console.log("message is here: ",err.message);
            console.log("at loop ", i);
            this.setState({ reportSavedFailedMessageVisible: true });
            console.log("failed with", this.state.format[i]);
//            return null;
          }

      }
      // clear background save
      const clearBackgroundSave = new backgroundSave();
      var deleted = await clearBackgroundSave.deleteCapturedState();

      return path;
  }

  render() {
    const saveReportHeader = () => (
      <CardHeader title="Edit filename below." />
    )

    return(
      <SafeAreaView style={{flex:1}}>
        <TopNavigation title="Save Crash Report To Files" alignment="center" leftControl={this.props.BackAction()}/>

        <Card id="SaveReport" header={saveReportHeader}>
          <TextInput id="userInputFilename"
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            defaultValue={this.state.filename}
            onChangeText={this.setUserInputFilename}
          />
        </Card>

        {this.state.isPDF &&
          <View style={styles.container}>
            <Pdf
                source={      this.state.filename,
                              this.state.devicePlatform,
                              this.state.reportSavedMessageVisible,
                              this.state.reportSavedFailedMessageVisible,
                              this.state.uri[0],
                              this.state.data[0],
                              this.state.encoding[0],
                              this.state.isPDF}
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

        <Button
          size='medium'
          onPress={() => this.saveData()}>
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
          <Text style={material.subheading}>
            Your report did not save successfully. Please try again later.
          </Text>
        </MaterialDialog>
      </SafeAreaView>
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
        photos: state.photosReducer,
        story: state.storyReducer,
        road: state.roadReducer
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