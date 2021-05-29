import React from 'react';
import './style.css';

export default function App() {
  return (
    <div id="page-wrapper">
      <section id="navbar">
        <div id="logo-name" className="navbar-col-left">
          {' '}
          <h2> Alperen Atik </h2>
          <p> Developer Portfolio Website </p>
        </div>

        <div id="nav-wrapper" className="navbar-col-right">
          <ul>
            <div className="nav-items">
              <li> <i class="fas fa-id-card"></i>Summary</li>
            </div>
            <div className="nav-items">
              <li> <i class="fas fa-store"></i>Portfolio</li>
            </div>
            <div className="nav-items">
              <li><i class="fas fa-globe"></i>Contact</li>
            </div>
          </ul>
        </div>
      </section>

      <section id="main">
        <div id="short-bio-wrapper">
          <div id="hero-pic-wrapper">
            <img id="hero-pic" src="https://i.imgur.com/Bz0kAbS.png" alt="" />
            <div id="header-space">
              <h2> Short Bio </h2>
              <h4>
                Researcher, Journalist,{' '}
                <span id="developer-span">Developer</span>
              </h4>
            </div>
          </div>
          <div id="text-space">
            <p>
              Ph.D candidate in Sociology, Independent Journalist and 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
