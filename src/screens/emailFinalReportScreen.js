import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import EmailFinalReport from '../components/EmailFinalReport';

export const EmailFinalReportScreen = ({navigation}) => {
    return(
        <EmailFinalReport
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};
