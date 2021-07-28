import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
}

export default App;