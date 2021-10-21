import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
import Nav from './components/Nav';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/adapters'>
            <Adapters />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
