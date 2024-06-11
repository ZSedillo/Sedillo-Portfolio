import React from 'react';
import { Link } from 'react-router-dom';


import ActiveLearning from './assets/images/activelearning.png'
import SimpleLoginPage from './assets/images/simpleloginpage.png'
import GUI from './assets/images/GUI.png'
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
            <Link to="">
              <div className="image-container">
                <img src={ActiveLearning} alt="ActiveLearning" />
                <div className="overlay">
                  <div className="text">ACTIVE LEARNING PORTAL</div>
                </div>
              </div>
            </Link>
          </div>



          <div className="project-option">
            <Link to="">
              <div className="image-container">
                <img src={SimpleLoginPage} alt="SimpleLoginPage" />
                <div className="overlay">
                  <div className="text">Simple Login Page</div>
                </div>
              </div>
            </Link>
          </div>


          <div className="project-option">
            <Link to="">
              <div className="image-container">
                <img src={GUI} alt="GUI" />
                <div className="overlay">
                  <div className="text">GUI</div>
                </div>
              </div>
            </Link>
          </div>



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
        <br />
        <br />
        <p style={{ padding: "20px 0 0 0", color: "#081c15", fontSize: "20px", fontWeight: "bold" }}>
        Some of these projects are currently being transferred and stand configured for them to be demonstrated even though they may 
        be totally complete they might take sometime and require a lot of resources to get them into proper display configuration. 
        Thank you for your patience
        </p>
      </div>
    </>
  );
}

export default Project;
