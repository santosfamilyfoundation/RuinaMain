'use strict';
import React, { PureComponent } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { updateDriver } from '../../actions/DriverAction';
import { connect } from 'react-redux';
import * as Constants from '../../constants';

class BarcodeScan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      licenseData: '',
    };
  }

  onGoogleVisionBarcodesDetected(scanResult) {
    for (let barcode of scanResult.barcodes) {
      if (barcode.type === 'PDF417') {
        data = barcode.rawData;
        const splitData = data.split("\n");
        var elements = {};
        for (var element of splitData) {
          element = element.trim();
          if (element.includes('ANSI') || element.includes('AAMV')) { // handle first line of DL output where one field is hidden
            const cutElement = element.substring(element.indexOf('DL')+2); // remove string before first instance of DL
            const indexOfData = cutElement.substring(cutElement).indexOf('DL') + 2; // find second instance of DL in element
            elements[cutElement.substring(indexOfData, indexOfData + 3)] = cutElement.substring(indexOfData+3);
          }
          if (element[0] == 'D') {
            elements[element.substring(0, 3)] = element.substring(3);
          }
        }
        const id = this.props.navigation.state.params.objectID;
        if ("DAC" in elements) { // add first name
          this.props.updateDriver({id, question:Constants.FIRST_NAME_ID, selection: elements["DAC"]});
        }
        if ("DAD" in elements) { // add middle inital
          this.props.updateDriver({id, question:Constants.MIDDLE_INITIAL_ID, selection: elements["DAD"][0]});
        }
        if ("DCS" in elements) { // add last name
          this.props.updateDriver({id, question:Constants.LAST_NAME_ID, selection: elements["DCS"]});
        }
        if ("DBB" in elements) { // add date of birth
          const dob = elements["DBB"];
          const formattedDOB = dob.substring(dob.length-4) + "/" + dob.substring(0, 2) + "/" + dob.substring(2, 4);
          this.props.updateDriver({id, question:Constants.DATE_OF_BIRTH_ID, selection: formattedDOB});
        }
        if ("DAG" in elements) { // add street address
          this.props.updateDriver({id, question:Constants.STREET_ADDRESS_ID, selection: elements["DAG"]});
        }
        if ("DAI" in elements) { // add city
          this.props.updateDriver({id, question:Constants.CITY_ID, selection: elements["DAI"]});
        }
        if ("DAJ" in elements) { // add state
          this.props.updateDriver({id, question:Constants.STATE_ID, selection: elements["DAJ"]});
        }
        if ("DAK" in elements) { // add ZIP code
          var zip = elements["DAK"];
          if (zip.substring(zip.length - 4) == '0000') { // if last four digits are unknown, ignore them
            zip = zip.substring(0, zip.length-4);
          }
          this.props.updateDriver({id, question:Constants.ZIP_CODE_ID, selection: zip});
        }
        if ("DBC" in elements) { // add sex
          var sex = elements["DBC"]
          sex = (sex == 2 ? 0 : sex) // if sex is female(2), change to correct id (0)
          this.props.updateDriver({id, question:Constants.SEX_ID, selection: sex});
        }
        if ("DAQ" in elements) { // add driver's license id
          this.props.updateDriver({id, question:Constants.DLICENSE_ID, selection: elements["DAQ"]});
        }
        if ("DCD" in elements) { // add license endorsements
          const endorsmentValue = elements["DCD"].toUpperCase();
          var endorsementCode = "";
          switch (endorsmentValue) {
            case "NONE":
              endorsementCode = "None/Not Applicable";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "H":
              endorsementCode = "1";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "N":
              endorsementCode = "2";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "P":
              endorsementCode = "3";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "S":
              endorsementCode = "4";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "T":
              endorsementCode = "5";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "X":
              endorsementCode = "6";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            case "X":
              endorsementCode = "7";
              this.props.updateDriver({id, question:Constants.DLICENSE_ENDORSEMENTS_ID, selection: endorsementCode});
              break;
            default:
              break;
          }
        }
        if ("DCA" in elements) { // add driver's license class
          const licenseClass = elements["DCA"];
          var classChoice = "";
          switch (licenseClass) {
            case "B":
              classChoice = "2";
              this.props.updateDriver({id, question:Constants.DLICENSE_CLASS_ID, selection: classChoice});
              break;
            case "C":
              classChoice = "Class C";
              this.props.updateDriver({id, question:Constants.DLICENSE_CLASS_ID, selection: classChoice});
              break;
          }

        }
        this.setState({
          licenseData: barcode.rawData,
        });
        this.props.navigation.goBack();
      }
    }
    return;
  }

  saveData() {
    const id = this.props.navigation.state.params.objectID;
  }

  render() {

    const {barcodeScanAction, driver} = this.props;

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

          onGoogleVisionBarcodesDetected={this.onGoogleVisionBarcodesDetected.bind(this)}
          googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.PDF_417}
          googleVisionBarcodeMode={
            RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
          }
        />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const mapDispatchToProps = {
  updateDriver,
}

const mapStateToProps = (state) => {
  const { barcodeDetails } = state
  return { barcodeDetails }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScan);
