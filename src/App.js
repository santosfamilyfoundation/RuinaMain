import React from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { Provider } from 'react-redux';
import { AppNavigator } from './appNavigator';
import configureStore from './store';
import { NativeBaseProvider, extendTheme } from 'native-base';

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
      <SSRProvider>
        <NativeBaseProvider theme = {theme}>
          <Provider store = { store }>
            <AppNavigator/>
          </Provider>
        </NativeBaseProvider>
      </SSRProvider>
  )
};

export default App;
