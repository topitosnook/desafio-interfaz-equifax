import React from 'react';
import AdapterForm from './AdapterForm';
import { load } from 'js-yaml';
import { useState, useEffect } from 'react/cjs/react.development';
import Form from './Form';

export default function Adapters({ name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/config/calculateModels.yml')
      .then((res) => res.blob())
      .then((blob) => blob.text())
      .then((yamlAsString) => {
        const aux = load(yamlAsString);
        setData(Object.entries(aux[0]));
      })
      .catch((err) => console.log('yaml err:', err));
  }, []);
  return (
    <>
      <main>
        <p>{name}</p>
        <h1>Elegir adaptador</h1>
        <section>
          {/* <a>{objData.id}</a> */}
        </section>
        <section>
          {/* Tocar un adaptador y que se vea la info dentro */}
          <AdapterForm />
          {/* <Form data={data} /> */}
        </section>
      </main>
    </>
  );
}
