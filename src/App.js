// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import Navigation from './Navigation';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
