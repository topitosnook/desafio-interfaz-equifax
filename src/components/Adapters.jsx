import React from 'react';
import AdapterForm from './AdapterForm';

export default function Adapters() {

  return (
    <>
    <main>
      <h1>Elegir adaptador</h1>
      <section>
        {/* Traer los nombres de los adaptadores */}
      </section>
      <section>
        {/* Tocar un adaptador y que se vea la info dentro */}
        <AdapterForm />
      </section>
    </main>
    </>
  );
}
