import React, { useState, useEffect } from 'react';

export default function Form1(fixKeys, firstConfigKeys, lastConfigKeys, name) {
  let object = {};
  fixKeys.fixKeys.forEach((key) => (object[key] = []));
  object['config'] = [];
  let config = {};
  fixKeys.firstConfigKeys.forEach((key) => (config[key] = []));
  let insideConfig = {};
  fixKeys.lastConfigKeys.forEach((key) => (insideConfig[key] = []));

  const [id, setId] = useState();
  const [mainClass, setMainClass] = useState();
  const [dep, setDep] = useState();
  const [stepName, setStepName] = useState();
  const [lists, setLists] = useState([]); // Toda la lista de data source
  const [listValue, setListValue] = useState(insideConfig); // cada valor dentro de datasource
  const data = [];
  const data1 = [];
  const data2 = [];

  
  // console.log('fixedKeys', fixKeys);
  // console.log('first-keys', firstConfigKeys);
  // console.log('lastkeys', lastConfigKeys);
  // const [object, setObject] = useState({});
  // console.log(fixKeys.fixKeys);

  // console.log('list', lists);
  // console.log(object)
  //--------------------------------------------
  // To build the object
  // object.config = config;
  // object.config.datasources = insideConfig;
  //--------------------------------------------
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('data', data);
    setId(data[0]);
    setDep(data[1]);
    setStepName(data[2]);
    setMainClass(data[3]);
  };

  useEffect(() => {
    object.id = id;
    object.dependencies = dep;
    object.stepName = stepName;
    object.mainClass = mainClass;
  }, [data, lists]);

  const handleAddFields = () => {
    setLists([...lists, insideConfig]);
  };
  return (
    <div>
      <h1>Configuración del adaptador</h1>
      <form>
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.fixKeys.map((llave, index) => {
            return (
              <div key={index}>
                <label htmlFor=''>{llave}</label>
                <input type='text' id={llave} onChange={(event) => (data[index] = [llave, event.target.value])} />
              </div>
            );
          })}
        <h2>Config</h2>
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.firstConfigKeys.map((llave, index) => {
            if (index === fixKeys.firstConfigKeys.length - 1) {
              return <h3 key={index}>{llave}</h3>;
            } else {
              return (
                <div key={index}>
                  <label htmlFor=''>{llave}</label>
                  <input type='text' id={llave} onChange={(event) => (data1[index] = event.target.value)} />
                </div>
              );
            }
          })}
        <div>
          {fixKeys.fixKeys.length === 4 &&
            fixKeys.lastConfigKeys.map((llave, index) => {
              return (
                <div key={index}>
                  <label htmlFor=''>{llave}</label>
                  <input type='text' id={llave} onChange={(event) => (data2[index] = event.target.value)} />
                </div>
              );
            })}
          <button type='button' onClick={() => handleAddFields()}>
            +
          </button>
          <button type='button'>-</button>
        </div>

        <button type='submit' onClick={onSubmit}>
          Guardar
        </button>
      </form>
    </div>
  );
}
