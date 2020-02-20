import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Result extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Result' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text category='h1'>{this.props.genericReducer.tester}</Text>
                    <Button onPress = {() => console.log(this.props)}>log it</Button>
                </Layout>
            </SafeAreaView>
        )
    }

};

const mapStateToProps = (state) => {
    const { genericReducer } = state
    return { genericReducer }
};

export default connect(mapStateToProps)(Result);
