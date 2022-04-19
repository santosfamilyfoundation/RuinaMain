import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { VStack } from 'native-base';
import { styles } from './AutoComponentContainer.style';
import { ScrollView } from 'react-native-gesture-handler';
import TopNavigation from '../components/TopNavigation';

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