import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, ButtonGroup, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { styles } from './Welcome.style';

class Welcome extends Component {

    render() {

        const navigateTo = (loc) => {
            this.props.navigation.navigate(loc);
          };

        return (
            <SafeAreaView style={{ flex: 1 }}>
              <TopNavigation title='Welcome' alignment='center'/>
              <Divider/>
              <Layout style={styles.centeredContainer}>
                <Button style={styles.styledButton} onPress={() => navigateTo('Survey')}>Quick Survey</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Note')}>Note Pad</Button>
                <ButtonGroup>
                  <Button onPress={() => navigateTo('Driver')}>Driver</Button>
                  <Button onPress={() => navigateTo('NonMotorist')}>NonMotorist</Button>
                  <Button onPress={() => navigateTo('Passenger')}>Passenger</Button>
                  <Button onPress={() => navigateTo('Vehicle')}>Vehicle</Button>
                  <Button onPress={() => navigateTo('Road')}>Road</Button>
                </ButtonGroup>
                <Button style={styles.styledButton} onPress={() => navigateTo('Test')}>Test</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Weather')}>Weather</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Vehicle')}>Vehicle Info</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Scan')}>Scan</Button>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
