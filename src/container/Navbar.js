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
      <nav class="navbar">
        <div class="container">
          <h1
            class="logo"
            style={{ marginLeft: '-200px', fontFamily: 'Roboto' }}
          >
            ViajerosX
          </h1>
          <ul class="nav">
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
