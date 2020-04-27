import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import InfoExchange from '../components/InfoExchange';

export const InfoExchangeScreen = ({navigation}) => {
    return(
        <InfoExchange
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};
