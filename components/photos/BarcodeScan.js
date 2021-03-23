'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    // console.log('BARCODE TYPE');
    // console.log(scanResult.type);
    // console.log('DATA')
    // console.log(scanResult.barcodes[1]);
    // console.log('type');
    // console.log(typeof scanResult)
    for (let barcode of scanResult.barcodes) {
      // console.log(barcode)
      if (barcode.type === 'PDF417') {
        console.log(barcode.rawData);
        const indexOfNumber = barcode.rawData.indexOf('DAQ');
        const endOfNumber = barcode.rawData.indexOf('D', indexOfNumber + 1);
        const number = barcode.rawData.substring(indexOfNumber+3, endOfNumber);
        console.log(number);
        const id = this.props.navigation.state.params.objectID;

        this.props.updateDriver({id, question:Constants.DLICENSE_ID, selection: number})
        this.setState({
          licenseData: barcode.rawData,
        });
        this.props.navigation.goBack();
      }
    }
    // console.log(scanResult)
    // if (scanResult.data != null) {
    // 	if (!this.barcodeCodes.includes(scanResult.data)) {
    // 	  this.barcodeCodes.push(scanResult.data);
    // 	  console.warn('onBarCodeRead call');
    // 	}
    // }
    return;
  }

  saveData() {
    const id = this.props.navigation.state.params.objectID;
  }

  render() {

    console.log(this.props.navigation.state);
    const {barcodeScanAction, driver} = this.props;
    console.log(barcodeScanAction);

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
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //   console.log('BARCODE');
          //   for (const barcode in barcodes) {
          //     console.log(barcode.googleVisionBarcodeType);
          //   }
          //
          //   // console.log(barcodes[0].format);
          //   if (barcodes[0].format === 'PDF417') {
          //     console.log(barcodes);
          //   }
          //   // navigation.goBack();
          // }}

          onGoogleVisionBarcodesDetected={this.onGoogleVisionBarcodesDetected.bind(this)}
          googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.PDF_417}
          googleVisionBarcodeMode={
            RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
          }
          // onBarCodeRead={this.onBarCodeRead.bind(this)}
        />
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
// AppRegistry.registerComponent('App', () => CameraExample);
export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScan);
