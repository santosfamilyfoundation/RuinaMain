import React, { Component } from 'react';
import { styles } from '../home/Home.style';
import IconButton from '../../components/IconButton';
import { VStack, HStack, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';
import { addPassenger, deletePassenger } from '../../actions/PassengerAction';
import { deleteVehicle } from '../../actions/VehicleAction';
import { deleteDriver } from '../../actions/DriverAction';
import Section from '../../components/Section'
import { questionData } from '../../utils/questionParser';

var uuid = require('react-native-uuid');

class VehicleSection extends Component{

    constructor(props) {
        super(props);

        this._addPassenger = this._addPassenger.bind(this);
        this._deletePassenger = this._deletePassenger.bind(this);
        this._deleteVehicleSection = this._deleteVehicleSection.bind(this);

        this.state = {
          beforeVehicleDelete: false,
          beforePassengerDelete: false,
          beforeDriverDelete: false,
          passengerToDelete: '',
          driverDeleted: false,
        }
    }

    // add passenger to global state
    _addPassenger () {
        let passengerID = uuid.v1();
        this.props.addPassenger({id: passengerID, vehicleID: this.props.vehicle.id});
    }

    // delete passenger from global state
    _deletePassenger (id) {
        this.props.deletePassenger({passengerID: id});
    }

    // delete vehicle section from global state
    _deleteVehicleSection (vehicle) {
        this.props.passenger.data.map((passenger) => {
          if (passenger.vehicle == vehicle.id) {
            this._deletePassenger(passenger.id);
          }
        });

        this.props.deleteDriver({driverID: vehicle.driver});
        this.props.deleteVehicle({vehicleID: vehicle.id});
    }

    render(){
        const {navigation, vehicle, index, name, edit, passenger, roadID, questions } = this.props
        // would need to refine if we want to put delete vehicle section icon next to card header
        // const VehiclesHeader = () => (
        //     <View style={{ flexDirection: 'row' }}>
        //       <Text category='h6' style={styles.vehicleSectionHeader}>{`${name} ${index + 1}`}</Text>
        //       <Icon name='minus-circle' width={25} height={25} />
        //     </View>
        // );

        const navigateQuestion = (filteredQuestionsData, id, type, vehicleIdx, passengerIdx, ids) => {
          if (type == 'Driver') {
            var name = type + ' of ' + 'Vehicle ' + vehicleIdx;
          } else if (type == 'Passenger') {
            var name = type + ' ' + passengerIdx + ' of ' + 'Vehicle ' + vehicleIdx;
          } else if (type == 'Occupant') {
            var name = type + ' ' + passengerIdx + ' of ' + 'Vehicle ' + vehicleIdx;
            type = 'Passenger';
          } else {
            var name = 'Vehicle ' + vehicleIdx;
          }
          navigation.navigate('Question', {questions: filteredQuestionsData, objectID: id, type, name, dependencyID: ids})
        }

        // create passengers associated with vehicle section in two modes (edit and non edit)
        let passengerListArr = passenger.data.filter(passenger => passenger.vehicle == vehicle.id).map((passenger, idx) => {
            if (!this.state.driverDeleted) {
              if (edit) {
                return (
                    <IconButton topMargin={4} rightMargin={4} text={`Remove Passenger ${idx + 1}`}
                    onPress={() => this.setState({
                    beforePassengerDelete: true,
                    passengerToDelete: passenger.id
                    })}
                    icon={<Icon color="white" name="person-remove-alt-1" size={50}/>}/>
                )
              } else {
                return (
              <IconButton topMargin={4} rightMargin={4} text={`Passenger ${idx + 1} \nForm`}
                onPress={() =>
                    navigateQuestion(questionData(questions, 'Passenger'), passenger.id,
                    'Passenger', (index+1), (idx+1), [roadID, passenger.vehicle, passenger.id])}
                icon={<Icon color="white" name="person" size={50}/>}/>
                )
              }
            } else {
              if (edit) {
                return (
                  <IconButton topMargin={4} rightMargin={4} text={`Remove Occupant ${idx + 1}`}
                  onPress={() => this.setState({
                  beforePassengerDelete: true,
                  passengerToDelete: passenger.id})
                  }
                  icon={<Icon color="white" name="person-remove-alt-1" size={50}/>}/>
                )
              } else {
                return (
                    <IconButton topMargin={4} rightMargin={4} text={`Occupant ${idx + 1} \nForm`}
                    onPress={() => navigateQuestion(questionData('Passenger'), passenger.id, 'Occupant', (index+1), (idx+1), [roadID, passenger.vehicle, passenger.id])}
                    icon={<Icon color="white" name="person" size={50}/>}/>
                )
              }
            }
        });

        // describes components of a single vehicle section with two modes (edit and non edit)
        if (edit){
            return(
                <>
                    <Section title={`${name} ${index + 1}`}>
                        <VStack>
                            <HStack flexWrap='wrap'>
                                {!this.state.driverDeleted && <IconButton topMargin={4} rightMargin={4} onPress={() => this.setState({beforeDriverDelete: true})}
                                    text="Remove Driver" icon={<Icon color="white" name="person-remove-alt-1" size={50}/>}/>}
                                {!this.state.driverDeleted && <IconButton topMargin={4} rightMargin={4} onPress = {this._addPassenger} text="Add Passenger" icon={<Icon color="white" name="person-add-alt-1" size={50}/>}/>}
                                {this.state.driverDeleted && <IconButton topMargin={4} rightMargin={4} onPress = {this._addPassenger} text="Add Occupant" icon={<Icon color="white" name="person-add-alt-1" size={50}/>}/>}
                                {passengerListArr}
                            </HStack>
                            <IconButton onPress = {() => this.setState({beforeVehicleDelete:true})} topMargin={4} text="Remove Vehicle" icon={<Icon color="white" name="delete" size={50}/>}/>
                        </VStack>
                    </Section>

                     <MaterialDialog
                        title={"Delete Confirmation"}
                        visible={this.state.beforeVehicleDelete}
                        onCancel={() => {
                            this.setState({ beforeVehicleDelete: false });
                        }}
                        onOk={() => {
                            this._deleteVehicleSection(this.props.vehicle);
                            this.setState({ beforeVehicleDelete: false });
                        }}>
                            <Text style={material.subheading}>
                                Are you sure you want to delete this vehicle section?
                            </Text>
                     </MaterialDialog>

                     <MaterialDialog
                        title={"Delete Confirmation"}
                        visible={this.state.beforePassengerDelete}
                        onCancel={() => {
                            this.setState({ beforePassengerDelete: false });
                        }}
                        onOk={() => {
                            this._deletePassenger(this.state.passengerToDelete);
                            this.setState({ beforePassengerDelete: false });
                        }}>
                            <Text style={material.subheading}>
                                Are you sure you want to delete this passenger/occupant?
                            </Text>
                     </MaterialDialog>

                     <MaterialDialog
                        title={"Delete Confirmation"}
                        visible={this.state.beforeDriverDelete}
                        onCancel={() => {
                            this.setState({ beforeDriverDelete: false });
                        }}
                        onOk={() => {
                            this.props.deleteDriver({driverID: this.props.vehicle.driver});
                            this.setState({ beforeDriverDelete: false, driverDeleted: true });
                        }}>
                            <Text style={material.subheading}>
                                Are you sure you want to delete this driver?
                            </Text>
                     </MaterialDialog>
                 </>
            )
        } else{
            return(
                <Section title={`${name} ${index + 1}`}>
                    <HStack mt={4} flexWrap='wrap'>
                        <IconButton
                         topMargin={4}
                         rightMargin={4}
                         onPress = {() => navigateQuestion(questionData(questions, 'Vehicle'), vehicle.id, 'Vehicle', (index+1), 0, [roadID, vehicle.id])}
                         text={`${name} \nForm`}
                         icon={<Icon color='white' name='local-taxi' size={50}/>}
                         />
                        {!this.state.driverDeleted &&
                        <IconButton
                         topMargin={4}
                         rightMargin={4}
                         onPress={styles.individualCard}
                         onPress= {() => navigateQuestion(questionData(questions, 'Driver'), vehicle.driver, 'Driver', (index+1), 0, [roadID, vehicle.id])}
                         text={`Driver \nForm`}
                         icon={<Icon color='white' name='person' size={50}/>}
                        />}
                        {passengerListArr}
                    </HStack>
                </Section>
            )
        }

    }
}

const mapDispatchToProps = {
    addPassenger,
    deletePassenger,
    deleteDriver,
    deleteVehicle
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSection);
