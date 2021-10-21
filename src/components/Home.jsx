import React from 'react';
import { Link } from 'react-router-dom';


export default function Home({ name, setName}) {
 
  return (
    <>
      <main>
        {/* poner el nombre a la orquestacion */}
        {/* Boton para generar la orquestacion */}
        <section>
<<<<<<< HEAD
          <label htmlFor="">Crear Orquestacion</label>
          <input type='text' />
=======
          <h1>Nueva Orquestacion</h1>
          <input type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} />
          
>>>>>>> f456c01dcd7646aab5eb099d2af56bc3c1e35d1a
          <Link to='/adapters'>
            <button type="button" class="btn btn-primary">Crear</button>
          </Link>
        </section>
      </main>
    </>
  );
}
