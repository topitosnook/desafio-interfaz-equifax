import React from 'react';
import { NavLink } from "react-router-dom"; 

export default function Navbar() {
  return (
  <nav>
    <NavLink to="/" exact className = "navLinks">
      Inicio
    </NavLink>
  </nav>
  );
}
