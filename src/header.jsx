import React from 'react';
import { Link } from 'react-scroll';
import './assets/styles/header.css';
import Sidebar from './sidebarAnim.jsx';

function Header() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="header-nav-container">
          <h3>Zandro</h3>
          <div className="navbar-list">
            <ul>
              <li className="navbar-options">
                <Link to="about" smooth={true} duration={200}>About</Link>
              </li>
              <li className="navbar-options">
                <Link to="skill" smooth={true} duration={200}>Skills</Link>
              </li>
              <li className="navbar-options">
                <Link to="project" smooth={true} duration={200}>Projects</Link>
              </li>
              <li className="navbar-options">
                <Link to="contact" smooth={true} duration={200}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;