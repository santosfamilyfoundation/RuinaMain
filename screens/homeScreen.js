import React from 'react';
import Home from '../components/home/Home';
import { styles } from './screens.style';
import { Icon, TopNavigationAction, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';

export const HomeScreen = ({ navigation }) => {

  return (
    <Home
        navigation = { navigation }
        BackAction = { ()=>
          <Layout style={styles.actionContainer}>
            <TopNavigationAction
              icon={ (style) => <Icon {...style} name='arrow-back' /> }
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.iconText}>Back</Text>
          </Layout>
        }
    />
  );
};
