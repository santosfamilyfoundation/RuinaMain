import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import SaveToDevice from './SaveToDevice';

export const SaveToDeviceScreen = ({navigation}) => {
    return(
        <SaveToDevice
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};
