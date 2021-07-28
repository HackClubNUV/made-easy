import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './routes/protected.route';

import HomeScreen from './screens/HomeScreen';
import ProgressScreen from './screens/ProgressScreen';

const App = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/apply" component={ProgressScreen}/>
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
}

export default App;