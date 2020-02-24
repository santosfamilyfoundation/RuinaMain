import React, {Component} from 'react';
import {
    PermissionsAndroid,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import AnylineOCR, { getLicenseExpiryDate } from 'anyline-ocr-react-native-module';

import config from '../config';
import ScanResult from './ScanResult';

console.log(getLicenseExpiryDate('eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiLCJKUyIsIldlYiJdLCJ2YWxpZCI6IjIwMjAtMDMtMjQiLCJtYWpvclZlcnNpb24iOjMsIm1heERheXNOb3RSZXBvcnRlZCI6NSwic2hvd1dhdGVybWFyayI6dHJ1ZSwicGluZ1JlcG9ydGluZyI6dHJ1ZSwiZGVidWdSZXBvcnRpbmciOiJvcHQtb3V0IiwidG9sZXJhbmNlRGF5cyI6NSwic2hvd1BvcFVwQWZ0ZXJFeHBpcnkiOnRydWUsImlvc0lkZW50aWZpZXIiOlsiY29tLlNhbnRvcy5SdWluYSJdLCJhbmRyb2lkSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sIndpbmRvd3NJZGVudGlmaWVyIjpbImNvbS5TYW50b3MuUnVpbmEiXSwid2ViSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sImpzSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sImltYWdlUmVwb3J0Q2FjaGluZyI6dHJ1ZX0KQW85NlhGbVhBdURyQTRRbEs2SFRzYW5CWmpYL1lNSnF6T0pIUjlyRW12Rnp5UDNOU25XMnU1ZFgwVXhuaEdHWWFDWEd0TUpJY1djT2hYUmlTVGNqRW9sYXlZVnlyb2dWVDlObExwdE9jN0pXK29aLzRnWnlscXdKaSt2Y2pZb2tUY3BzOE1mVjZDQ1lwVlFzc1pXNW15dy8wQlRkcnFHUnh4Rkt1OXJEaDBFM0dkM2x3OFN1MzlOdzBJZytBa0l3WEh6MVk4Q2FKem9haU53SUdnbXRFWGdxRWVFYmpxbE5oQkE5czg0WHJ0NUlYeDViNDB3bW1seTVrQmpQeGhzZjhFQlFHaHBZSUwzTlVJa0tnbjFxQVVSZ2FrTGtCcTNHbUJBZHFCTDJKaGZ5MWRSejY4YXliWUZmSktKd295ZXEyWnFmK1l0Mmx6UkdIcW1wODJ2S3d3PT0=')); // 'YYYY-MM-DD'


export default class Scan extends Component {

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
        });
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