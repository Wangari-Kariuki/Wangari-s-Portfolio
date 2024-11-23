import React from 'react';
import me_icon from '../assets/2.jpg';
import '../styles/overview.css';
import Buttons from '../components/Buttons';

export default function TopContainer({
  projectRef,
  skillsRef,
  roleRef,
  aboutRef,
  handleClick,
}) {
  return (
    <div className="topcontainer">
      <div className="cont-col-1">
        <div className="imagebox">
          <img src={me_icon} alt="Icon" />
        </div>
        <div className="text-box">
          <h1>Hello, my name is</h1>
          <h2 className="typewriter">WANGARI</h2>
        </div>
      </div>
      <div className="cont-col-2">
        <Buttons label="Projects" onClick={() => handleClick(projectRef)} />
        <Buttons label="Skills" onClick={() => handleClick(skillsRef)} />
        <Buttons label="Roles" onClick={() => handleClick(roleRef)} />
        <Buttons label="My story" onClick={() => handleClick(aboutRef)} />
      </div>
    </div>
  );
}
