import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import {TopNavigation,Card, CardHeader, Text, Button} from '@ui-kitten/components';
import {StyleSheet, Linking, ScrollView} from 'react-native';
import { MaterialDialog, SinglePickerMaterialDialog} from 'react-native-material-dialog';
import * as Constants from '../constants';

class FinalReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseReportFormatVisible: false,
            chooseReportFormatSelectedItem: undefined,
            exportAction: undefined,
        };
    }

    render(){
        const {
            navigation
        } = this.props

        const SaveToDeviceHeader = () => (
            <CardHeader title="Save to Local Device" />
        )
        const EmailHeader = () => (
            <CardHeader title="Email"/>
        )
        const SaveToDatabaseHeader = () => (
            <CardHeader title="Save to Database" />
        )

        const FeedbackHeader = () => (
            <CardHeader title="Feedback"/>
        )

        const navigateSaveToDevice = (format) => {
            console.log('Save Report to Device!');
            navigation.navigate('SaveToDevice', {format: format})
        }

        const navigateEmail = (format) =>{
            navigation.navigate('EmailFinalReport', {format:format})
        }

        const navigateDatabase = (format) => {
            console.log('SEND REPORT TO DATABASE!');
            navigation.navigate('ReportToDatabase', {format:format})
        }
        const file_format_extensions = Constants.ALLOW_JSON_EXPORT ? ["json", "pdf", "html", "xlsx"] : ["pdf", "html", "xlsx"];

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title="Final Report" alignment="center" leftControl={this.props.BackAction()}/>
                <ScrollView style={{ flex: 1 }}>
                  <Card header={SaveToDeviceHeader }>
                      <Text style={{ marginBottom: 20 }}>Press this button to save the crash report to local device.</Text>
                      <Button
                          onPress={() => this.setState({ chooseReportFormatVisible: true, exportAction: navigateSaveToDevice })}>
                          Save Report to Local Device
                      </Button>

                  </Card>
                  <Card header={EmailHeader}>
                      <Text style={{ marginBottom: 20 }}>Press this button to email the crash report.</Text>
                      <Button
                          onPress={() => this.setState({ chooseReportFormatVisible: true, exportAction: navigateEmail })}>
                          Email Report
                      </Button>
                  </Card>
                  <Card header={SaveToDatabaseHeader}>
                      <Text style={{ marginBottom: 20 }}>Press this button to send the crash report to the database.</Text>
                      <Button onPress={() => navigateDatabase('JSON')}>Send Report To Database</Button>
                  </Card>
                  <Card header={FeedbackHeader} style={{marginTop:20}}>
                    <Text style={{marginBottom: 20}}>Tell us what you liked and what you didn't like so we can make your experience better.</Text>
                    <Button onPress={()=>Linking.openURL('https://forms.gle/ho3cZNyoaFArNNN79')}>Submit Feedback</Button>
                  </Card>

                  <SinglePickerMaterialDialog
                        title={"Choose report export format"}
                        scrolled
                        items={file_format_extensions.map((row, index) => ({ value: index, label: "." + row }))}
                        visible={this.state.chooseReportFormatVisible}
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
                </ScrollView>
            </SafeAreaView>
        )
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
