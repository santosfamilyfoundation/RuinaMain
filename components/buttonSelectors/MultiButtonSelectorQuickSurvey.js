import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Layout, Text, Card, Button, Modal, CardHeader, Icon } from '@ui-kitten/components';
import ImageSelector from '../image/imgIndex';
import { styles } from './MultiButtonSelectorQuickSurvey.style';

const MultiButtonSelectorQuickSurvey = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selection, setSelection] = React.useState(null);
    // obtained as inputs to component made in QuickSurvey
    const {data, quickSurveyReducer, submitFunction} = props;

    // when button selected, set the option and update the quick survey setupData
    const submitField = (optionText, idCode) => {
        setSelection(optionText);
        submitFunction({question: data.id, selection: optionText})
    }

    const Header = () => (
        <CardHeader title={data.question}/>
    );

    const ModalContent = () => {
        if (data.helperImg != null ){
            var img = new ImageSelector()
            const src = img.pathHandler(data.helperImg)
            return (
                <View style={styles.imgContainer}>
                    <Layout style={styles.modalContent}>
                        <Text>{data.tooltip}</Text>
                        <Image source={src} style={styles.img}/>
                    </Layout>
                </View>
            )
        }else{
            return(
                <Layout style={styles.modalContent}>
                    <Text>{data.tooltip}</Text>
                </Layout>
            )
        }
    };
    
    const HelperTooltip = () => {
        if (data.helperText != null && data.tooltip != null){
            return (
                <Layout style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.helperText}>{data.helperText}</Text>
                        <Modal
                            backdropStyle={styles.backdrop}
                            visible={visible}
                            content={ModalContent()}
                            onBackdropPress={toggleModal}>
                            <Button appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                                More Info
                            </Button>
                        </Modal>
                    </View>
                </Layout>
            )
        }
        else if (data.helperText != null) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        else if (data.tooltip != null) {
            return (
                <View style={styles.endRowcontainer}>
                    <Button  appearance='ghost' status='primary' icon={InfoIcon} onPress={toggleModal}>
                        More Info
                    </Button>
                    <Modal backdropStyle={styles.backdrop} visible={visible}>
                        <Card style={styles.content} disabled={true}>
                        {ModalContent()}
                        <Button appearance='ghost' icon={CloseIcon} onPress={() => setVisible(false)}>
                            Dismiss
                        </Button>
                        </Card>
                    </Modal>
                </View>
            )
        } else {
            return null;
        }
    }
    
    const InfoIcon = (props) => (
        <Icon {...props} name='info'/>
    );
    const CloseIcon = (props) => (
        <Icon {...props} name='close-outline'/>
    );

    const toggleModal = () => {
        setVisible(!visible);
    };


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

  return (
      <Layout key={data.id} style={styles.container}>
          <Card header={Header}>
              <Layout style={styles.content}>
                  {HelperTooltip()}
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
