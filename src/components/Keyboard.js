import React from "react";

export const Keyboard = ({
  handleFunButtons,
  handleNumButtons,
  setIsResult,
}) => {
  const numButtons = [9, 8, 7, 6, 5, 4, 3, 2, 1, "#", 0, "."].map(
    (btnValue) => {
      return (
        <button
          key={btnValue}
          onClick={() => {
            handleNumButtons(btnValue);
            setIsResult(false);
          }}
          className="keyboard-btns-num"
        >
          {btnValue}
        </button>
      );
    }
  );
  const funButtons = ["AC", "C", "+", "-", "*", "/", "=", "√"].map(
    (btnValue) => {
      return (
        <button
          key={btnValue}
          onClick={() => {
            handleFunButtons(btnValue);
            setIsResult(true);
          }}
          className="keyboard-btns-fun"
        >
          {btnValue}
        </button>
      );
    }
  );
  return (
    <div className="keyboard-container">
      <div>{numButtons}</div>
      <div>{funButtons}</div>
    </div>
  );
};
