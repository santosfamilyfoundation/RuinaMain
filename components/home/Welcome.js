import React, { Component } from 'react';
import { SafeAreaView} from 'react-navigation';
import { Linking, ActivityIndicator} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { styles } from './Welcome.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import backgroundSave from '../../utils/backgroundSave';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";

class Welcome extends Component {
    constructor(props){
      super(props);
      this.stateManager = new backgroundSave();
      this.state = {
        loading: true,
        autoSavedSession: false,
        autoSavedSessionDialogBoxVisible: false,
      };
    }

    async componentDidMount() {
      await this.checkAutoSavedSession();
      this.setState({ loading: false });
    }

    async checkAutoSavedSession(){
      this.stateManager.RNFS.exists(this.stateManager.path).then((exists) => {
        if (exists) {
          this.setState({autoSavedSession : true, autoSavedSessionDialogBoxVisible : true});
          console.log('Detect unfinished report!')
        } else {
          this.setState({ autoSavedSession: false, autoSavedSessionDialogBoxVisible: false });
          console.log('No unfinished report!')
        }
      })
    }

    render() {
        const navigateTo = (loc) => {
          this.props.navigation.navigate(loc, {autoSavedSession: this.state.autoSavedSession});
          };
        if (this.state.loading) {
          return (
            <SafeAreaView style={styles.spinnerView}>
              <ActivityIndicator id="loadingScreen" size="large" color="#0000ff" />
            </SafeAreaView>
          );
        } else {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center' />
              <Divider />
              <Layout style={styles.centeredContainer}>
                <Button style={styles.styledButton} onPress={() => navigateTo('Survey')}>Start New Report</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('OutputPDFTest')}>Test Output PDF</Button>
              </Layout>
              <Layout style={styles.bottomBar}>
                <TouchableOpacity onPress={() => Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}><Text style={{ color: 'blue' }}>Submit Feedback</Text></TouchableOpacity>
                <Text style={styles.bottomBarText}>
                  {"Built by students at Olin College of Engineering 2020"}
                </Text>
              </Layout>

              <MaterialDialog
                title={"Resume Unfinished Session?"}
                visible={this.state.autoSavedSessionDialogBoxVisible}
                okLabel='YES'
                cancelLabel = 'NO'
                onCancel={() => {
                  this.setState({ autoSavedSession: false, autoSavedSessionDialogBoxVisible: false });
                }}
                onOk={() => {
                  this.setState({ autoSavedSession: true, autoSavedSessionDialogBoxVisible: false });
                  navigateTo('Survey');
                }}
              >
                <Text style={material.subheading}>
                  Your last session was interrupted unexpectedly. Would you like to resume from where you left off?
                </Text>
              </MaterialDialog>


            </SafeAreaView>
          );

        }

    }
};

export default Welcome;
