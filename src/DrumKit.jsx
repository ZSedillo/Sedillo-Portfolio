import React, { useEffect } from 'react';
import './assets/styles/drumkit.css';

import tom1Sound from './assets/sounds/tom-1.mp3';
import tom2Sound from './assets/sounds/tom-2.mp3';
import tom3Sound from './assets/sounds/tom-3.mp3';
import tom4Sound from './assets/sounds/tom-4.mp3';
import snareSound from './assets/sounds/snare.mp3';
import crashSound from './assets/sounds/crash.mp3';
import kickSound from './assets/sounds/kick-bass.mp3';

const DrumKit = () => {
  useEffect(() => {
    const handleButtonClick = (event) => {
      const buttonInnerHTML = event.target.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    };

    const handleKeyPress = (event) => {
      makeSound(event.key);
      buttonAnimation(event.key);
    };

    const buttons = document.querySelectorAll('.drum');
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));
    document.addEventListener('keypress', handleKeyPress);

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach(button => button.removeEventListener('click', handleButtonClick));
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const makeSound = (key) => {
    let sound;
    switch (key) {
      case "w":
        sound = new Audio(tom1Sound);
        break;
      case "a":
        sound = new Audio(tom2Sound);
        break;
      case "s":
        sound = new Audio(tom3Sound);
        break;
      case "d":
        sound = new Audio(tom4Sound);
        break;
      case "j":
        sound = new Audio(snareSound);
        break;
      case "k":
        sound = new Audio(crashSound);
        break;
      case "l":
        sound = new Audio(kickSound);
        break;
      default:
        console.log("Invalid key");
        return;
    }
    sound.play();
  };

  const buttonAnimation = (currentKey) => {
    const activeButton = document.querySelector(`.${currentKey}`);
    if (activeButton) {
      activeButton.classList.add('pressed');
      setTimeout(() => activeButton.classList.remove('pressed'), 100);
    }
  };

  return (
    <>
        <div className="drum-body">
            <div id="title-drum">Drum 🥁 Kit</div>
            <div className="set">
                <button className="w drum">w</button>
                <button className="a drum">a</button>
                <button className="s drum">s</button>
                <button className="d drum">d</button>
                <button className="j drum">j</button>
                <button className="k drum">k</button>
                <button className="l drum">l</button>
            </div>
        </div>
    </>
  );
};

export default DrumKit;
