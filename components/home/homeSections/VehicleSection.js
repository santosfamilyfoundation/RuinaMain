import React, { Component } from 'react';
import { styles } from '../Home.style';
import { View} from 'react-native';
import { Text, Card, CardHeader, Icon } from '@ui-kitten/components';
import { MaterialDialog } from 'react-native-material-dialog';
import { material } from "react-native-typography";
import { connect } from 'react-redux';
import { addPassenger, deletePassenger } from '../../../actions/PassengerAction';
import { deleteVehicle } from '../../../actions/VehicleAction';
import { deleteDriver } from '../../../actions/DriverAction';
import { questions } from '../../../data/questions';

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

    filterQuestionsData = (questionType) => {
        return questions.data.filter(question => question.display.includes(questionType));
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
        const {navigation, vehicle, index, name, edit, passenger, roadID} = this.props
        let vehicleQuestions = this.filterQuestionsData('vehicle');
        let passengerQuestions = this.filterQuestionsData('passenger');
        let driverQuestions = this.filterQuestionsData('driver');

        const VehiclesHeader = () => (
            <CardHeader title={`${name} ${index + 1}`} />
        );

        // would need to refine if we want to put delete vehicle section icon next to card header
        // const VehiclesHeader = () => (
        //     <View style={{ flexDirection: 'row' }}>
        //       <Text category='h6' style={styles.vehicleSectionHeader}>{`${name} ${index + 1}`}</Text>
        //       <Icon name='minus-circle' width={25} height={25} />
        //     </View>
        // );

        const navigateQuestion = (form, id, type, vehicleIdx, passengerIdx, ids) => {
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
          navigation.navigate('Question', {questions: form.data, objectID: id, type, name, dependencyID: ids})
        }

        // create passengers associated with vehicle section in two modes (edit and non edit)
        let passengerListArr = passenger.data.filter(passenger => passenger.vehicle == vehicle.id).map((passenger, idx) => {
            if (!this.state.driverDeleted) {
              if (edit) {
                return (
                    <Card key={idx} style={styles.individualCardRemove} onPress= {() => this.setState({beforePassengerDelete:true, passengerToDelete:passenger.id})}>
                        <Icon name='person-remove' width={75} height={75} float alignSelf= "center" fill='white' />
                        <Text style={styles.itemCardFooterEdit} category="s1">Remove Passenger {idx+1}</Text>
                    </Card>
                )
              } else {
                return (
                    <Card key={idx} style={styles.individualCard} onPress= {() => navigateQuestion(passengerQuestions, passenger.id, 'Passenger', (index+1), (idx+1), [roadID, passenger.vehicle, passenger.id])}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Passenger {idx+1}</Text>
                    </Card>
                )
              }
            } else {
              if (edit) {
                return (
                    <Card key={idx} style={styles.individualCardRemove} onPress= {() => this.setState({beforePassengerDelete:true, passengerToDelete:passenger.id})}>
                        <Icon name='person-remove' width={75} height={75} float alignSelf= "center" fill="white" />
                        <Text style={styles.itemCardFooterEdit} category="s1">Remove Occupant {idx+1}</Text>
                    </Card>
                )
              } else {
                return (
                    <Card key={idx} style={styles.individualCard} onPress= {() => navigateQuestion(passengerQuestions, passenger.id, 'Occupant', (index+1), (idx+1), [roadID, passenger.vehicle, passenger.id])}>
                        <Icon name='person' width={75} height={75} />
                        <Text style={styles.itemCardFooter} category="s1">Occupant {idx+1}</Text>
                    </Card>
                )
              }
            }
        });

        // describes components of a single vehicle section with two modes (edit and non edit)
        if (edit){
            return(
                <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                    <View style={styles.itemCardContent}>
                        {!this.state.driverDeleted &&
                          <Card style={styles.individualCardRemove} onPress= {() => this.setState({beforeDriverDelete:true})}>
                              <Icon name='person-remove' width={75} height={75} float alignSelf= "center" fill='white'/>
                              <Text style={styles.itemCardFooterEdit} category="s1">Remove Driver</Text>
                          </Card>
                        }
                        {!this.state.driverDeleted &&
                          <Card style={styles.individualCardAdd} onPress= {this._addPassenger} >
                            <Icon name='person-add' width={75} height={75} float alignSelf= "center" fill='white'/>
                            <Text style={styles.itemCardFooterEdit} category="s1">Add Passenger</Text>
                          </Card>
                        }
                        {this.state.driverDeleted &&
                          <Card style={styles.individualCardAdd} onPress= {this._addPassenger} >
                            <Icon name='person-add' width={75} height={75} float alignSelf= "center" fill='white'/>
                            <Text style={styles.itemCardFooterEdit} category="s1">Add Occupant</Text>
                          </Card>
                        }
                        {passengerListArr}
                        <Card style={styles.vehicleRemove} float onPress= {() => this.setState({beforeVehicleDelete:true})}>
                        <View style={styles.vehicleRemove}>
                          <Icon name='minus-circle' width={75} height={75} fill='white'  />
                          <Text style={styles.itemCardFooterEditVehicle} float category="s1">Delete Vehicle {index+1}</Text>
                        </View>
                        </Card>

                        <MaterialDialog
                          title={"Delete Confirmation"}
                          visible={this.state.beforeVehicleDelete}
                          onCancel={() => {
                            this.setState({ beforeVehicleDelete: false });
                          }}
                          onOk={() => {
                            this._deleteVehicleSection(this.props.vehicle);
                            this.setState({ beforeVehicleDelete: false });
                          }}
                        >
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
                          }}
                        >
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
                          }}
                        >
                          <Text style={material.subheading}>
                            Are you sure you want to delete this driver?
                          </Text>
                        </MaterialDialog>
                    </View>
                </Card>
            )
        } else{
            return(
                <Card key={vehicle.id} header={VehiclesHeader} style={styles.itemCard} >
                    <View style={styles.itemCardContent}>
                        <Card style={styles.individualCard} onPress= {() => navigateQuestion(vehicleQuestions, vehicle.id, 'Vehicle', (index+1), 0, [roadID, vehicle.id])}>
                            <Icon name='car' width={75} height={75} style={{justifyItems:'center', alignItems:'center'}}/>
                            <Text style={styles.itemCardFooter} category="s1">{name}</Text>
                        </Card>
                        {!this.state.driverDeleted &&
                          <Card style={styles.individualCard} onPress= {() => navigateQuestion(driverQuestions, vehicle.driver, 'Driver', (index+1), 0, [roadID, vehicle.id])}>
                              <Icon name='person' width={75} height={75} />
                              <Text style={styles.itemCardFooter} category="s1">Driver</Text>
                          </Card>
                        }
                        {passengerListArr}
                    </View>
                </Card>
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
