import React from 'react';
import { Link } from 'react-scroll';
import './assets/styles/sidebar.css';

const Sidebar = () => {
  const openNav = () => {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('main').style.display = 'none';
  };

  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.display = 'block';
  };

  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
        <Link to="about" smooth={true} duration={200} onClick={closeNav}>About</Link>
        <Link to="project" smooth={true} duration={200} onClick={closeNav}>Projects</Link>
        <Link to="skill" smooth={true} duration={200} onClick={closeNav}>Skills</Link>
        <Link to="contact" smooth={true} duration={200} onClick={closeNav}>Contact</Link>
      </div>

      <div id="main" style={{ padding: '0' }}>
        <button style={{padding:"5px 0 0 120px"}} className="openbtn" onClick={openNav}>☰</button>
      </div>
    </div>
  );
};

export default Sidebar;
