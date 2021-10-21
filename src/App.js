import React,{useState} from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route } 
  from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';

export default function App() {
  const [name, setName] = useState('');
  
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home setName={setName}/>
        </Route>git fetch origin
        <Route path="/adapters">
          <Adapters name={name} />
        </Route>
      </Switch>
    </Router>
  );
}
