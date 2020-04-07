import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import PhotoGallery from '../components/PhotoGallery'

export const PhotoGalleryScreen = ({ navigation}) => {

  return (
          <PhotoGallery
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                      onPress={() => navigation.goBack()}/> }
          />
  );
};
