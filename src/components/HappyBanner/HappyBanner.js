import React from "react";

function HappyBanner({howMany}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{howMany} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
