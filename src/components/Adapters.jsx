import React from 'react';
//import AdapterForm from './AdapterForm';
// import { useState, useEffect } from 'react/cjs/react.development';
import Form from './Form';

export default function Adapters({ name, fixKeys }) {
 
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
          {/* <AdapterForm /> */}
          <Form fixKeys={fixKeys} />
        </section>
      </main>
    </>
  );
}
