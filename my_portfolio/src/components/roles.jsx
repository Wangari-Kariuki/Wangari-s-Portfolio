import React from 'react'
import '../styles/roles.css'
import daytona4 from '../assets/Daytona4.jpg'
import devfest from '../assets/devfest1.jpg'
import Title from './Title'
//import daytona2 from '../assets/Daytona2.jpg'
//import daytona3 from '../assets/Daytona3.jpg' 
export default function Roles() {
  return (
    <div className="roles">
      <Title name = 'My roles'/>
      <div className="role">
        <h1>Administrative assistant, Kenya Tech Events</h1>
        <h2>January 2020 - Present</h2>
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
        <p>
          Participate in the creative process of the DevFest Nairobi,
          organizing sessions, and working on the website design.
        </p>
        <div className="gallery">
          <img src = {devfest} alt = 'devfest' className='img1'></img>
        </div>
      </div>

    </div>
  )
}

  
    
 
                   
  
