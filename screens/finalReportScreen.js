import React from 'react';
import FinalReport from '../components/FinalReport';
import { View, ScrollView, Keyboard, BackHandler, Pressable, Linking } from 'react-native';
import { styles } from '../components/home/Home.style';
import { TopNavigationAction, Icon } from '@ui-kitten/components';

export const FinalReportScreen = ({navigation}) => {

    const finalReportIcon = (style) => (
                <Icon {...style} name='file-text' fill="white" />
            );
    return(
        <>
            <FinalReport
                navigation = {navigation}
                BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                        onPress={() => navigation.goBack()}/>}
            />
        </>
    );
};
