// export default from '@react-native-community/cameraroll/js/__mocks__/nativeInterface'
import React from 'react';

export class CameraRoll extends React.Component {
  save(imgUri) {
    console.log('HEY');
    return (imgUri.concat('TEST'));
  }

  render() {
    return null;
  }
}

export default CameraRoll;
