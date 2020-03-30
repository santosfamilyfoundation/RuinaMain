import React from 'react';
import { Layout, Text, Card, Button, CardHeader, Icon, Autocomplete } from '@ui-kitten/components';
import { styles } from './HeaderComponent.style'

const HeaderComponent = (props) => {
    const {data} = props;
    console.log(props);

    return(
        <Layout style={styles.container}>
            <Text category='h4'>{data.text}</Text>
            <Text category='s1'>{data.helperText}</Text>
        </Layout>
    )
};

export default HeaderComponent;