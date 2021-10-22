import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ name, setName}) {
  
  // console.log(data)
  return (
    <>
      <main>
        <section>
          <h1>Nueva Orquestacion</h1>
          <input type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} />
          
          <Link to='/adapters'>
            <button type="button" className="btn btn-primary">Crear</button>
          </Link>
        </section>
      </main>
    </>
  );
}
