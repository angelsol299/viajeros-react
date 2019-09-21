import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav role="navigation" className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
      <nav className="navbar">
        <div className="container">
          <h1
            className="mainTitle"
            style={{ marginLeft: '-200px', fontFamily: 'Roboto', color:'mainTitle' }}
          >
            ViajerosX
          </h1>
          <ul className="nav">
            <li>
              <a href="#home">Articulos</a>
            </li>
            <li>
              <a href="#about">Videos</a>
            </li>
            <li>
              <a href="#about">Destinos</a>
            </li>
             <li>
              <a href="#about">Guías de viaje</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
