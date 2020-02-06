import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Ruina' alignment='center' leftControl={this.props.BackAction()}/>
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
  
export default connect(mapStateToProps)(Detail);