import React, { useRef } from 'react';
import TopContainer from '../sections/Top_container';
import MiddleContainer from '../sections/middle_container';
import Contact from '../components/contact'

export default function MainContainer() {
  // Create refs for each section
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const roleRef = useRef(null);
  const aboutRef = useRef(null);

  // Scroll to the referenced section
  const handleClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pass refs and handleClick to TopContainer */}
      <TopContainer
        projectRef={projectRef}
        skillsRef={skillsRef}
        roleRef={roleRef}
        aboutRef={aboutRef}
        handleClick={handleClick}
      />

      {/* Pass refs to MiddleContainer */}
      <MiddleContainer
        projectRef={projectRef}
        skillsRef={skillsRef}
        roleRef={roleRef}
        aboutRef={aboutRef}
      />
      <Contact/>
    </>
  );
}
