/*
The NonMotoristSection is a class component that renders the tile for a nonmotorist section on the home screen.
If a user clicks on the tile, they are navigated to the NonMotorist form. The component has two views: the regular view,
which just displays an icon representing a nonmotorist, and the edit view, which displays a minus icon and allows the 
user to delete the nonmotorist section.

Props:
navigation - object that handles navigation between screens
nonmotorist - the nonmotorist object
index - the number of the nonmotorist
edit - boolean indicating whether we're in the edit view or not
roadID - the id of the road; nonmotorist is associated with this road
questions - object representing all of the questions
*/

import React, { Component } from "react";
import { Box, Text } from "native-base";
import { connect } from "react-redux";
import { MaterialDialog } from "react-native-material-dialog";
import { material } from "react-native-typography";
import { deleteNonmotorist } from "../../actions/NonmotoristAction";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";

class NonMotoristSection extends Component {
   constructor(props) {
      super(props);

      this.state = {
         beforeDelete: false,
      };
   }

   /*
  Filters the questions to only the nonmotorist questions.
  */
   nonmotoristQuestionsData = () => {
      return this.props.questions.data.filter((question) =>
         question.display.includes("nonmotorist")
      );
   };

   render() {
      const { navigation, nonmotorist, index, edit, roadID, questions } =
         this.props;

      // Navigate to the nonmotorist form
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

      /* Renders two different nonmotorist cards (edit and non edit modes).
    The edit mode renders an icon button that allows the user to delete a nonmotorist. It also
    renders a material dialog to get confirmation from the user. The non-edit mode shows
    an icon button that allows the user to navigate to the nonmotorist form.
    */
      if (edit) {
         return (
            <Box mt={4}>
               <IconButton
                  rightMargin={4}
                  onPress={() => this.setState({ beforeDelete: true })}
                  text={`Remove Non-Motorist ${index + 1}`}
                  icon={
                     <Icon color="white" name="person-remove-alt-1" size={50} />
                  }
               />

               <MaterialDialog
                  title={"Delete Confirmation"}
                  visible={this.state.beforeDelete}
                  onCancel={() => {
                     this.setState({ beforeDelete: false });
                  }}
                  onOk={() => {
                     this.props.deleteNonmotorist({
                        nonmotoristID: nonmotorist.id,
                     });
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
                        this.nonmotoristQuestionsData(),
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
