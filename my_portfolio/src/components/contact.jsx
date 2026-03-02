import React from 'react'
import linkedin_icon from '../assets/linkedin (2).png'
import insta_icon from '../assets/instagram (1).png'
import facebook_icon from '../assets/facebook (1).png'
import github_icon from '../assets/github.png'
import '../styles/bottomcontainer.css'
// import Title from './Title'

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="contact-details">
        <h1>Reach me through:</h1>
        <div className='email'>
              <p>wkariuki.e@gmail.com</p>
        </div>

        <div className="layer">
          <a href="https://github.com/Wangari-Kariuki" target="_blank" rel="noreferrer">
            <img src={github_icon} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/esther-kariuki-8736a5262/" target="_blank" rel="noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100089370557063" target="_blank" rel="noreferrer">
            <img src={facebook_icon} alt="Facebook" />
          </a>

          <a href="https://www.instagram.com/ms_wangarikariuki/" target="_blank" rel="noreferrer">
            <img src={insta_icon} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="copyright">
        © {year} Esther Wangari Kariuki. All rights reserved.
      </div>
    </>
  );
}





