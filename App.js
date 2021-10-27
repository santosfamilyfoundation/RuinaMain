import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './appNavigator';
import configureStore from './store';
import { NativeBaseProvider, Center, extendTheme } from 'native-base';
const store = configureStore()

const App = () => {
  return (
      <React.Fragment>
        <NativeBaseProvider>
          <Provider store = { store }>
            <AppNavigator/>
          </Provider>
        </NativeBaseProvider>
      </React.Fragment>
  )
};

export default App;
