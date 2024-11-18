import React, { useState } from 'react';
import '../styles/overview.css';
import Flip_container from '../components/Project_container';
import Topcontainer from '../components/Top_container';
import '../styles/wave.css'

export default function Overview() {
    const [currentContent, setCurrentContent] = useState('');
    
    return (
        <>
        <div className='body'>
        <div className='topcontainer'>
                <Topcontainer setCurrentContent={setCurrentContent} />
            </div>
            <div className='wave-conatiner'>
                <div className = 'wave'>hello</div></div>
            <div className='bottomcontainer'>
                <Flip_container content={currentContent} />
            </div>
        </div>
            
        </>
    );
}
