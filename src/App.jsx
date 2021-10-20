import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>git fetch origin
        <Route path="/adapters">
          <Adapters />
        </Route>
      </Switch>
    </Router>
  );
}
