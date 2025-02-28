import React from "react";

function HappyBanner({howMany}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{howMany} {howMany===1 ? "guess": "guesses"}</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
