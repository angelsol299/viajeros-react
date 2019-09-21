import React from 'react';

const Footer = () => {
  return (
    <footer class="section-footer">
      <div className="container">
        <div>
          <h2 style={{ fontFamily: 'Roboto' }}>ViajerosX&copy;</h2>
          <a href="http://twitter.com">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com"></a>
        </div>
        <div>
          <ul>
            <h3>Company Info</h3>
            <li>
              <a href="#">All products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            {' '}
            <h3>Ultimas publiaciones</h3>
            <li>
              <a href="#">Visita Vietnam</a>
            </li>
            <li>
              <a href="#">Lounge Bruselas review</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit.</a>
            </li>
            <li>
              <a href="#">Lorem ipsum dolor sit.</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <form name="email-form" method="POST" data-netlify="true">
            <div className="email-form">
              <span className="form-control-wrap">
                <input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  className="form-control"
                  placeholder="Email"
                />
              </span>
              <button type="submit" className="form-control submit">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
