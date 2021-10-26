import React, { useState } from 'react';
import YAML from 'js-yaml';
import { saveAs } from 'file-saver';
// import YAML from 'json2yaml';

// const YAML = require('json-to-pretty-yaml');
// const YAML = require('json2yaml');

export default function Form(fixKeys, firstConfigKeys, lastConfigKeys, name) {
  let object = {};
  fixKeys.fixKeys.forEach((key) => (object[key] = []));
  let config = {};
  fixKeys.firstConfigKeys.forEach((key) => (config[key] = []));
  let insideConfig = {};
  fixKeys.lastConfigKeys.forEach((key) => (insideConfig[key] = []));

  const [formAdd, setFormAdd] = useState([]); // Ocupar para ver si se genera el formulario de datasources

  const handleAddFields = (e) => {
    e.preventDefault();
    setFormAdd((prev) => [...prev, insideConfig]);
  };

  // Arreglar esto!!
  const handleRemoveFields = (e, index) => {
    e.preventDefault();
    setFormAdd((prev) => prev.filter((item) => item !== prev[index]));
  };

  // const onChangeVal = (index, event) => {
  //   event.preventDefault();
  //   setFormAdd((prev) =>
  //     prev.map((item, i) => {
  //       if (i !== index) {
  //         return item;
  //       }
  //       return {
  //         ...item,
  //         [event.target.name]: event.target.value,
  //       };
  //     })
  //   );
  // };
  // console.log('fromAdd', formAdd);

  const data = [];
  const data1 = [];
  const data2 = [];
  // console.log(fixKeys.firstConfigKeys);
  let adapterArray = [];
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('data', data);
    // console.log('data1', data1);
    // console.log('data2', data2);

    const adapterObject = {};
    const configObject = {};
    data.forEach((pairValueKey) => {
      adapterObject[pairValueKey[0]] = pairValueKey[1];
    });
    fixKeys.firstConfigKeys.forEach((llave, index) => {
      if (index === fixKeys.firstConfigKeys.length - 1) {
        configObject[llave] = formAdd;
      } else {
        data1.forEach((pairInConfig) => {
          configObject[pairInConfig[0]] = pairInConfig[1];
        });
      }
    });
    adapterObject['config'] = configObject;
    // console.log(adapterObject);
    // console.log(configObject);
    adapterArray = [...adapterArray, adapterObject];
  };

  const onDownload = (e) => {
    e.preventDefault();
    console.log('adapterArray', adapterArray);
    let jasonfile =JSON.stringify(adapterArray);
    jasonfile =JSON.parse(jasonfile);
    console.log('jasonFile', jasonfile);

    const jsonToYaml = YAML.dump(jasonfile);
    const blob = new Blob([jsonToYaml], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${fixKeys.name}.yml`);
  };



  console.log(formAdd);
  return (
    <div>
      <h1>Configuración del adaptador</h1>
      <form>
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.fixKeys.map((llave, index) => {
            return (
              <div key={index}>
                <label htmlFor=''>{llave}</label>
                <input type='text' name={llave} onChange={(event) => (data[index] = [llave, event.target.value])} />
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
                  <input type='text' name={llave} onChange={(event) => (data1[index] = [llave, event.target.value])} />
                </div>
              );
            }
          })}
        <div>
          {formAdd.length > 0 &&
            formAdd.map((objeto, i) => {
              const llaves = Object.keys(objeto);
              return (
                <div key={i}>
                  {llaves.map((llave, index) => {
                    return (
                      <div key={index}>
                        <label htmlFor=''>{llave}</label>
                        <input type='text' name={llave} onChange={(event) => (data2[index] =[[i, llave, event.target.value]])} />
                        {/* <input type='text' name={llave} onChange={(e) => onChangeVal(index, e)} /> */}
                      </div>
                    );
                  })}
                  <button type='button' onClick={(e) => handleRemoveFields(e, i)}>
                    Borrar
                  </button>
                </div>
              );
            })}
          <button type='button' onClick={handleAddFields}>
            +
          </button>
        </div>
        <button type='submit' onClick={onSubmit}>
          Guardar
        </button>
        <button type='submit' onClick={onDownload}>
          Descargar
        </button>
      </form>
    </div>
  );
}
