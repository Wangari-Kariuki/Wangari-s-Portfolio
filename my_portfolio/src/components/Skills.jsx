import React, { useState } from 'react';
import '../styles/bottomcontainer.css'; // Make sure to import your CSS file
import Title from './Title';

export default function SkillsContent() {
  const [activeSkill, setActiveSkill] = useState('');

  // Function to handle skill button click
  const handleSkillClick = (skill) => {
    setActiveSkill(skill); // Update the active skill
  };

  return (
    <>
    <Title name = 'My skills'/>
    <div className='skills'>
      <div className='skill'>
        <button onClick={() => handleSkillClick('React.js')}>
          <h1>React.js</h1>
        </button>
        <p
          className={`description ${activeSkill === 'React.js' ? 'typewriter' : ''}`}
        >
          Skilled in React.js framework through project-based learning.
        </p>
      </div>

      <div className='skill'>
        <button onClick={() => handleSkillClick('Django')}>
          <h1>Django</h1>
        </button>
        <p
          className={`description ${activeSkill === 'Django' ? 'typewriter' : ''}`}
        >
          Skilled in building backend services using Django.
        </p>
      </div>

      <div className='skill'>
        <button onClick={() => handleSkillClick('Flutter')}>
          <h1>Flutter</h1>
        </button>
        <p
          className={`description ${activeSkill === 'Flutter' ? 'typewriter' : ''}`}
        >
          Experienced in mobile app development with Flutter.
        </p>
      </div>
    </div>
    </>
  );
}
