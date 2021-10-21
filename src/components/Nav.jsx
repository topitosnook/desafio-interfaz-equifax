import React from 'react';
import { NavLink } from "react-router-dom"; 

export default function Nav() {
  return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink to="/" exact className = "navLinks">
      Inicio
    </NavLink>
  </nav>
  );
}
