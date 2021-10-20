import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section>
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
