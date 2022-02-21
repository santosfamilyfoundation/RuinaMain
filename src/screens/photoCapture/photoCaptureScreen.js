import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import PhotoCapture from './PhotoCapture'

export const PhotoCaptureScreen = ({ navigation }) => {

  return (
    <PhotoCapture
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
