import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Courusel from './Courusel';

export default function Home({ name, setName }) {

  return (
    <>
      <main>
        <Courusel />
        <div className='containerHome'>
          <h1 className='newOrquest'>Nombra tú <br /> Orquestación</h1>
          <div className="input-group flex-nowrap">           
            <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" spellcheck="false" value={name} onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <br />
          <div className="d-grid gap-2 d-md -flex justify-content-center">
            <Link to='/adapters'>
              <button type="button" className="btn btn-outline-light btn-lg">Crear</button><br />
              <br />
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}
