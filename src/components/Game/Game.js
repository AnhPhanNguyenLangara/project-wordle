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
  const [guesses,setGuesses] = React.useState(new Array(NUM_OF_GUESSES_ALLOWED).fill(''));

  const handleAddGuess = (guessValue) => {
    const newGuesses = [...guesses];
    const insertIndex = newGuesses.findIndex((e)=>e==='');
    if (insertIndex===-1) {
      console.log("Ran out of guesses")
      return;
    } else {
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
