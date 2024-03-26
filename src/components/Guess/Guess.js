import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Guess({guess, answer}) {

    const checkedGuess =checkGuess(guess, answer);
  return (
    <p className="guess">
      {
        range(NUM_OF_LETTERS_ALLOWED).map( number => (
          <span key={number} className={`cell ${checkedGuess ? checkedGuess[number].status : ''}`}>{guess ? guess.split('')[number] : undefined}</span>
        ))
      }
    </p>
  );
}

export default Guess;
