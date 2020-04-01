import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from './HeaderComponent.style'

const HeaderComponent = (props) => {
    const {data} = props;

    return(
        <Layout style={styles.container}>
            <Text category='h5'>{data.question}</Text>
            <Text category='s1'>{data?.helperText}</Text>
        </Layout>
    )
};

export default HeaderComponent;