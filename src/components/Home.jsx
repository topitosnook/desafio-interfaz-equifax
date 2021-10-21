import React from 'react';
import { Link } from 'react-router-dom';


export default function Home({ name, setName}) {
 
  return (
    <>
      <main>
        {/* poner el nombre a la orquestacion */}
        {/* Boton para generar la orquestacion */}
        <section>
          <h1>Nueva Orquestacion</h1>
          <input type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} />
          
          <Link to='/adapters'>
            <button type="button" class="btn btn-primary">Crear</button>
          </Link>
        </section>
      </main>
    </>
  );
}
