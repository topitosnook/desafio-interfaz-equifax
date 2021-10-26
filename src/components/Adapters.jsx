import React, { useState, useEffect } from 'react';
// import AdapterForm from './AdapterForm';
import Form from './Form';
//import FormMay from './FormMay';
// import ButtonOne from './ButtonOne';

export default function Adapters({ name, nameAdapters, data }) {
  const [fixKeys, setFixKeys] = useState([]);
  const [firstConfigKeys, setFirstConfigKeys] = useState([]);
  const [lastConfigKeys, setLastConfigKeys] = useState([]);
  const [activeAdapter, setActiveAdapter] = useState(0);
  
  // const [mainClass, setMainClass] = useState([]);
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
      <main>
        <p>{name}</p>
        <h1>Elegir adaptador</h1>
        <section>
          {/* <ButtonOne /> */}
          {/* <a>{objData.id}</a> */}
          {/* <FormMay  data={data} /> */}
          {nameAdapters.length === 3 &&
            nameAdapters.map((adapter, index) => {
              return (
                <>
                  <div key={index}>
                    <button type='button' value={index} onClick={getValue}>
                      {adapter}
                    </button>
                  </div>
                </>
              );
            })}
        </section>
        <section>
          <Form fixKeys={fixKeys} name={name} firstConfigKeys={firstConfigKeys} lastConfigKeys={lastConfigKeys} />
          {/* <AdapterForm /> */}
          {/* <Form fixKeys={fixKeys} configKeys={configKeys} nextConfigKeys={nextConfigKeys} obj={obj}/> */}
        </section>
      </main>
    </>
  );
}
