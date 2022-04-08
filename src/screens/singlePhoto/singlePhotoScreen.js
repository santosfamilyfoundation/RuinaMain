import React from 'react';
import SinglePhoto from './SinglePhoto'

export const SinglePhotoScreen = ({ navigation }) => {

  return (
    <SinglePhoto
        navigation = { navigation }
        BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
    />
  );
};
