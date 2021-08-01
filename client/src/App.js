import React, {useEffect} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import auth from './helper/auth';
import './assets/font.css'
import ProtectedRoute from './routes/protected.route';

import HomeScreen from './screens/HomeScreen';
import ProgressScreen from './screens/ProgressScreen';

const App = () => {
  const history = useHistory();

  useEffect(() => {
    const currentTime = Date.now() / 1000;
    if (!localStorage.getItem('auth') &&
      (localStorage.getItem('auth') &&
        JSON.parse(localStorage.getItem('auth').exp < currentTime
      ))
    ) {
      auth.logout(() => { history.replace('/') });
    }
    else {
      history.push('/apply');
    }
  });

  return (
    <Switch>
      <ProtectedRoute path="/apply" component={ProgressScreen}/>
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
}

export default App;