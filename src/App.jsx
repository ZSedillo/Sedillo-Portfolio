import React from 'react';

import Header from './header.jsx';
import Introduction from './introduction.jsx';
import About from './about.jsx';
import Project from './project.jsx';
import Skill from './skill.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}

export default App;
