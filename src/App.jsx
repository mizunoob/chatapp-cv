import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './components/Login';
import Room from './components/Room';
import SignIn from './components/SignIn'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute';

const App = () => {
  return (
    <AuthProvider>
      <h1>Chat</h1>
      <Router>
        <Switch>
          <LoggedInRoute path="/" exact component={Room} />
          <Route path="/signup" exact component={SignIn} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;