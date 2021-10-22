import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
import AdapterForm from './components/AdapterForm';
import Nav from './components/Nav';
import Footer from './components/Footer';



export default function App() {
  const [name, setName] = useState('');
  return (
    <Router>
      <Nav />
        <Switch>
        <Route path='/' exact>
          <Home setName={setName} />
        </Route>
        <Route path='/adapters'>
          <Adapters name={name} />
        </Route>
        <Route path='/adapterForm'>
          <AdapterForm />
        </Route>
      </Switch>  
      <Footer />    
    </Router>
  
  );
}
