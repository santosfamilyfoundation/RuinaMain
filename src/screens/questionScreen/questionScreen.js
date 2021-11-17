import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import QuestionForm from './QuestionForm';

export const QuestionScreen = ({ navigation }) => {
  return (
        <QuestionForm
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> }
                                                  onPress={() => navigation.goBack()}/> }
            questionDetail = {navigation.state.params}
          />
  );
};
