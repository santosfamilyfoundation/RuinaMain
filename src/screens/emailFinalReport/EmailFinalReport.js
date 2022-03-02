import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, Dimensions, VStack, Linking, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button, Text } from 'native-base';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import Mailer from 'react-native-mail';
import JSONconverter from '../../utils/jsonConverter';
import NetInfoAPI from "../../utils/NetAPI";
import Pdf from 'react-native-pdf';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import backgroundSave from '../../utils/backgroundSave';
import TopNavigation from '../../components/TopNavigation';
import Section from '../../components/Section';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDefaultFilename } from '../../utils/helperFunctions';

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
      const format = this.props.navigation.state.params.format;
      // convert data to desired format
      const export_data = {
        driver: this.props.driver.data,
        nonmotorist: this.props.nonmotorist.data,
        vehicle: this.props.vehicle.data,
        passenger: this.props.passenger.data,
        road: this.props.road.data,
        photo: this.props.photo.image,
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
//<<<<<<< HEAD
//
//    }
//=======
  };
//>>>>>>> dev

  // update the filename
  changeFilename(text) {
    this.setState({filename: text});
  };

  // generate html and convert it into a PDF
//<<<<<<< HEAD
  async createPDF(export_data) {
    var converter = new JSONconverter()
    // const htmlString = converter.handleConverter('pdftest', "");
    const htmlString = converter.handleConverter('pdf', export_data)
//=======
//  async createPDF(data) {
//    var converter = new JSONconverter()
//    const htmlString = await converter.handleConverter('pdf', data)
//>>>>>>> dev
    let options = {
      html: htmlString,
      base64: true,
      fileName: 'crash_report',
    };
    try {
      const pdf_data = await RNHTMLtoPDF.convert(options);
      console.log("got PDF data");
//<<<<<<< HEAD
//      let updated_data = [pdf_data.base64];

      this.state.uri.push(pdf_data.filePath);
      this.state.data.push(pdf_data.base64);
      this.state.isPDF= true;
      this.state.encoding.push("base64");
      this.state.format.push("pdf");
      console.log("what is uri",this.state.uri[0])
      console.log("Type of encoding",this.state.encoding[0])
//=======
//      this.setState({uri: pdf_data.filePath, data: pdf_data.base64, isPDF:true});
//>>>>>>> dev
    } catch (error) {
      console.log('this is the pdf converter error->', error);
    }
  }

  // save data as file inside app in order send email with attachment
//<<<<<<< HEAD
//
//
//  async saveDataInternal(filename, i) {
//      const format = this.state.format;
//        var device_platform = Platform.OS
//        var RNFS = require('react-native-fs');
//
//        // Notes for Android External Storage
//        // for andorid: externalDirectoryPath: /storage/emulated/0/Android/data/com.ruina/files
//        // for android: externalStorageDirectoryPath: /storage/emulated/0
//        // for ios: DocumentDirectoryPath: /var/mobile/Containers/Data/Application/12F7361A-BC3E-42C9-B81E-FBBBF7BA3E2C/Documents
//        var path_ios = RNFS.DocumentDirectoryPath + '/' + this.state.filename;
//        var path_android = RNFS.ExternalStorageDirectoryPath + '/' + this.state.filename;
//        //const path = this.state.devicePlatform === 'ios' ? path_ios : path_android;
//        let path;
//        if (this.state.devicePlatform === 'ios'){
//          path = path_ios;
//
//        } else {
//          path = path_android;
//=======
  async saveDataInternal(filename) {
    console.log(this.state)
    var RNFS = require('react-native-fs');
    var path = [RNFS.DocumentDirectoryPath + '/' + filename];
    // write the file
    try {
        let result = await RNFS.writeFile(path[0], this.state.data, this.state.encoding);
        if (this.state.format === 'xlsx' && (this.props.photo.image.length > 0)) {
            const photoPath = RNFS.DocumentDirectoryPath + '/' + this.state.filename + '.svg'
            path.push(photoPath)
            const svgFile = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + this.props.photo.image
            let photoResult = await RNFS.writeFile(path[1], svgFile, 'utf8');
//>>>>>>> dev
        }
  //      console.log("this.state.data: " + this.state.data)
        console.log("this.state.format: " + this.state.format)
        console.log("file_path android: " + path_android)
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
//<<<<<<< HEAD
//=======
    } catch(error) {
      console.log( "ERROR:", error.message);
      return null;
    }
//>>>>>>> dev
  }

  // send email based on the inputted filename
  // leave everything else blank, except subject (subject = filename)
  async sendEmail(path, filename) {
//<<<<<<< HEAD
//
//    console.log('Sending email!' + path);
//    var fp = []
//    for (let i = 0; i < this.state.format.length; i++){
//        var str = path + "." + this.state.format[i];
//        fp.push({path:str, type:this.state.format[i]})
//    }
//
//        await Mailer.mail({
//          subject: "Sending " + "\"" + filename + "\"",
//          recipients: [''],
//          ccRecipients: [''],
//          bccRecipients: [''],
//          body: '',
//          customChooserTitle: "Send Crash Report", // Android only (defaults to "Send Mail")
//          isHTML: true,
//          attachments: fp,
//        }, (error, event) => {
//          console.log('errror', error)
//          Alert.alert(
//            error,
//            event,
//            [
//              {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
//              {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
//            ],
//            { cancelable: true }
//          )
//        });
//
//
//
//=======
    let attachments
    if (filename.includes('xlsx') && this.props.photo.image.length) {
        attachments = [{path:path[0]}, {path:path[1]}]
    } else {
        attachments = [{path:path[0]}]
    }
    console.log('Sending email!');
    await Mailer.mail({
      subject: "Sending " + "\"" + filename + "\"",
      recipients: [''],
      ccRecipients: [''],
      bccRecipients: [''],
      body: '',
      customChooserTitle: "Send Crash Report", // Android only (defaults to "Send Mail")
      isHTML: true,
      attachments: attachments,
    }, (error, event) => {
      console.log('errror', error)
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
//>>>>>>> dev
  }
  // handles the entire email workflow
  async handleEmail() {
    const net = new NetInfoAPI();
    let netStatus = await net.checkNetOnce();
    // net info is wraped in net.status
    if (netStatus==false){
      // deal with internet not connected
      this.setState({ offlineStatus: true });
      return;
    }
    // save data internally
    var path = await this.saveDataInternal(this.state.filename + "." + this.state.format);
    // send email
    await this.sendEmail(path, this.state.filename );
  }
  // required method that creates components of email screen
  render() {
    return(
      <SafeAreaView style={{flex:1}}>
        <TopNavigation id="emailNavBar" title="Email Crash Report" backButton navigation={this.props.navigation}>
            <IconButton onPress={() => {this.props.navigation.navigate('Welcome')}} icon={<Icon color="white" size={25} name='file-document-outline'/>}  text='Start New Report'/>
        </TopNavigation>
        <Section title="Edit filename below.">
            <Input
                defaultValue = {this.state.filename}
                onChangeText = {this.changeFilename}
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
                    console.log("PDF error:",error);
                }}
                style={styles.pdf}/>
          </View>
        }

        <Button
          onPress={() => this.handleEmail()} m={4}>
          Send Report
        </Button>
        <SafeAreaView m={25} alignItems ="center">
          <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/aXVjxVrQU6jm3KUx6')}><Text style={{ color: 'blue' }}>Submit Feedback</Text></TouchableOpacity>
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
            You can not send emails while being offline.
            Please check your internet connection and try again later.
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
        photo: state.photosReducer,
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
   marginHorizontal: 5,
   marginTop: 20,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
})

export default connect(mapStateToProps)(EmailFinalReport)
