import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import PhotoCapture from '../components/photos/PhotoCaptureMain'

export const PhotoCaptureScreen = ({ navigation }) => {

  return (
    <PhotoCapture
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
