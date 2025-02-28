import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Row({ guess = "" ,answer}) {
  return (
    <p className="guess">
      {guess === ""
        ? range(5).map((index) => <span key={index} className="cell"></span>)
        : checkGuess(guess,answer).map(({letter,status}, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))}
    </p>
  );
}

export default Row;
