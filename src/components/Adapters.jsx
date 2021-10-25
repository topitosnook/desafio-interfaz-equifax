import React, { useState, useEffect } from 'react';
// import AdapterForm from './AdapterForm';
import Form1 from './Form1';
//import FormMay from './FormMay';
// import ButtonOne from './ButtonOne';
export default function Adapters({ name, nameAdapters, data }) {
  // console.log(data[0][4][1]) // this get what is inside Config for the firts adapter (position[0])
  const [fixKeys, setFixKeys] = useState([]);
  const [firstConfigKeys, setFirstConfigKeys] = useState([]);
  const [lastConfigKeys, setLastConfigKeys] = useState([]);
  // const [mainClass, setMainClass] = useState([]);
  const getValue = (e) => {
    // this gets the value of the button--> how can this be use
    // console.log(e.target.value); //will give you the value continue
    return e.target.value;
  };
  useEffect(() => {
    // Get the FixKeys from the object
    let getFixKeys = [];
    if (data.length > 0) {
      data[0].forEach((element) => {
        // console.log(typeof(element[0]))
        getFixKeys = [...getFixKeys, element[0]];
      });
      getFixKeys = getFixKeys.slice(0, -1);
      // console.log(fixKeys.length);
      // console.log(typeof(fixKeys));
    }
    //------------------------------
    // Get the first ConfigKeys
    const aux = Object.entries(data[0][4][1]);
    let otherConfigKeys = [];
    let lastConfigKeys = [];
    aux.forEach((element, index) => {
      otherConfigKeys = [...otherConfigKeys, element[0]];
      //-------------------------------
      // Get the last keys
      if (index === aux.length - 1) {
        lastConfigKeys = Object.keys(element[1][0]);
        // console.log(lastConfigKeys);
      }
    });
    setFixKeys(getFixKeys);
    setFirstConfigKeys(otherConfigKeys);
    setLastConfigKeys(lastConfigKeys);
  }, []);
  // console.log(fixKeys);
  // console.log(firstConfigKeys)
  // console.log(lastConfigKeys);

  return (
    <>
      <main>
        <p>{name}</p>
        <h1>Elegir adaptador</h1>
        <section>
           {/* <ButtonOne /> */}
          {/* <a>{objData.id}</a> */}
          {/* Tocar un adaptador y que se vea la info dentro */}
          {/* <AdapterForm /> */}
          {/* <FormMay  data={data} /> */}
          {nameAdapters.length === 2 &&
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
          <Form1 fixKeys={fixKeys} name={name} firstConfigKeys={firstConfigKeys} lastConfigKeys={lastConfigKeys} />
          {/* <AdapterForm /> */}
          {/* <Form fixKeys={fixKeys} configKeys={configKeys} nextConfigKeys={nextConfigKeys} obj={obj}/> */}
        </section>
      </main>
    </>
  );
}
