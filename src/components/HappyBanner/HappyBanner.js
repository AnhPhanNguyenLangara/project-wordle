import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ howMany, handleReset }) {
  return (
    <Banner variant="happy" handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {howMany} {howMany === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
