import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './appNavigator';
import configureStore from './store';
import { NativeBaseProvider, Center, extendTheme } from 'native-base';

const store = configureStore()

const theme = extendTheme({
    components: {
        FormControlLabel: {
            baseStyle: {
                _text: {
                    fontSize: 20
                },
            }
        },
        FormControlHelperText: {
            baseStyle: {
                _text: {
                    fontSize: 16
                },
            }
        }
    }
});

const App = () => {
  return (
      <React.Fragment>
        <NativeBaseProvider theme = {theme}>
          <Provider store = { store }>
            <AppNavigator/>
          </Provider>
        </NativeBaseProvider>
      </React.Fragment>
  )
};

export default App;
