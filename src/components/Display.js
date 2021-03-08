import React from "react";

export const Display = ({ history, result }) => {
  return (
    <div className="display-container">
      <div className="display-wrapper">
        <div className="display-history">
          <p>{history}</p>
        </div>
        <div className="display-result">
          <h3>{result}</h3>
        </div>
      </div>
    </div>
  );
};
