import React from 'react';
//import AdapterForm from './AdapterForm';
// import { useState, useEffect } from 'react/cjs/react.development';
//import Form from './Form';
//import FormMay from './FormMay';
import ButtonOne from './ButtonOne';

export default function Adapters({ name, data }) {
 
  return (
    <>
      <main>
        <p>{name}</p>
        <h1>Elegir adaptador</h1>
        <section>
          <ButtonOne />
          {/* <a>{objData.id}</a> */}
        
          {/* Tocar un adaptador y que se vea la info dentro */}
          {/* <AdapterForm /> */}
          {/* <FormMay  data={data} /> */}
        </section>
      </main>
    </>
  );
}
