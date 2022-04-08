```
  The AutoComponentContainer is a class component that renders questions.
```

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { VStack } from 'native-base';
import { styles } from './AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import MultiButtonSelector from '../components/buttonSelectors/MultiButtonSelector';
import QuestionAutoCompleteDropDown from '../components/dropdowns/QuestionAutoCompleteDropDown';
import DropDownSingleSelect from '../components/dropdowns/DropDownSingleSelect';
import OpenTextField from '../components/textFields/OpenTextField';
import DropDownMultiSelect from '../components/dropdowns/DropDownMultiSelect';
import LargeTextField from '../components/textFields/LargeTextField';
import NumberButtonSelector from '../components/buttonSelectors/NumberButtonSelector';
import TopNavigation from '../components/TopNavigation';
import Section from '../components/Section'

class AutoComponentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title={this.props.title} backButton navigation={this.props.navigation}/>
          <ScrollView>
            <VStack>
            </VStack>
          </ScrollView>
        </SafeAreaView>
    );
  }
};

export default AutoComponentContainer;