import React from "react";
import Row from "../Row/Row";

function Board({ guesses,answer }) {
  return (
    <div className="guess-results">
      {guesses.map((value,index) => (
        <Row answer={answer} key={index} guess={value}></Row>
      ))}
    </div>
  );
}

export default Board;
