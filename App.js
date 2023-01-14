import React from 'react';

import {StatusBar, useColorScheme} from 'react-native';

import MainStackNavigation from './src/navigation/mainStackNavigation';

import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  

  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
};



export default App;
