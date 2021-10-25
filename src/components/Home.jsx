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
          <h1 className='newOrquest'>Nueva <br /> Orquestacion</h1>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">nombre</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" spellcheck="false" value={name} onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <br />
          <div class="d-grid gap-2 d-md -flex justify-content-center">
            <Link to='/adapters'>
              <button type="button" class="btn btn-outline-light btn-lg">Crear</button><br />
              <br />
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}








/*import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

export default function Home({ name, setName }) {

    return (
    <>
      <main>
        <div className='containerHome'>
          <h1 className='newOrquest'>Nueva <br /> Orquestacion</h1>
          <input className='inputHome' spellcheck="false" type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <br />
          <div class="d-grid gap-2 d-md -flex justify-content-center">
            <Link to='/adapters'>
              <button type="button" class="btn btn-outline-light btn-lg">Crear</button><br />
              <br />
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}*/
