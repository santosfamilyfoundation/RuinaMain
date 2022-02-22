import React from 'react';
import DiagramTool from './DiagramTool';
import { View, ScrollView, Keyboard, BackHandler, Pressable } from 'react-native';
import { styles } from '../home/Home.style';
import { TopNavigationAction, Icon } from '@ui-kitten/components';

export const DiagramToolScreen = ({navigation}) => {
    return(
        <DiagramTool
            navigation = {navigation}
            BackAction = {()=> <TopNavigationAction icon={(style) => <Icon {...style} name='arrow-back'/>}
                                                    onPress={() => navigation.goBack()}/>}
        />
    );
};