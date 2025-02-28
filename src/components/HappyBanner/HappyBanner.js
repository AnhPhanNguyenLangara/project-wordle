import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ howMany }) {
  return (
    <Banner variant="happy">
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
