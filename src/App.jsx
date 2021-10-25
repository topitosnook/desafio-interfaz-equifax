import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { load } from 'js-yaml';

export default function App() {
  // const [fixKeys, setFixKeys] = useState([]);
  // const [firstConfigKeys, setFirstConfigKeys] = useState([]);
  // const [lastConfigKeys, setLastConfigKeys] = useState([]);
  const [name, setName] = useState('');
  const [nameAdapters, setNameAdapters] = useState([]);
  const [data, setData] = useState([]);
  const allAdaptersNames = [];
  const dataAdapters = [];
  const nameFiles = ['data/config/dataEnricher.yml', 'data/config/outputHandler.yml', 'data/config/evaluateConditions.yml'];
  useEffect(() => {
    nameFiles.forEach((file) => {
      fetch(file)
        .then((res) => res.blob())
        .then((blob) => blob.text())
        .then((yamlAsString) => {
          const aux = load(yamlAsString);
          allAdaptersNames.push(aux[0].id);
          dataAdapters.push(Object.entries(aux[0]));
          setNameAdapters(allAdaptersNames);
          setData(dataAdapters);
        });
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home setName={setName} />
        </Route>
        <Route path='/adapters'>
          <Adapters nameAdapters={nameAdapters} name={name} data={data} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
