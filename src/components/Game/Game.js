import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import Board from "../Board/Board";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const newAns = sample(WORDS);
    console.info({ answer: newAns });
    return newAns;
  });
  // Static length array filled with empty strings
  const [guesses, setGuesses] = React.useState(
    new Array(NUM_OF_GUESSES_ALLOWED).fill("")
  );

  // Locate the answer among the guesses
  const answerIndex = guesses.findIndex((str) => str === answer);
  // Check game won
  const gameWon = answerIndex !== -1;

  // Locate the next empty slot
  const insertIndex = guesses.findIndex((str) => str === "");
  // Check game lost
  const gameLost = !gameWon && insertIndex === -1;

  const handleReset = () => {
    const newAns = sample(WORDS);
    console.info({ newAns });
    setAnswer(newAns);
    setGuesses(new Array(NUM_OF_GUESSES_ALLOWED).fill(""));
  };

  const handleAddGuess = (guessValue) => {
    const newGuesses = [...guesses];
    newGuesses[insertIndex] = guessValue;
    setGuesses(newGuesses);
  };

  return (
    <>
      <Board answer={answer} guesses={guesses}></Board>
      <GuessInput
        disabled={gameWon || gameLost}
        handleAddGuess={handleAddGuess}
      ></GuessInput>
      {gameWon && (
        <HappyBanner
          handleReset={handleReset}
          howMany={answerIndex + 1}
        ></HappyBanner>
      )}
      {gameLost && (
        <SadBanner handleReset={handleReset} answer={answer}></SadBanner>
      )}
    </>
  );
}

export default Game;
