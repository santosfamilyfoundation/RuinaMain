import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Result' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text category='h1'>{this.props.story.current}</Text>
                </Layout>
            </SafeAreaView>
        )
    }

};

const mapStateToProps = (state) => {
    const { story } = state
    return { story }
};
  
export default connect(mapStateToProps)(Result);