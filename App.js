import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './appNavigator';
import configureStore from './store';
import { NativeBaseProvider, Center } from 'native-base';
const store = configureStore()

const App = () => (
  const theme = extendTheme({
    components: {
        Box: {
            .section: {
                baseStyle: {
                    rounded: 'md',
                    bg: 'light.300'
                }
            }
        }
    }
  })

  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <NativeBaseProvider theme={theme}>
      <Provider store = { store }>
        <AppNavigator/>
      </Provider>
    </NativeBaseProvider>
  </React.Fragment>
);

export default App;
