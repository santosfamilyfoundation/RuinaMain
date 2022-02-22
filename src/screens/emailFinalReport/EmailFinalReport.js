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
      uri: '',
      data: '',
      format: '',
      encoding: '',
      isPDF: false,
    };
    this.changeFilename = this.changeFilename.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
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
        this.setState({encoding:'base64', format:format});
        this.createPDF(data);
      } else {
        console.log('desired format is not pdf')
        var converter = new JSONconverter();
        var file = await converter.handleConverter(format, data);
        var encoding = format === "xlsx" ? 'base64' : 'utf8';
        this.setState({data: file, encoding: encoding, format:format});
      }
    }
  }

  // update the filename
  changeFilename(text) {
    this.setState({filename: text});
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

  // save data as file inside app in order send email with attachment
  async saveDataInternal(filename) {
    var RNFS = require('react-native-fs');
    var path = RNFS.DocumentDirectoryPath + '/' + filename;

    // write the file
    try {
        if (this.state.format === 'xlsx' && (this.props.photo.image.length > 0)) {
            const photoPath = RNFS.DocumentDirectoryPath + '/' + this.state.filename + '.svg'
            path = [path, photoPath]
            const svgFile = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + this.props.photo.image
            let photoResult = await RNFS.writeFile(path[1], svgFile, 'utf8');
            let fileResult  = await RNFS.writeFile(path[0], this.state.data, this.state.encoding);
        } else {
            let result = await RNFS.writeFile(path, this.state.data, this.state.encoding);
        }
        console.log('FILE WRITTEN!');
        console.log(path);

        // clear background save
        const clearBackgroundSave = new backgroundSave();
        var deleted = await clearBackgroundSave.deleteCapturedState();
        return path;
    } catch(error) {
      console.log(error.message);
      return null;
    }
  }

  // send email based on the inputted filename
  // leave everything else blank, except subject (subject = filename)
  async sendEmail(path, filename) {
    let attachments
    if (this.props.photo.image.length) {
        attachments = [{path:path[0]}, {path:path[1]}]
    } else {
        attachments = [{path:path}]
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
    var path = []
    for (let i = 0; i < this.state.format.length; i++){
        path += await this.saveDataInternal(this.state.filename + "." + this.state.format);
     }
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
                    console.log(error);
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
