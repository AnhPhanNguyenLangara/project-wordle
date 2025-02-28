import React from "react";

function HappyBanner({howMany}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{howMany} guess{howMany>1 && 'es'}</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
