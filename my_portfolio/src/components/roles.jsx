import React from 'react'
import '../styles/roles.css'
import daytona4 from '../assets/Daytona4.jpg'
import devfest from '../assets/devfest1.jpg'
import meonmic from '../assets/IMG-20240330-WA0001.jpg'
import Title from './Title'
//import daytona2 from '../assets/Daytona2.jpg'
//import daytona3 from '../assets/Daytona3.jpg' 
export default function Roles() {
  return (
    <>
    <Title name ={'My roles'}/>
    <div className="roles">
      <div className="role">
        <h1>Student Fellow, Shamiri Institute</h1>
        <h2>September 2025 - Present</h2>
        <p>
         Provided peer-based support using digital mental wellness tools   
         Used data management platforms to communicate with students and manage their records 
        </p>
        <div className="gallery">
          <img src = {meonmic} alt = 'daytona4' className='img1'></img>
        </div>
      </div>

      <div className="role">
        <h1>Student Fellow, Shamiri Institute</h1>
        <h2>May 2025 - August 2025</h2>
        <p>
         Provided peer-based support using digital mental wellness tools   
         Used data management platforms to communicate with students and manage their records 
        </p>
        <div className="gallery">
          <img src = {meonmic} alt = 'daytona4' className='img1'></img>
        </div>
      </div>

      <div className="role">
        <h1>Administrative assistant, Kenya Tech Events</h1>
        <h2>June 2024 - February 2025</h2>
        <p>
          Assist the team in organizing events,
           managing social media, 
          and creating content for the website.
        </p>
        <div className="gallery">
          <img src = {daytona4} alt = 'daytona4' className='img1'></img>
        </div>
      </div>

      <div className="role">
        <h1>Crew member, DevFest Nairobi</h1>
        <h2>October 26th 2024</h2>
        <p>
          Participate in the creative process of the DevFest Nairobi,
          organizing sessions, programs and hancdling the guest speakers.
        </p>
        <div className="gallery">
          <img src = {devfest} alt = 'devfest' className='img1'></img>
        </div>
      </div>

    </div>
    </>
  )
}

  
    
 
                   
  
