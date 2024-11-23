import React from 'react'
import linkedin_icon from '../assets/linkedin (2).png'
import insta_icon from '../assets/instagram (1).png'
import facebook_icon from '../assets/facebook (1).png'
import github_icon from '../assets/github.png'
import '../styles/bottomcontainer.css'
export default function Contact() {
  return (
    <div className='contact-details'>
    <h1>Reach me through:</h1>
    <p>
        Feel free to contact me at any time.
        <br />
        wkariuki.e@gmail.com   
    </p>
    <div className = "layer">
    <a href="https://github.com/Wangari-Kariuki"><img src = {github_icon}  alt='github_icon'></img>
    </a>

   
    <a href="https://www.linkedin.com/in/esther-kariuki-8736a5262/"><img src = {linkedin_icon} alt = 'linkedin_icon' ></img></a>
    <a href="https://www.facebook.com/profile.php?id=100089370557063"><img src = {facebook_icon} alt = 'facebook_icon' ></img></a>
    <a href="https://www.instagram.com/ms_wangarikariuki/"><img src = {insta_icon} alt = 'insta_icon' ></img></a>
    </div>
   
</div>
  )
}
