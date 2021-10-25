import React from 'react';
import { NavLink } from "react-router-dom"; 
import '../css/nav.css';
import logo from '../assets/Equifax_logo.png'

export default function Nav() {
  return (
  <nav className='nav'>
    <img className="logo" src={logo} alt="Equifax"></img>
    <NavLink to="/" exact className = "navLinks">
      Inicio
    </NavLink>
  </nav>
  );
}
