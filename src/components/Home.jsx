import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

export default function Home({ name, setName}) {
  
  // console.log(data)
  return (
    <>
      <main>       
        <div className='containerHome'>
          <h1 className='newOrquest'>Nueva <br/> Orquestacion</h1>
          <input className='inputHome' spellcheck="false" type="text" name="orquestacion" value={name} onChange={(e) => setName(e.target.value)} />
          <br/>
          <Link to='/adapters'>
            <button type="button" className='btnHome'>Crear</button><br/>
            <br/>
          </Link>          
        </div>
       
      </main>      
    </>
  );
}
