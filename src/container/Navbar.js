import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav role="navigation" className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span style={{ background: '#046156' }}></span>
          <span style={{ background: '#046156' }}></span>
          <span style={{ background: '#046156' }}></span>
          <ul id="menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/articles">
              <li>Articulos</li>
            </Link>
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
      <nav className="navbar" style={{ borderBottom: '3px solid #3290a8' }}>
        <div className="container">
          <h1
            className="mainTitle"
            style={{
              marginLeft: '-200px',
              fontFamily: 'Roboto',
              color: '#0089a8'
            }}
          >
            <Link to="/" style={{ color: '#0089a8' }}>
              ViajerosX
            </Link>
          </h1>
          <ul className="nav">
            <li>
              <Link to="/articles">Articulos</Link>
            </li>
            <li>
              <Link>Videos</Link>
            </li>
            <li>
              <Link>Destinos</Link>
            </li>
            <li>
              <Link>Guías de viaje</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
