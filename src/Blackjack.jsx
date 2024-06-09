import React, { useState, useEffect } from 'react';
import './assets/styles/blackjack.css';

const Blackjack = () => {
  const [cards, setCards] = useState([]);
  const [sum, setSum] = useState(0);
  const [hasBlackJack, setHasBlackJack] = useState(false);
  const [isAlive, setIsAlive] = useState(false);
  const [message, setMessage] = useState('Want to play a round?');
  // const player = {
  //   name: "Zandro",
  //   chips: 300
  // };

  const getRandomCard = () => {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
      return 10;
    } else if (randomNumber === 1) {
      return 11;
    } else {
      return randomNumber;
    }
  };

  const startGame = () => {
    setIsAlive(true);
    const firstCard = getRandomCard();
    const secondCard = getRandomCard();
    const initialCards = [firstCard, secondCard];
    setCards(initialCards);
    setSum(firstCard + secondCard);
    setHasBlackJack(false);
    renderGame(initialCards, firstCard + secondCard);
  };

  const renderGame = (currentCards, currentSum) => {
    setCards(currentCards);
    setSum(currentSum);

    if (currentSum <= 20) {
      setMessage("Do you want to draw a new card?");
      setIsAlive(true);
    } else if (currentSum === 21) {
      setMessage("Wohoo! You've got Blackjack!");
      setHasBlackJack(true);
    } else {
      setMessage("You're out of the game!");
      setIsAlive(false);
    }
  };

  const newCard = () => {
    if (isAlive && !hasBlackJack) {
      const card = getRandomCard();
      const newCards = [...cards, card];
      const newSum = sum + card;
      renderGame(newCards, newSum);
    }
  };

  // useEffect(() => {
  //   document.getElementById('player-el').textContent = `${player.name}: $${player.chips}`;
  // }, []);

  return (
    <>
        <div className="bj-body">
            <h1 className="Title-B">Blackjack</h1>
            <p id="message-el">{message}</p>
            <p id="cards-el">Cards: {cards.join(' ')}</p>
            <p id="sum-el">Sum: {sum}</p>
            <button onClick={startGame}>Start Game</button>
            <button onClick={newCard}>New Card</button>
            {/* <p id="player-el"></p> */}
        </div>
    </>
  );
};

export default Blackjack;
