import React from "react";

function Banner({ variant, children,handleReset }) {
  return (
    <div className={`banner ${variant}`}>
      {children}
      <button
        style={{
          marginTop: "1rem",
          backgroundColor: "orange",
          padding: "1rem",
          borderRadius: "12px",
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}

        onClick={handleReset}
      >
        RESTART
      </button>
    </div>
  );
}

export default Banner;
