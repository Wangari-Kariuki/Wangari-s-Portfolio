import React from 'react'
import project1_video from '../assets/web_video.mp4'
export default function Projects() {
  return (
    <>
    <div className="bottomcontainer"></div>
    <div className="projects">
    <div className='project'>
            <h1>Salama mind</h1>
            <p className='pdesc'>
            Salama Mind is a digital platform designed to provide accessible mental health resources. 
                This project featured, mental health virtual consultatin funtions, built in dart, flutterand firebase technologies.
            </p>
            <a href="#">view project here</a>
        </div>


        <div className='project'>
            <h1>Datashield solutions</h1>
            <div className="projdesc">
            <p className='project-col-1'>
           Data sheild solutions is a compliance mangement system.
             My contributions focused on creating intuitive and visually
              appealing designs that enhanced 
            user experience and streamlined compliance management processes.
            </p>
           <div className='project-col-2'> <video className='video' autoPlay loop muted
           style={{ width: '120px', height: '100px', objectFit: 'cover', border: '1px solid black'}}
            ><source src = {project1_video} type='video/mp4' ></source></video>
            <a href="#">Project 2 link</a>
            </div>
            
            </div>
            
        </div>
    </div>
    </>
    
  )
}
