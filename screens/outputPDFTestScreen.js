import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import OutputPDFTest from '../components/modules/OutputPDFTest';

export const OutputPDFTestScreen = ({ navigation }) => {
  return (
          <OutputPDFTest
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};
