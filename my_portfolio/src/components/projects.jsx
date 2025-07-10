import React from 'react'
import project1_video from '../assets/web_video.mp4'
import lebed_video from '../assets/screen-capture (8).webm'
import Title from './Title'
export default function Projects({handleClick}) {
  return (
    <>
    <Title name = 'My projects'/>
    <div className="bottomcontainer"></div>
    <div className="projects">
    <div className='project'>
              <h1>Lebed Healthhways</h1>
            <div className="projdesc">
            <p className='project-col-1'>
          Lebed Heathways is a physiotherapy clinic that can now effortlessly share
           valuable content with the world at the click of a button. This project, which is built on a react framework,
          has boosted their visibility by 30%.
            </p>
           <div className='project-col-2'> <video className='video' autoPlay loop muted
           style={{ width: '120px', height: '100px', objectFit: 'cover', border: '1px solid black'}}
            ><source src = {lebed_video} type='video/mp4' ></source></video>
            <a href="https://lebed-ih3e.vercel.app/">www.Lebed.com</a>
            </div>
            
            </div>
            
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
            <a href="#">Datashield</a>
            </div>
            
            </div>
            
        </div>

    </div>
    </>
    
  )
}
