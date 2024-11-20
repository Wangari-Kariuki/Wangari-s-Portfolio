import React from 'react';
import '../styles/bottomcontainer.css'
import SkillsContent from '../components/Skills';
import Roles from '../components/roles';
import Projects from '../components/projects';
import About from '../components/About';

export default function Flipcontainer({ content }) {
    // Function to render content based on the currentContent state
    const RenderContent = () => {
        if (content === 'Projects') {
            return ( 
    
                      <Projects/>
              
             
            );
        } 
        else if (content === 'Skills') {
            return (
            
                      <SkillsContent/>
                
          
            );
        } 
        else if (content === 'Roles'){
            return (
                       <Roles/>
               
          
            );
        }
        else if (content === 'About'){
            return (
                
                      <About/>
                
          
            );
        }
        // Default content if nothing matches
    
    
        
       
    };

    return <div className='flip_container'>{RenderContent()}</div>;
}

