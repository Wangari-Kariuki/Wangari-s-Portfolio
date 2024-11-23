import React from 'react';
import Projects from '../components/projects';
import SkillsContent from '../components/Skills';
import Roles from '../components/roles';
import About from '../components/About'

export default function MiddleContainer({
  projectRef,
  skillsRef,
  roleRef,
  aboutRef,
}) {
  return (
    <div>
      <div className="middlecontainer">
        <div ref={projectRef}>
          <Projects />
        </div>
      </div>
      <div className="middlecontainer">
        <div ref={skillsRef}>
          <SkillsContent />
        </div>
      </div>
      <div className="middlecontainer">
        <div ref={roleRef}>
          <Roles />
        </div>
      </div>
      <div className="middlecontainer">
        <div ref={aboutRef}>
          <About/>
        </div>
      </div>
    </div>
  );
}
