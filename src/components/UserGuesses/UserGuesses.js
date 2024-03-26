import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function UserGuesses({guesses, answer}) {
  
  return (
    
  <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map( number => (
        <Guess key={number} guess={guesses[number] ? guesses[number].answer : undefined} answer={answer}/>
      ))
    }
  </div>
  );
}

export default UserGuesses;
