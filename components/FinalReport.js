import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { VStack, Button, Heading, Divider, Center, Icon, IconButton, ArrowBackIcon, HStack} from 'native-base'
import { StyleSheet, Linking, ScrollView, PermissionsAndroid } from 'react-native';
import { MaterialDialog, SinglePickerMaterialDialog} from 'react-native-material-dialog';
import * as Constants from '../constants';
import FinalReportCard from './FinalReportCard';

class FinalReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseReportFormatVisible: false,
            chooseReportFormatSelectedItem: undefined,
            exportAction: undefined,
            filePermissionsGranted: false,
            filePermissionsErrorMessageVisible: false
        };
        this.requestExternalStoragePermission();
    }

    requestExternalStoragePermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "Android External Storage Permission",
              message:
                "Ruina needs access to your external storage to save the report ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use external storage");
            this.setState({ filePermissionsGranted: true });
          } else {
            console.log("external permission denied");
            this.setState({ filePermissionsGranted: false });
            this.setState({ filePermissionsErrorMessageVisible: true });
          }
        } catch (err) {
          console.warn(err);
        }
      };

    render(){
        const {
            navigation
        } = this.props

        const navigateSaveToDevice = (format) => {
            console.log('Save Report to Device!');
            navigation.navigate('SaveToDevice', {format: format})
        }

        const navigateEmail = (format) =>{
        console.log("navigating to email")
            navigation.navigate('EmailFinalReport', {format:format})
        }

        const navigateDatabase = (format) => {
            console.log('SEND REPORT TO DATABASE!');
            navigation.navigate('ReportToDatabase', {format:format})
        }
        const file_format_extensions = Constants.ALLOW_JSON_EXPORT ? ["json", "pdf", "html", "xlsx"] : ["pdf", "html", "xlsx"];

        const cardButton = (message, navigateTo, disabledButton) => (
            <Button
                onPress={() => this.setState({ chooseReportFormatVisible: true, exportAction: navigateTo })}
                isDisabled={!this.state.filePermissionsGranted || disabledButton}>
                {message}
            </Button>
        );

        const feedbackButton = () => (
            <Button onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}>Submit Feedback</Button>
        );

        return (
          <SafeAreaView style={{flex:1}}>
            <HStack>
                <IconButton
                 icon={<Icon as={ArrowBackIcon} name="arrow-back"/>}
                 onPress={()=>this.props.navigation.goBack()}
                />
                <Heading textAlign="center">Final Report</Heading>
            </HStack>
            <Divider/>
            <Center>
                <VStack space={8}>
                    <FinalReportCard
                     title='Save to Local Device'
                     message='Press this button to save the crash report to local device.'
                     button={cardButton('Save Report to Local Device', navigateSaveToDevice)}
                    />
                    <FinalReportCard
                     title='Email'
                     message='Press this button to email the crash report.'
                     button={cardButton('Email Report', navigateEmail)}
                    />
                    <FinalReportCard
                     title='Save to Database'
                     message='FEATURE COMING SOON'
                     button={cardButton('Save Report to Database', navigateDatabase, true)}
                    />
                    <FinalReportCard
                     title='Feedback'
                     message='Tell us what you liked and what you did not like so we can make your experience better.'
                     button={feedbackButton()}
                    />
                </VStack>
            </Center>
              <SinglePickerMaterialDialog
                    title={"Choose report export format"}
                    scrolled
                    items={file_format_extensions.map((row, index) => ({ value: index, label: "." + row }))}
                    visible={this.state.chooseReportFormatVisible && this.state.filePermissionsGranted}
                    selectedItem={this.state.chooseReportFormatSelectedItem}
                    onCancel={() => this.setState({ chooseReportFormatVisible: false })}
                    onOk={result => {
                        this.setState({ chooseReportFormatSelectedItem: result.selectedItem});
                        this.setState({ chooseReportFormatVisible: false });
                        console.log('selected:', this.state.chooseReportFormatSelectedItem);
                        console.log('result:', result.selectedItem);
                        console.log('pop up window state:', this.state.chooseReportFormatVisible);
                        this.state.exportAction(result.selectedItem.label.substring(1));
                    }}
              />
          </SafeAreaView>
        )

//        return(
//            <SafeAreaView style={{flex:1}}>
//                <TopNavigation title="Final Report" alignment="center" leftControl={this.props.BackAction()}/>
//                <ScrollView style={{ flex: 1 }}>
//                  <Card header={SaveToDeviceHeader }>
//                      <Text style={{ marginBottom: 20 }}>Press this button to save the crash report to local device.</Text>
//                      <Button
//                          onPress={() => this.setState({ chooseReportFormatVisible: true, exportAction: navigateSaveToDevice })}
//                          disabled={!this.state.filePermissionsGranted}>
//                          Save Report to Local Device
//                      </Button>
//
//                  </Card>
//                  <Card header={EmailHeader}>
//                      <Text style={{ marginBottom: 20 }}>Press this button to email the crash report.</Text>
//                      <Button
//                        onPress={() => this.setState({ chooseReportFormatVisible: true, exportAction: navigateEmail })}
//                        disabled={!this.state.filePermissionsGranted}>
//                            Email Report
//                      </Button>
//                  </Card>
//                  <Card header={SaveToDatabaseHeader}>
//                      <Text style={{ marginBottom: 20 }}>FEATURE COMING SOON</Text>
//                      <Button onPress={() => navigateDatabase('JSON')} disabled>Send Report To Database</Button>
//                  </Card>
//                  <Card header={FeedbackHeader} style={{marginTop:20}}>
//                    <Text style={{marginBottom: 20}}>Tell us what you liked and what you didn't like so we can make your experience better.</Text>
//                    <Button onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}>Submit Feedback</Button>
//                  </Card>
//
//                  <SinglePickerMaterialDialog
//                        title={"Choose report export format"}
//                        scrolled
//                        items={file_format_extensions.map((row, index) => ({ value: index, label: "." + row }))}
//                        visible={this.state.chooseReportFormatVisible && this.state.filePermissionsGranted}
//                        selectedItem={this.state.chooseReportFormatSelectedItem}
//                        onCancel={() => this.setState({ chooseReportFormatVisible: false })}
//                        onOk={result => {
//                            this.setState({ chooseReportFormatSelectedItem: result.selectedItem});
//                            this.setState({ chooseReportFormatVisible: false });
//                            console.log('selected:', this.state.chooseReportFormatSelectedItem);
//                            console.log('result:', result.selectedItem);
//                            console.log('pop up window state:', this.state.chooseReportFormatVisible);
//                            this.state.exportAction(result.selectedItem.label.substring(1));
//                        }}
//                    />
//                </ScrollView>
//            </SafeAreaView>
//        )
    }
}

const mapStateToProps = (state) => {
    return{
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer,
        photos: state.photosReducer,
        story: state.storyReducer,
        road: state.roadReducer
    }
}

export default connect(mapStateToProps)(FinalReport)
