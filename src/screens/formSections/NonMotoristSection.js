import React, { Component } from "react";
import { Box, Text } from "native-base";
import { connect } from "react-redux";
import { MaterialDialog } from "react-native-material-dialog";
import { material } from "react-native-typography";
import { deleteNonmotorist } from "../../actions/NonmotoristAction";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { questionData } from "../../utils/questionParser";

class NonMotoristSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beforeDelete: false,
    };
  }

  filterQuestionsData = (questionType) => {
    return this.props.questions.data.filter((question) =>
      question.display.includes(questionType)
    );
  };

  render() {
    const { navigation, nonmotorist, index, edit, roadID, questions } = this.props;

    const navigateQuestion = (form, id, type, idx) => {
      var name = type + " " + idx;
      navigation.navigate("Question", {
        questions: form,
        objectID: id,
        type,
        name,
        dependencyID: [0, 0, 0, id],
      });
    };

    // describes two different nonmotorist cards (edit and non edit modes)
    if (edit) {
      return (
        <Box mt={4}>
          <IconButton
            rightMargin={4}
            onPress={() => this.setState({ beforeDelete: true })}
            text={`Remove Non-Motorist ${index + 1}`}
            icon={<Icon color="white" name="person-remove-alt-1" size={50} />}
          />

          <MaterialDialog
            title={"Delete Confirmation"}
            visible={this.state.beforeDelete}
            onCancel={() => {
              this.setState({ beforeDelete: false });
            }}
            onOk={() => {
              this.props.deleteNonmotorist({ nonmotoristID: nonmotorist.id });
              this.setState({ beforeDelete: false });
            }}
          >
            <Text style={material.subheading}>
              Are you sure you want to delete this nonmotorist?
            </Text>
          </MaterialDialog>
        </Box>
      );
    } else {
      return (
        <Box mt={4}>
          <IconButton
            onPress={() =>
              navigateQuestion(
                questionData(questions, "Nonmotorist"),
                nonmotorist.id,
                "Nonmotorist",
                index + 1
              )
            }
            text={`Non-Motorist ${index + 1} \nForm`}
            rightMargin={4}
            icon={<Icon color="white" name="person" size={50} />}
          />
        </Box>
      );
    }
  }
}

const mapDispatchToProps = {
  deleteNonmotorist,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(NonMotoristSection);
