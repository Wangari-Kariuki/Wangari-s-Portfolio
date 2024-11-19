import React from 'react';
import '../styles/bottomcontainer.css'
import linkedin_icon from '../assets/linkedin (2).png'
import insta_icon from '../assets/instagram (1).png'
import facebook_icon from '../assets/facebook (1).png'
import github_icon from '../assets/github.png'
import project1_video from '../assets/web_video.mp4'
import { useState } from 'react';
import SkillsContent from './Skills';
import Roles from './roles';

export default function Flip_container({ content }) {
    // Function to render content based on the currentContent state
    const RenderContent = () => {
        if (content.toLowerCase() === 'projects') {
            return (
                <>
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
            );
        } 
        else if (content === 'Skills') {
    
        
            return (
                <SkillsContent/>
            );
        } else if (content === 'Roles'){
            return (
            <Roles/>
            );
        }

        // Default content if nothing matches
        return <div className='contact-details'>
            <h1>Reach me through:</h1>
            <p>
                Feel free to contact me at any time.
                <br />
                Email: info@example.com
                <br />
                Phone: 123-456-7890
            </p>
            <div className = "layer">
            <a href="https://github.com/username"><img src = {github_icon} ></img>
            </a>
        
           
            <a href="https://www.linkedin.com/in/username"><img src = {linkedin_icon} ></img></a>
            <a href="https://www.facebook.com/username"><img src = {facebook_icon} ></img></a>
            <a href="https://www.instagram.com/username"><img src = {insta_icon} ></img></a>
            </div>
           
        </div>;
    };

    return <div className='flip_container'>{RenderContent()}</div>;
}

