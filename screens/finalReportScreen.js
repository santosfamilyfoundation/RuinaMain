import React from 'react';
import FinalReport from '../components/FinalReport';
import { View, ScrollView, Keyboard, BackHandler, Pressable } from 'react-native';
import { styles } from '../components/home/Home.style';
import { TopNavigation, TopNavigationAction, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';

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
        <View style={styles.rightControlsContainer}>
                                             <Layout style={styles.rightControls}>
                                               <Pressable style={styles.rightControls} onPress = {() =>
                                               {navigation.navigate('Welcome')}
                                               }>
                                                 <TopNavigationAction icon={finalReportIcon}/>
                                                 <Text style={styles.rightControlsText}>Back to New Report</Text>
                                               </Pressable>
                                             </Layout>
        </View>
        </>
    );
};
