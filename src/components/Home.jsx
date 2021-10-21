import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main>
        {/* poner el nombre a la orquestacion */}
        {/* Boton para generar la orquestacion */}
        <section>
          <label htmlFor="">Crear Orquestacion</label>
          <input type='text' />
          <Link to='/adapters'>
            <button type="button" class="btn btn-primary">Crear</button>
          </Link>
        </section>
      </main>
    </>
  );
}
