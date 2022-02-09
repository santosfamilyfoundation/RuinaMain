import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import TopNavigation from '../../components/TopNavigation';
import SinglePhoto from '../singlePhoto/SinglePhoto'
import { Button, Text } from 'native-base';
class DiagramTool extends Component {
    state = {
        content: '',
    }

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Crash Diagram' backButton navigation={this.props.navigation} />
                <Text style={{textAlign:'center', padding:15}}>This feature has been made, however it's either deactivated or pending licensing agreement with its integration partner. We apologize that we cannot show you this feature at this time.</Text>
              <Button onPress={() => this.navigateBack()}>Go Back</Button>
            </SafeAreaView>
          );
    }
};


export default DiagramTool;
