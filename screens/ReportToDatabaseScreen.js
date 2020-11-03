import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import ReportToDatabase from '../components/ReportToDatabase';

export const ReportToDatabaseScreen = ({navigation}) => {
    return(
        <ReportToDatabase
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};