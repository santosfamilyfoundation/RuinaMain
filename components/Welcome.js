import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
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
                <Button style={styles.styledButton} onPress={() => navigateTo('Quiz')}>Quick Quiz</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Note')}>Note Pad</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Test')}>Test</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Weather')}>Weather</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Map')}>Map</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('PhotoCapture')}>Take A Photo</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Vehicle')}>Vehicle Info</Button>
                <Button style={styles.styledButton} onPress={() => navigateTo('Scan')}>Scan</Button>
              </Layout>
            </SafeAreaView>
          );
    }
};

export default Welcome;
