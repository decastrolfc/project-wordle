import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput'
import UserGuesses from '../UserGuesses';
import Banner from '../Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [gameStatus, setGameStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([])

  function handleAddGuess(guess) {
    // if(guesses.length === NUM_OF_GUESSES_ALLOWED) {
    //   alert('Sorry, you\'ve reached the maximum number of guesses allowed')
    //   return
    // }
    const newGuess = {
      id: crypto.randomUUID(),
      answer: guess,
    }

    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    if(guess.toUpperCase() === answer) {
      setGameStatus('won');
    }  else if(newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
  <>
    <UserGuesses guesses={guesses} answer={answer}/>
    <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess}/>
    {gameStatus !== 'running' &&
    <Banner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer}/>}
  </>
  
  )
}

export default Game;
