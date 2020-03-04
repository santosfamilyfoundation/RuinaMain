import React from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader
} from '@ui-kitten/components';
import { styles } from './DropDownSingleSelect.style';
import { connect } from 'react-redux';
import { genericWriteAction } from '../../actions/GenericAction';


const DropDownSingleSelect = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const {data, key, genericReducer} = props;

    let currId = data.id;

    if(!selectedOption) {
        if(genericReducer[currId] != null) {
            let curOption;
            for (i = 0; i < data.answerOptions.length; i++) {
                if(data.answerOptions[i].idCode == genericReducer[currId]) {
                    curOption = {
                        idCode: genericReducer[currId],
                        text: data.answerOptions[i].text
                    };
                };
            };
            if (curOption != null) {
                setSelectedOption(curOption);
            }
        };
    };

    let status;
    if(!genericReducer[currId]) {
        status = 'danger'
    } else {
        status = 'success'
    }

    const submitField = (selection) => {
        console.log("CLICKED: ", selection);
        setSelectedOption(selection);
        props.genericWriteAction({actionType:"WRITE_SELECTION", field: currId, content: selection.idCode})
    }

    const Header = () => (
        <CardHeader title={data.question}/>
      );

    const HelperText = () => {
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }


    return (
        <Layout key={key} style={styles.container}>
            <Card header={Header} status={status}>
                <Layout style={styles.content}>
                    {HelperText()}
                    <Select
                        data={data.answerOptions}
                        selectedOption={selectedOption}
                        multiSelect={false}
                        onSelect={(e) => submitField(e)}
                    />
                </Layout>
            </Card>
        </Layout>
    );
};

const mapDispatchToProps = {
    genericWriteAction
}

const mapStateToProps = (state) => {
    const { story, genericReducer } = state
    return { story, genericReducer }
  };

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSingleSelect);


