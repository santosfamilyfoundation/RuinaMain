import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './appNavigator';
import configureStore from './store';

const store = configureStore()

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Provider store = { store }>
        <AppNavigator/>
      </Provider>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;