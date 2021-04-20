import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Card, Button, CardHeader } from '@ui-kitten/components';
import { styles } from './MultiButtonSelectorQuickSurvey.style';
import { dependencyParser } from '../../utils/dependencyHelper';

const MultiButtonSelectorQuickSurvey = (props) => {
  const [selection, setSelection] = React.useState(null);
  // obtained as inputs to component made in QuickSurvey
  const {data, quickSurveyReducer, submitFunction, updateResponse, dependencyID} = props;
  let currId = data.id

  // when button selected, set the option and update the quick survey setupData
  const submitField = (optionText, idCode) => {
      setSelection(optionText);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
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
              onPress={() => submitField(option.text, option.idCode)}
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
    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
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
        )
    }else{
        return null
    }
};

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response}
};

export default connect(mapStateToProps)(MultiButtonSelectorQuickSurvey);
