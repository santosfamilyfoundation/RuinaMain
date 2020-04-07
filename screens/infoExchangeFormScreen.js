import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import InfoExchangeForm from '../components/InfoExchangeForm';

export const InfoExchangeFormScreen = ({ navigation }) => {

    return(
        <InfoExchangeForm
            navigation = { navigation }
            BackAction = { () => <TopNavigationAction icon={ (style) => <Icon {...style} name='arrow-back' /> } 
                        onPress = {() => navigation.goBack()}/> }
            operatorDetail = {navigation.state.params}
        />
    );
};