import React from 'react';
import { NavLink } from "react-router-dom"; 
import { Navbar } from 'react-bootstrap';

export default function Nav() {
  return (
  <Navbar bg="myRed">
    <NavLink to="/" exact className = "navLinks">
      Inicio
    </NavLink>
  </Navbar>
  );
}
