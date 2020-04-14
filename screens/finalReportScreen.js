import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import FinalReport from '../components/FinalReport';

export const FinalReportScreen = ({navigation}) => {
    return(
        <FinalReport
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};