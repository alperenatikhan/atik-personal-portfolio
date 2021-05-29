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
            <p> I am a <a href="https://uni-flensburg.academia.edu/AlperenAtik" className="text-link" target="blank">Ph.D candidate </a> in Sociology, <a href="https://www.opendemocracy.net/en/author/alperen-atik/" className="text-link" target="blank"> Independent Journalist </a> and a budding coder. During the research for my doctoral dissertation, I had to analyse more than four hundred documents. For easing my research, I needed to write a webscraper with a  <a href="https://replit.com/@AlperenAtik/parklarbizimfinder" className="text-link" target="blank">keyword retrieval</a> function. For coding my first webscraper, I learnt Python by following the tutorials in <a href="" className="text-link" target="blank">CodeCademy</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
