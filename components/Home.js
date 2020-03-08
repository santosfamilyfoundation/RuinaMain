import React, { Component } from 'react';
import { TextInput, StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './Home.style';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

class Home extends Component {

    render(){
        const {
            driver,
            nonmotorist,
            vehicle,
            passenger,
            } = this.props

        const vehiclesListArr = vehicle.vehicles.map((vehicle, index) => (
            <Card key={vehicle.id} style={styles.itemCard}>
            <View style={styles.itemCardContent}>
                <Icon name='car' width={75} height={75} />
                {vehicle.hazardous ?
                    <Text style={styles.itemCardFooter} category="s1">Hazardous Vehicle {index+1}</Text>
                    :
                    <Text style={styles.itemCardFooter} category="s1">Vehicle {index+1}</Text>
                }
            </View>
        </Card>
        ))

        const driverListArr = driver.drivers.map((driver, index) => (
            <Card key={driver.id} style={styles.itemCard}>
                <View style={styles.itemCardContent}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Driver {index+1}</Text>
                </View>
            </Card>
        ))

        const nonmotoristListArr = nonmotorist.nonmotorists.map((nonmotorist, index) => (
            <Card key={nonmotorist.id} style={styles.itemCard}>
                <View style={styles.itemCardContent}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Non-Motorist {index+1}</Text>
                </View>
            </Card>
        ))

        const passengerListArr = passenger.passengers.map((passenger, index) => (
            <Card key={passenger.id} style={styles.itemCard}>
                <View style={styles.itemCardContent}>
                    <Icon name='person' width={75} height={75} />
                    <Text style={styles.itemCardFooter} category="s1">Passenger {index+1}</Text>
                </View>
            </Card>
        ))

        const VehiclesHeader = () => (
            <CardHeader title="Vehicles" />
        );
        const PeopleHeader = () => (
            <CardHeader title="People" />
        );
        const RoadHeader = () => (
            <CardHeader title="Roadway" />
        );

        const peopleListArr = [...driverListArr, ...nonmotoristListArr, ...passengerListArr];
        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' style = {{marginBottom: 15}}alignment='center' leftControl={this.props.BackAction()}/>
                <ScrollView>
                <Card header={VehiclesHeader} style={styles.sectionCard}>
                    <Layout style={styles.questionContainer}>
                        {vehiclesListArr}
                    </Layout>
                </Card>
                <Card header={PeopleHeader} style={styles.sectionCard}>
                    <Layout style={styles.questionContainer}>
                        {peopleListArr}
                    </Layout>
                </Card>
                <Card header={RoadHeader} style={styles.sectionCard}>
                    <Layout style={styles.questionContainer}>
                        <Card style={styles.itemCard}>
                            <View style={styles.itemCardContent}>
                                <Icon name='paper-plane' width={75} height={75} />
                                <Text style={styles.itemCardFooter} category="s1">Road</Text>
                            </View>
                        </Card>
                    </Layout>
                </Card>
                </ScrollView>
            </SafeAreaView>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        driver: state.driverReducer,
        nonmotorist: state.nonmotoristReducer,
        vehicle: state.vehicleReducer,
        passenger: state.passengerReducer,
        quiz: state.quickquizReducer
    }
}


export default connect(mapStateToProps)(Home);