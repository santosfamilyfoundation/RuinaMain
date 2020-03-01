import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { styles } from './Welcome.style';

class Welcome extends Component {
  state = {
    content: '',
    hasScanned: false,
    result: '',
    imagePath: '',
    fullImagePath: '',
    barcode: '',
    scanMode: '',
    meterType: '',
    cutoutBase64: '',
    fullImageBase64: '',
  }

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
      console.log(data.text);
      console.log(data.reading);

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

        const navigateTo = (loc) => {
            this.props.navigation.navigate(loc);
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center'/>
              <Divider/>
              <Layout style={styles.centeredContainer}>
                <Button style={styles.styledButton} onPress={() => navigateTo('Quiz')}>Quizk Quiz</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Home')}>Note Pad</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Test')}>Test</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Weather')}>Weather</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Map')}>Map</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('PhotoCapture')}>Take A Photo</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Vehicle')}>Vehicle Info</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Scan')}>Scan</Button>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
