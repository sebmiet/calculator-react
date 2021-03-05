import React from "react";

export const Display = ({ history, input, result, isResult }) => {
  return (
    <div className="display-container">
      <div className="display-wrapper">
        <div className="display-history">
          <p>{history}</p>
        </div>
        <div className="display-result">
          <h3>{isResult ? result : input}</h3>
        </div>
      </div>
    </div>
  );
};
