import React, { useState, useEffect } from 'react';
import Form from './Form';
import '../css/form.css';

export default function Adapters({ name, nameAdapters, data }) {
  const [fixKeys, setFixKeys] = useState([]);
  const [firstConfigKeys, setFirstConfigKeys] = useState([]);
  const [lastConfigKeys, setLastConfigKeys] = useState([]);
  const [activeAdapter, setActiveAdapter] = useState(0);

  const getValue = (e) => {
    setActiveAdapter(e.target.value);
  };
  useEffect(() => {
    //------------------------------
    // Get the FixKeys from the object
    let getFixKeys = [];
    if (data.length > 0) {
      data[0].forEach((element) => {
        getFixKeys = [...getFixKeys, element[0]];
      });
      getFixKeys = getFixKeys.slice(0, -1);
    }
    //------------------------------
    // Get the first ConfigKeys
    const aux = Object.entries(data[activeAdapter][4][1]);
    let otherConfigKeys = [];
    let lastConfigKeys = [];
    aux.forEach((element, index) => {
      otherConfigKeys = [...otherConfigKeys, element[0]];
      //-------------------------------
      // Get the last keys
      if (index === aux.length - 1) {
        lastConfigKeys = Object.keys(element[1][0]);
      }
    });
    setFixKeys(getFixKeys);
    setFirstConfigKeys(otherConfigKeys);
    setLastConfigKeys(lastConfigKeys);
  }, [activeAdapter]);

  return (
    <>

      <p className='pAdapters'>Nombre de orquestación: {name}</p>
      <h1 className='elegirAdapter'>Elegir adaptador:</h1>
      <section className='section'>
        <div className='btnBox'>
          {nameAdapters.length === 3 &&
            nameAdapters.map((adapter, index) => {
              return (
                <>
                  <div key={index}>
                    <button type='button' className='btn btn-lg' value={index} onClick={getValue}>
                      {adapter}
                    </button>
                    <br />
                    <br />
                  </div>
                </>
              );
            })}
        </div>
        <div className='divForm'>
          <Form fixKeys={fixKeys} name={name} firstConfigKeys={firstConfigKeys} lastConfigKeys={lastConfigKeys} />
        </div>
      </section>
    </>
  );
}






