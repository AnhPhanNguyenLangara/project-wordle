import React from "react";

function GuessInput({ handleAddGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log({ guess });
        handleAddGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        required
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
