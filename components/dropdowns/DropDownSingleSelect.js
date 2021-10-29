import React from 'react';
import MultiSelect from 'react-native-multiple-select';
import { updateResponse } from '../../actions/StoryActions';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';

const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const {data, key, id, questionReducer, submitFunction, updateResponse, dependencyID} = props;
    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id); 
    let existingData = !reducerData?.response ? null : reducerData.response;

    if(!selectedOption) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let curOption;
                for (let i = 0; i < data.answerOptions.length; i++) {
                    if(data.answerOptions[i].text == existingData[currId]) {
                        curOption = {
                            idCode: existingData[currId],
                            text: data.answerOptions[i].text
                        };
                    };
                };
                if (curOption != null) {
                    setSelectedOption(curOption);
                }
            };
        };
    };

    let status;
    if(!existingData) {
        status = 'danger'
    } else {
        if(!existingData[currId]) {
            status = 'danger';
        } else {
            status = 'success';
        }
    }

    const submitField = (selection) => {
        setSelectedOption(selection);
        if (dependencyID==null || dependencyID.length == 1){
            updateResponse && updateResponse({id, question: currId, selection: selection.idCode})
        }else{
            let vehicleID = dependencyID[1]
            switch (dependencyID.length) {
                case 2:
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID})
                    break;
                case 3:
                    let passengerID = dependencyID[2]
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID, passengerID: passengerID})
                case 4:
                    updateResponse && updateResponse({id, question: currId, selection: selection.idCode, vehicleID: vehicleID, nonmotoristID: dependencyID[3]})
                default:
                    break;
            }
        }
        let content = selection.text;
        submitFunction({id, question: currId, selection: content})
    }

    const Header = () => (
        <CardHeader title={data.question}/>
      );

    const HelperTooltip = () => {
        return (
             <TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>
        )
    }

    let renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <QuestionSection
                key={key}
                title={data.question}
                helperText={data.helperText}
            >
                {HelperTooltip()}
                <MultiSelect
                    selectedItems={selectedOption}
                    onSelectedItemsChange={(e) => submitField(e)}
                    single={true}
                    items={data.answerOptions}
                    uniqueKey={data.question.humanReadableId}
                />
            </QuestionSection>
        )
    }else{
        return null
    }
};

const mapDispatchToProps = {
    updateResponse
}

const mapStateToProps = (state, props) => {
    const { response } = state.storyReducer
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { questionReducer, response }
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);
