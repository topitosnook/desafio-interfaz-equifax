import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <>
      <main>
        {/* poner el nombre a la orquestacion */}
        {/* Boton para generar la orquestacion */}
        <section>
          <input type='text' />
          <Link to='/adapters'>
            <Button variant="primary" >Crear una nueva orquestación</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
