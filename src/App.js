import React,{useState} from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route } 
  from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
import AdapterForm from './components/AdapterForm';
import Nav from './components/Nav';

export default function App() {
  const [name, setName] = useState('');
  
  
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact >
<<<<<<< HEAD:src/App.jsx
          <Home />
        </Route>
=======
          <Home setName={setName}/>
        </Route>git fetch origin
>>>>>>> f456c01dcd7646aab5eb099d2af56bc3c1e35d1a:src/App.js
        <Route path="/adapters">
          <Adapters name={name} />
        </Route>
        <Route path="/adapterForm">
          <AdapterForm />
        </Route>
      </Switch>
    </Router>
  );
}
