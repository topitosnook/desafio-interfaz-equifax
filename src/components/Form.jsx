import React, { useState, useEffect } from 'react';
import '../css/form.css';

export default function Form(fixKeys, firstConfigKeys, lastConfigKeys, name) {
  let object = {};
  fixKeys.fixKeys.forEach((key) => (object[key] = []));
  object['config'] = [];
  let config = {};
  fixKeys.firstConfigKeys.forEach((key) => (config[key] = []));
  let insideConfig = {};
  fixKeys.lastConfigKeys.forEach((key) => (insideConfig[key] = []));
  // console.log(insideConfig);
  //--------------------------------------------
  // To build the object
  // object.config = config;
  // object.config.datasources = insideConfig;
  //--------------------------------------------
  const [id, setId] = useState();
  const [mainClass, setMainClass] = useState();
  const [dep, setDep] = useState();
  const [stepName, setStepName] = useState();
  // const [lists, setLists] = useState([]); // Toda la lista de data source
  // const [listValue, setListValue] = useState(); // cada valor dentro de datasource
  const [formAdd, setFormAdd] = useState([]); // Ocupar para ver si se genera el formulario de datasources

  const handleAddFields = () => {
    setFormAdd((prev) => [...prev, insideConfig]);
  };
  // Arreglar esto!!
  const handleRemoveFields = (e, index) => {
    e.preventDefault();
    setFormAdd((prev) => prev.filter((item) => item !== prev[index]));
  };

  const data = [];
  const data1 = [];
  const data2 = [];

  // const [object, setObject] = useState({});
  // console.log('list', lists);
  // console.log(object)

  const onSubmit = (e) => {
    e.preventDefault();
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
  }, [data]);

  // console.log(object);
  // console.log(object);
  // const handleAddFields = () => {
  //   setLists([...lists, insideConfig]);
  // };

  return (
    <div>
      <h2 className='configAdapters'>Configuración del adaptador:</h2>
      <form >
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.fixKeys.map((llave, index) => {
            return (
              <div key={index} className='divFormOne'>
                
                <label htmlFor=''>{llave}</label><br/>
                <br/>
                <input type='text' className="form-control" id="formGroupExampleInput" spellcheck="false" id={llave} onChange={(event) => (data[index] = [llave, event.target.value])} />
                
              </div>
            );
          })}
          <div className='divFormTwo'>
        <h2 className='configAdaptersOne'>Config:</h2>
        {fixKeys.fixKeys.length === 4 &&
          fixKeys.firstConfigKeys.map((llave, index) => {
            if (index === fixKeys.firstConfigKeys.length - 1) {
              return <h3 key={index}>{llave}</h3>;
            } else {
              return (
                <div key={index}>
                  <label htmlFor=''>{llave}</label>
                  <input type='text' className="form-control" id="formGroupExampleInput" spellcheck="false" id={llave} onChange={(event) => (data1[index] = event.target.value)} />
                </div>
              );
            }
          })}
          </div>
        <div>
          {formAdd.length > 0 &&
            formAdd.map((objeto, i) => {
              const llaves = Object.keys(objeto);
              return (
                <div>
                  {' '}
                  {llaves.map((llave, index) => {
                    return (
                      <div key={index} className='inputForm'>
                        <label htmlFor='' className='label'>{llave}</label>
                        <input type='text' className="form-control" id="formGroupExampleInput" spellcheck="false" id={llave} onChange={(event) => (data2[index] = event.target.value)} /><br/>
                      </div>                      
                    )
                  })}
                  <button type='button' className='btnDanger' onClick={(e) => handleRemoveFields(e, i)}>
                    Borrar
                  </button>                  
                </div>
              );
            })}
          <button type='button' className='adition' onClick={handleAddFields}>
            +
          </button>
        </div><br/>

        <button type='submit' className='getBtn' onClick={onSubmit}>
          Guardar
        </button>    
                    
      </form>
    </div>
  );
}
