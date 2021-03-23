import React, { Component } from 'react';
import { SafeAreaView} from 'react-navigation';
import { View, PermissionsAndroid } from 'react-native';
import { Button, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './OutputPDFTest.style';

import Pdf from 'react-native-pdf';
import PDFGenerator from 'rn-pdf-generator';

import {coverpageString} from '../../utils/html_for_pdf_pages/coverpageString';

class OutputPDFTest extends Component {

  constructor(props) {
    super(props);
    this.state = { uri: '', data: '' };
    this.generateDocument();
  };

  generateDocument() {
    PDFGenerator.fromHTML(coverpageString, 'http://localhost')
    .then((data) => {
      console.log("got PDF data");
      this.setState({uri: `data:application/pdf;base64,${data}`  , data: data});
    })
    .catch(err  => {
      console.log('error->', err);
    });
  };

  // generate default filename
  getDefaultFilename() {
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
    var localDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return "Crash Report " + localDate + " at " + localTime + ".pdf";
  };

  requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Android External Storage Permission",
          message:
            "Ruina needs access to your external storage to save the report ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use external storage");
      } else {
        console.log("external permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async saveData() {
    var RNFS = require('react-native-fs');
    const filename = this.getDefaultFilename();
    const path = RNFS.ExternalStorageDirectoryPath + '/' + filename;
    this.requestExternalStoragePermission();

    // write the file and save to Files app on device:
    try {
      // await RNFS.copyFile(this.state.uri, path);
      let result = await RNFS.writeFile(path, this.state.data, 'base64');
      console.log('FILE WRITTEN!');
      // return path;
    } catch (err) {
      console.log(err.message);
      // return null;
    }
  };

  render() {
    debugger
      if(this.state.uri === '')
        return null

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='OutputPDFTest' alignment='center' leftControl={this.props.BackAction()}/>
        <View style={styles.container}>
          <Pdf
              source={this.state}
              onLoadComplete={(numberOfPages,filePath)=>{
                  console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page,numberOfPages)=>{
                  console.log(`current page: ${page}`);
              }}
              onError={(error)=>{
                  console.log(error);
              }}
              style={styles.pdf}/>
        </View>
        <Button
          style={styles.footerControl}
          size='medium'
          onPress={() => this.saveData()}>
          Save Report
        </Button>
      </SafeAreaView>
    );
  };
};

export default OutputPDFTest;
