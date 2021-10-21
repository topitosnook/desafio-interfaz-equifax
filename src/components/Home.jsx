import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Home({ name, setName}) {
 
  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1>Nueva Orquestacion</h1>
          <input type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} />
          
          <Link to='/adapters'>
            <button type='button'>Crear nueva orquestación</button>
          </Link>
        </section>
        {/* poner el nombre a la orquestacion */}
        {/* Boton para generar la orquestacion */}
      </main>
    </>
  );
}
