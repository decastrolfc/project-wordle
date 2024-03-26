import React from 'react';

function GuessInput({gameStatus, handleAddGuess}) {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
        console.log({guess});
        handleAddGuess(guess);
        setGuess('');
  }

 
  return (
      <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameStatus !== 'running'}
          required
          maxLength={5}
          id="guess-input" 
          type="text" 
          
          pattern="[A-Za-z]{5}"
          value={guess}
          onChange={(event) => {
            const newGuess = event.target.value.toUpperCase();
            setGuess(newGuess);
          }}
        />
      </form>
  )
}

export default GuessInput;
