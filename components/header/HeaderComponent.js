import React from 'react';
import { Box, Text, VStack } from 'native-base';
//import { Layout, Text } from '@ui-kitten/components';
import { styles } from './HeaderComponent.style'
import { connect } from 'react-redux';
import { dependencyParser } from '../../utils/dependencyHelper';

const HeaderComponent = (props) => {
    const {data, dependencyID} = props;
    var renderComponent = dependencyParser(props.response, data, dependencyID)
    if (renderComponent){
        return(
            <Box>
                <VStack>
                    <Text>{data.question}</Text>
                    <Text>{data.helperText}</Text>
                </VStack>
            </Box>
           /* <Layout style={styles.container}>
                <Text category='h5'>{data.question}</Text>
                <Text category='s1'>{data?.helperText}</Text>
            </Layout> */
        )
    }else{
        return null
    }
};

const mapStateToProps = (state) => {
    // console.log('state', state);
    // const { story } = state;
    const { response } = state.storyReducer
    return { response }
};

export default connect(mapStateToProps)(HeaderComponent);