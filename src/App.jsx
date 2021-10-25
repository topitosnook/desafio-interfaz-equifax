import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adapters from './components/Adapters';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';



export default function App() {
  // const [fixKeys, setFixKeys] = useState([]);
  // const [firstConfigKeys, setFirstConfigKeys] = useState([]);
  // const [lastConfigKeys, setLastConfigKeys] = useState([]);
  const [name, setName] = useState('');
  const [nameAdapters, setNameAdapters] = useState([]);
  const [data, setData] = useState([]);
  const allAdaptersNames = [];
  const dataAdapters = [];
  const nameFiles = ['data/config/dataEnricher.yml', 'data/config/outputHandler.yml'];
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
          {/* <Adapters
            nameAdapters={nameAdapters}
            name={name}
            data={data}
            fixKeys={fixKeys}
            firstConfigKeys={firstConfigKeys}
            lastConfigKeys={lastConfigKeys}
          /> */}
          {/* <Adapters nameAdapters={nameAdapters} name={name} fixKeys={fixKeys} configKeys={configKeys} nextConfigKeys={nextConfigKeys} obj={obj} /> */}
        </Route>
      </Switch>  
      <Footer />    
    </Router>
  
  );
}
