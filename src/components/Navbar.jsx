import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">GeoVista</div>
      <ul className="nav-menu">
        <li>About</li>
        <li>Get Started</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar
