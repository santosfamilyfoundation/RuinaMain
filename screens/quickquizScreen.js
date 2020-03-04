import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import QuickQuiz from '../components/QuickQuiz';

export const QuickQuizScreen = ({ navigation }) => {
  return (
          <QuickQuiz 
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                                                  onPress={() => navigation.goBack()}/> }
          />
  );
};