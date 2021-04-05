import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Card, Button, CardHeader } from '@ui-kitten/components';
import { styles } from './MultiButtonSelectorQuickSurvey.style';

const MultiButtonSelectorQuickSurvey = (props) => {
  const [selection, setSelection] = React.useState(null);
  // obtained as inputs to component made in QuickSurvey
  const {data, quickSurveyReducer, submitFunction} = props;

  // when button selected, set the option and update the quick survey setupData
  const submitField = (optionText) => {
      setSelection(optionText);
      submitFunction({question: data.id, selection: optionText})
  }

  const Header = () => (
      <CardHeader title={data.question}/>
  );

  const HelperText = () => {
      if(data?.helperText?.length != 0) {
          return (<Text style={styles.helperText}>{data.helperText}</Text>)
      }
      return null;
  }

  const renderSingleButton = (option) => {
      let appearance = (selection == option.text) ? 'filled': 'outline';
      return (
          <Button
              key={option.idCode}
              style={styles.answerButton}
              appearance={appearance}
              onPress={() => submitField(option.text)}
          >
              {option.text}
          </Button>
      )
  }

  const renderButtons = () => {
      let res = data.answerOptions.map(option => (renderSingleButton(option)));
      return (
          res
      );
  }

  return (
      <Layout key={data.id} style={styles.container}>
          <Card header={Header}>
              <Layout style={styles.content}>
                  {HelperText()}
                  <Layout style={styles.input}>
                      <Layout style={styles.answers}>
                          {renderButtons()}
                      </Layout>
                  </Layout>
              </Layout>
          </Card>
      </Layout>
  );
};

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const quickSurveyReducer = state[reducer];
    return { story, reducer }
};

export default connect(mapStateToProps)(MultiButtonSelectorQuickSurvey);
