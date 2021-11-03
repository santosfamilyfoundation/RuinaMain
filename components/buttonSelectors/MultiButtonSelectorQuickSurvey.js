import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Button, VStack, HStack } from 'native-base';
import ImageSelector from '../image/imgIndex';
import { styles } from './MultiButtonSelectorQuickSurvey.style';
import TooltipView from '../Tooltip';
import { dependencyParser } from '../../utils/dependencyHelper';
import QuestionSection from '../QuestionSection';

const MultiButtonSelectorQuickSurvey = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [selection, setSelection] = React.useState(null);
  // obtained as inputs to component made in QuickSurvey
  const {data, quickSurveyReducer, submitFunction, updateResponse, dependencyID} = props;
  let currId = data.id

  // when button selected, set the option and update the quick survey setupData
  const submitField = (optionText, idCode) => {
      setSelection(optionText);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({question: currId, selection: idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({question: currId, selection: idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({question: currId, selection: idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({question: currId, selection: idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
      submitFunction({question: data.id, selection: optionText})
  }

    /* const Header = () => (
        <CardHeader title={data.question}/>
    ); */

    /*const InfoIcon = (props) => (
        <Icon {...props} name='info'/>
    );
    const CloseIcon = (props) => (
        <Icon {...props} name='close-outline'/>
    ); */

    const renderSingleButton = (option) => {
        let appearance = (selection == option.text) ? 'filled': 'outline';
        console.log(option)
        return (
            <Button
                key={option.id}
                style={styles.answerButton}
                appearance={appearance}
                onPress={() => submitField(option.text, option.idCode)}
            >
                {option.name}
            </Button>
        )
    }

    const renderButtons = () => {
        let res = data.answerOptions.map(option => (renderSingleButton(option)));
        return (
            <HStack>
            {res}
            </HStack>
        );
  }

    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
        <React.Fragment>
            <QuestionSection title={data.question} helperText={data.helperText}>
                 <TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>
                {renderButtons()}
            </QuestionSection>
        </React.Fragment>
        )
    } else {
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