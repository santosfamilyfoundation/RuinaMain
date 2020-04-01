import React, {Component} from 'react';
import {
    PermissionsAndroid,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import { updateVehicle } from '../actions/VehicleAction';
import AnylineOCR, { getLicenseExpiryDate } from 'anyline-ocr-react-native-module';
import { connect } from 'react-redux';

import config from '../config';
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

        this.props.updateVehicle({id:this.props.navigation.state.params.objectID, question:"V1", selection:data.text});
        //fetchVIN(this.state.text);
        this.props.navigation.goBack();
    };

    onError = (error) => {
        console.error(error);
        alert(error);
    };

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

        const { navigation, updateVehicle } = this.props;

        const id = this.props.navigation.state.params.objectID;

        const platformText = (Platform.OS === 'android') ?
            (<Text onPress={this.checkCameraPermissionAndOpen}>Open OCR reader!</Text>) :
            (<Text onPress={this.openOCR}>Open OCR reader!</Text>);



        return (
            <View style={styles.container}>
                {hasScanned ? (
                        <ScanResult
                            result={result}
                            imagePath={imagePath}
                            fullImagePath={fullImagePath}
                            barcode={barcode}
                            scanMode={scanMode}
                            meterType={meterType}
                            cutoutBase64={cutoutBase64}
                            fullImageBase64={fullImageBase64}
                            hasBackButton={true}
                            navigation={this.props.navigation}
                            text={this.state.text}
                            // emptyResult={navigateback}
                        />
                    ) : (
                        platformText
                    )}
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

//
// <ScanResult
//     result={result}
//     imagePath={imagePath}
//     fullImagePath={fullImagePath}
//     barcode={barcode}
//     scanMode={scanMode}
//     meterType={meterType}
//     cutoutBase64={cutoutBase64}
//     fullImageBase64={fullImageBase64}
//     hasBackButton={true}
//     navigation={this.props.navigation}
//     text={this.state.text}
//     // emptyResult={navigateback}
// />


const mapDispatchToProps = {
  updateVehicle,
}

const mapStateToProps = (state) => {
    return {
        photoVals: state.photosReducer,
        vehicle: state.vehicleReducer,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Scan);
