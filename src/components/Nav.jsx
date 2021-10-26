import React from 'react';
import { Link } from "react-router-dom"; 
import '../css/nav.css';
import logo from '../assets/Equifax_logo.png'

export default function Nav() {
  return (
  <nav className='nav'>
    <img className="logo" src={logo} alt="Equifax"></img>
    <Link to="/" exact className = "navLinks"><button type='button' className="btn btn-outline-light"> Inicio</button>     
    </Link>
  </nav>
  );
}
