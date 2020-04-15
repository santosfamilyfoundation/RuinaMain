import React, {Component} from 'react';
import {
    PermissionsAndroid,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import AnylineOCR, { getLicenseExpiryDate } from 'anyline-ocr-react-native-module';
import { updateVehicle } from '../../actions/VehicleAction';
import { updateDriver } from '../../actions/DriverAction';
import * as Constants from '../../constants';

import VINconfig from '../../anylineConfigs/VINconfig'
import DriversLicenseconfig from '../../anylineConfigs/DriversLicenseconfig';
import LicensePlateconfig from '../../anylineConfigs/LicensePlateconfig';

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
        text: '',
        vinData: '',
    };

    openOCR = () => {
      let config;
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
            if (hasCameraPermission) {
                this.openOCR();
            } else {
                this.requestCameraPermission();
            }
        });
    };

    async fetchVINData(vin) {
      let response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011");
      let body = await response.json();
      let values = this.props.navigation.state.params;
      this.props.updateVehicle({id:values.objectID, question:Constants.MAKE_ID, selection:body.Results[6].Value});
      this.props.updateVehicle({id:values.objectID, question:Constants.MODEL_ID, selection:body.Results[8].Value});
      this.props.updateVehicle({id:values.objectID, question:Constants.YEAR_ID, selection:body.Results[9].Value});
    }

    fetchVIN = () =>{
      const vin = this.state.text
      fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011")
        .then(response => response.json())
        .then((responseJson)=> {
          data = responseJson.Results
          this.setState({vinData: data})
        })
        .catch(error=>console.log(error))
    };

    componentDidMount() {
        this.openOCR()
    }



    onResult = (dataString) => {
        const data = JSON.parse(dataString);

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
        switch(values.type) {
        case Constants.VIN:
          this.props.updateVehicle({id:values.objectID, question:Constants.VIN_ID, selection:data.text});
          let vinData = this.fetchVINData(data.text)
          break;
        case Constants.LICENSE:
          this.props.updateDriver({id:values.objectID, question:Constants.DLICENSE_ID, selection:data.documentNumber});
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
        alert(error);
        this.props.navigation.goBack();
    };

    componentDidMount() {
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
