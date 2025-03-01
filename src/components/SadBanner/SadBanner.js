import React from "react";
import Banner from "../Banner/Banner";

function SadBanner({ answer, handleReset }) {
  return (
    <Banner variant="sad" handleReset={handleReset}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default SadBanner;
