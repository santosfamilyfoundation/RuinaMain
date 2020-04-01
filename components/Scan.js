import React, {Component} from 'react';
import {
    PermissionsAndroid,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import { updateVehicle } from '../actions/VehicleAction';
import { updateDriver } from '../actions/DriverAction';
import AnylineOCR, { getLicenseExpiryDate } from 'anyline-ocr-react-native-module';
import { connect } from 'react-redux';
import * as Constants from '../constants';

import VINconfig from '../anylineConfigs/VINconfig';
import DriversLicenseconfig from '../anylineConfigs/DriversLicenseconfig';
import LicensePlateconfig from '../anylineConfigs/LicensePlateconfig';

import ScanResult from './ScanResult';

class Scan extends Component {

    state = {
        hasScanned: false,
        result: '',
        imagePath: '',
        fullImagePath: '',
        barcode: '',
        scanMode: '',
        meterType: '',
        cutoutBase64: '',
        fullImageBase64: '',
        text: ''
    };

    openOCR = () => {
      let config;
      console.log(this.props.navigation.state.params.type)
      switch(this.props.navigation.state.params.type) {
      case Constants.VIN:
        config = VINconfig;
        break;
      case Constants.LICENSE:
        config = DriversLicenseconfig;
        break;
      case Constants.PLATE:
        config = LicensePlateconfig;
        break;
      default:
        config = VINconfig;
      }
        AnylineOCR.setup(
            JSON.stringify(config),
            'scan',
            this.onResult,
            this.onError
        );
    };

    requestCameraPermission = async() => {


        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission allowed');
                this.openOCR();
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    hasCameraPermission = async() => {
        try {
            const result = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.CAMERA);
            return result;
        } catch (err) {
            console.warn(err);
        }
    };

    checkCameraPermissionAndOpen = () => {
        this.hasCameraPermission().then((hasCameraPermission) => {
            console.log('hasCameraPermission result is ' + hasCameraPermission);
            if (hasCameraPermission) {
                console.log('Opening OCR directly');
                this.openOCR();
            } else {
                this.requestCameraPermission();
            }
        });
    };

    fetchVIN = (vin) => {
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011")
        .then(response => response.json())
        .then((responseJson)=> {
          data = responseJson.Results
          console.log(data)
        })
        .catch(error=>console.log(error))
    };


    onResult = (dataString) => {
        const data = JSON.parse(dataString);

        //let id = "testID"//this.props.navigation.state.params.id;
        //updateVehicle({id, question:"V1", selection: data.reading.toString() });
        this.setState({
            hasScanned: true,
            result: data.reading,
            imagePath: data.imagePath,
            fullImagePath: data.fullImagePath,
            scanMode: data.scanMode,
            meterType: data.meterType,
            cutoutBase64: data.cutoutBase64,
            fullImageBase64: data.fullImageBase64,
            text: data.text
        });
        let values = this.props.navigation.state.params;
        console.log(data);
        switch(values.type) {
        case Constants.VIN:
          this.fetchVIN(data.text);
          this.props.updateVehicle({id:values.objectID, question:Constants.VIN_ID, selection:data.text});
          break;
        case Constants.LICENSE:
          this.props.updateDriver({id:values.objectID, question:Constants.DLICENSE_ID, selection:data.text});
          break;
        case Constants.PLATE:
          this.props.updateVehicle({id:values.objectID, question:Constants.LICENSE_PLATE_ID, selection:data.licensePlate});
          break;
        default:
          break;
        }
        this.props.navigation.goBack();
    };

    onError = (error) => {
        console.error(error);
        alert(error);
    };

    componentDidMount() {
      console.log("MOUNTED")
      this.openOCR()
    }

    render() {
        const {
            hasScanned,
            result,
            imagePath,
            fullImagePath,
            barcode,
            scanMode,
            meterType,
            cutoutBase64,
            fullImageBase64,
        } = this.state;

        return (
            <View style={styles.container}>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


const mapDispatchToProps = {
  updateVehicle,
  updateDriver,
}

const mapStateToProps = (state) => {
    return {
        photoVals: state.photosReducer,
        vehicle: state.vehicleReducer,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Scan);
