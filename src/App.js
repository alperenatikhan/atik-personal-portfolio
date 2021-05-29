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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              labore aut, commodi dicta iusto dignissimos dolore! Ratione magnam
              vel facere earum, quo accusamus voluptatum nobis illo accusantium
              quia. Numquam praesentium voluptatibus beatae amet commodi sint
              atque esse officiis nulla in, alias enim adipisci, modi temporibus
              nostrum repellendus, saepe quos itaque natus. Reprehenderit nam,
              voluptates soluta pariatur quaerat cumque corrupti placeat
              repellat aperiam tempora asperiores magnam numquam aliquid tempore
              ab mollitia dolores adipisci cum nemo deserunt rem, dolorem
              ducimus. Quidem doloremque hic ducimus ullam quibusdam incidunt
              temporibus id, repudiandae facilis similique maxime sed atque
              nostrum distinctio vel. Culpa accusamus hic ab totam placeat
              corrupti doloremque suscipit. Necessitatibus earum quae fugit in,
              et laudantium. Beatae, fugiat. Suscipit recusandae molestias velit
              perspiciatis quam reprehenderit explicabo natus odio cumque autem,
              sapiente consequuntur? Accusantium officiis sapiente nesciunt fuga
              non est nemo suscipit perferendis expedita ducimus pariatur atque
              sit quisquam eos voluptatibus eligendi, ab voluptates enim porro
              delectus minus. Iure quia minima cumque veritatis provident culpa
              atque quibusdam ipsa nulla officia numquam vel quos ducimus,
              praesentium tenetur iste inventore repellendus sequi doloribus
              enim, at consequuntur dolor. Debitis, accusantium totam. Quod
              consequatur nam facilis debitis enim mollitia minus impedit quasi,
              porro explicabo obcaecati dolorem non unde, accusamus modi quas
              labore ea natus aspernatur illo? Rerum pariatur aut porro nostrum
              dolor, voluptas delectus possimus atque tempora. Pariatur ut,
              quibusdam delectus vitae illum nostrum corrupti. Iste velit illo
              amet magni omnis officiis eligendi, facilis impedit voluptatibus
              culpa? Dolore, consectetur obcaecati? Cumque recusandae vel
              pariatur voluptatibus, blanditiis quaerat voluptatem totam nulla
              ab neque. Vitae asperiores aperiam eaque, quia, perspiciatis rerum
              quasi temporibus deleniti deserunt culpa, animi eum consectetur
              accusamus quae impedit laudantium odio atque corporis pariatur
              sequi minus. Veritatis ratione possimus cumque qui ullam quisquam
              amet fuga? Deleniti perspiciatis iusto hic temporibus. Commodi
              tempora totam non alias id animi ducimus?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
