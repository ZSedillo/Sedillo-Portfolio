import React, { useState, useEffect } from 'react';
import './assets/styles/dice.css';

import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';

const Dice = () => {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [message, setMessage] = useState('');

  const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];

  useEffect(() => {
    rollDice();
  }, []);

  const rollDice = () => {
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;
    setPlayer1(player1Roll);
    setPlayer2(player2Roll);

    if (player1Roll > player2Roll) {
      setMessage("🚩Player 1 Wins!");
    } else if (player2Roll > player1Roll) {
      setMessage("Player 2 Wins!🚩");
    } else {
      setMessage("Draw!");
    }
  };

  const refreshPage = () => {
    rollDice();
  };

  return (
    <div className='dice-body'>
      <div className="dice-container">
        <h1 className="refresh-header">{message}</h1>
        <div className="dice">
          <p className="dice-player">Player 1</p>
          <img style={{width:"100px",height:"100px"}} className="img1-dice" src={diceImages[player1]} alt={`Dice showing ${player1}`} />
        </div>
        <div className="dice">
          <p className="dice-player">Player 2</p>
          <img style={{width:"100px",height:"100px"}} className="img2" src={diceImages[player2]} alt={`Dice showing ${player2}`} />
        </div>
        <button onClick={refreshPage} className="refresh-button">Play Again</button>
      </div>
    </div>
  );
};

export default Dice;
