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
        },
        AccordionSummary: {
            baseStyle: {
                _text: {
                    fontSize: 'xl',
                    fontWeight: 'bold'
                },
                _expanded: {
                    _text: {
                        fontSize: 'xl',
                        fontWeight: 'bold'
                    }
                }
            }
        }
    },
    colors: {
        primary: {
            50: '#dbf4ff',
            100: '#addbff',
            200: '#7cc2ff',
            300: '#4aa9ff',
            400: '#1a91ff',
            500: '#0077e6',
            600: '#005db4',
            700: '#004282',
            800: '#002851',
            900: '#000e21'
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
