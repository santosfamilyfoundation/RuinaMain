import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
//<Text category='h1'>{this.props.mapDetails.current}</Text>
class MapSummary extends Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='Map Summary' alignment='center' leftControl={this.props.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text category='h1'>{this.props.mapDetails}</Text>
                </Layout>
            </SafeAreaView>
        )
    }

};


const mapStateToProps = (state) => {
  const { mapDetails } = state
  return { mapDetails }
};

export default connect(mapStateToProps)(MapSummary);
