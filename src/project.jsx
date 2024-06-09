import React from 'react';
import { Link } from 'react-router-dom';
import Cat from './assets/images/download-modified.png';
import BlackJack from './assets/images/Blackjack.jpg';
import Dice from './assets/images/Dice.jpg';
import DrumKit from './assets/images/DrumKit.jpg';

import './assets/styles/project.css';

function Project() {
  return (
    <>
      <div className="projects-container">
        <p style={{ color: "#40916c", fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>Projects</p>
        <div className="projects-list">
          <div className="project-option">
            <Link to="/MyWebsite">
              <div className="image-container">
                <img src={Cat} alt="Cat" />
                <div className="overlay">
                  <div className="text">Cat Web</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="project-option">
            <Link to="/blackjack">
              <div className="image-container">
                <img src={BlackJack} alt="BlackJack" />
                <div className="overlay">
                  <div className="text">Blackjack</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="project-option">
            <Link to="/dice">
              <div className="image-container">
                <img src={Dice} alt="Dice" />
                <div className="overlay">
                  <div className="text">Dice</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="project-option">
            <Link to="/drumkit">
              <div className="image-container">
                <img src={DrumKit} alt="DrumKit" />
                <div className="overlay">
                  <div className="text">DrumKit</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <p style={{ padding: "20px 0 0 0", color: "#081c15", fontSize: "20px", fontWeight: "bold" }}>
          These are just a few of the projects I’ve worked on the past; I have many more exciting projects to share!
        </p>
      </div>
    </>
  );
}

export default Project;
