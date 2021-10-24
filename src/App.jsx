import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
//import AdapterForm from './components/AdapterForm';
import Nav from './components/Nav';
//import { load } from 'js-yaml';
import Footer from './components/Footer';



export default function App() {
  const [name, setName] = useState('');
  /* const [data, setData] = useState([]);
  const [fixKeys, setFixKeys] = useState([]);
  const[obj,setObj] =useState([])

  useEffect(() => {
    fetch('data/config/dataEnricher.yml')
      .then((res) => res.blob())
      .then((blob) => blob.text())
      .then((yamlAsString) => {
        const aux = load(yamlAsString);
        setData(Object.entries(aux[0]));
        setFixKeys(Object.keys(aux[0]));
        setObj(Object.values(aux[0]));
      })
      .catch((err) => console.log('yaml err:', err));
  }, []); */
  /* console.log(data);
  console.log(fixKeys)
  console.log(obj); */

  return (
    <Router>
      <Nav />
        <Switch>
        <Route path='/' exact>
          <Home setName={setName} />
        </Route>
        <Route path='/adapters'>
          <Adapters name={name} /* data={data} *//>
        </Route>
      </Switch>  
      <Footer />    
    </Router>
  
  );
}
