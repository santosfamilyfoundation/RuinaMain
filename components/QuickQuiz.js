import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { TextInput, Text, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card } from '@ui-kitten/components';
import TriButtonSelector from '../components/buttonSelectors/TriButtonSelector';
import { connect } from 'react-redux';
import { genericWriteAction } from '../actions/GenericAction';
import { genericReducer } from '../reducers/GenericReducer';

class QuickQuiz extends Component {
  state = {
    content: ''
  }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Quick Quiz' alignment='center' leftControl={this.props.BackAction()}/>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF VEHICLES INVOVLED</Text>
                    <TextInput style = {styles.questionInput}/>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                  <Card>
                    <Text style = {styles.questionText}>NUMBER OF PERSONS INVOVLED</Text>
                    <TextInput style = {styles.questionInput}/>
                  </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>ARE THERE KNOWN FATALITIES?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle}>Yes</Button>
                        <Button style = {styles.buttonSytle}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THE CRASH IN A CONSTRUCTION ZONE?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle}>Yes</Button>
                        <Button style = {styles.buttonSytle}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THE CRASH IN AN INTERSECTION?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle}>Yes</Button>
                        <Button style = {styles.buttonSytle}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS A SCHOOL BUS INVOVLED?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle}>Yes</Button>
                        <Button style = {styles.buttonSytle}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <SafeAreaView style = {styles.questionContainer}>
                <Card style = {styles.cardStyle}>
                    <Text style = {styles.questionText}>IS THERE HAZARDOUS WASTE?</Text>
                    <Layout style={{flexDirection: 'row'}}>
                        <Button style = {styles.buttonSytle}>Yes</Button>
                        <Button style = {styles.buttonSytle}>No</Button>
                    </Layout>
                </Card>
              </SafeAreaView>
              <Button>Continue</Button>

            </SafeAreaView>
          );
    }
};


const mapDispatchToProps = {
  genericWriteAction
}

const mapStateToProps = (state) => {
  const { story } = state
  return { story }
};

const styles = StyleSheet.create({
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    questionContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15
    },
    questionInput: {
        backgroundColor: 'lightgrey',
        height: 40,
        
    },
    cardStyle: {
        flexDirection: 'row',
        // flex: 0.6,
    },
    buttonSytle: {
        marginRight: 15,
        width: 80
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuiz);
