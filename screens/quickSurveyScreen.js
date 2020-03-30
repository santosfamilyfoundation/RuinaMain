import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import QuickSurvey from '../components/QuickSurvey';

export const QuickSurveyScreen = ({ navigation }) => {
  return (
          <QuickSurvey
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};