import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import Board from "../Board/Board";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Static length array filled with empty strings
  const [guesses,setGuesses] = React.useState(new Array(NUM_OF_GUESSES_ALLOWED).fill(''));

  const handleAddGuess = (guessValue) => {
    const newGuesses = [...guesses];
    // Locate the next empty slot to insert guess
    const insertIndex = newGuesses.findIndex((str)=>str==='');
    if (insertIndex===-1) {
      // Endgame state TODO
      console.log("Ran out of guesses")
      return;
    } else {
      // Continue game loop
      newGuesses[insertIndex]=guessValue;
      setGuesses(newGuesses)
    }
  }

  return (
    <>
      <Board answer={answer} guesses={guesses}></Board>
      <GuessInput handleAddGuess={handleAddGuess}></GuessInput>
    </>
  );
}

export default Game;
