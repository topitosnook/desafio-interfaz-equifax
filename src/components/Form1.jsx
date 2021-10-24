import React, { useState } from 'react';

export default function Form1(fixKeys, firstConfigKeys, lastConfigKeys, name) {
  // console.log('fixedKeys', fixKeys);
  // console.log('first-keys', firstConfigKeys);
  // console.log('lastkeys', lastConfigKeys);
  // const [object, setObject] = useState({});
  // console.log(fixKeys.fixKeys);
  let object = {};
  fixKeys.fixKeys.forEach((key) => (object[key] = []));
  object['config'] = [];
  let config = {};
  fixKeys.firstConfigKeys.forEach((key) => (config[key] = []));
  let insideConfig = {};
  fixKeys.lastConfigKeys.forEach(key => insideConfig[key]=[]);
  console.log(object)
  //--------------------------------------------
  // To build the object
  // object.config = config;
  // object.config.datasources = insideConfig;
  //--------------------------------------------
  return (
    <div>
      <h1>Configuración del adaptador</h1>
      <form>
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.fixKeys.map((llave, index) => {
            return (
              <div key={index}>
                <label htmlFor=''>{llave}</label>
                <input type='text' id={llave} />
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
                  <input type='text' id={llave} />
                </div>
              );
            }
          })}
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.lastConfigKeys.map((llave, index) => {
            return (
              <div key={index}>
                <label htmlFor=''>{llave}</label>
                <input type='text' id={llave} />
              </div>
            );
          })}
        <button type='submit'>Guardar</button>
      </form>
    </div>
  );
}
