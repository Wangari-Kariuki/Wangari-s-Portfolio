import React, { useState } from 'react';
import '../styles/overview.css';
import Topcontainer from '../sections/Top_container';
import Flipcontainer from '../sections/middle_container';

import '../styles/wave.css'
import Contact from '../components/contact';

export default function Overview() {
    const [currentContent, setCurrentContent] = useState('');
    
    return (
        <>
        <div className='body'>
        <div className='topcontainer'>
            <Topcontainer setCurrentContent={setCurrentContent} />
        </div>
            <div className='middlecontainer'>
                <Flipcontainer content={currentContent} />
            </div>

            <div className='bottomcontainer'>
        <Contact/>
        </div>

        </div>
        </> 
        
    );
}
