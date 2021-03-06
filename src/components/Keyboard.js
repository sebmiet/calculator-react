import React from "react";

export const Keyboard = ({ handleClick }) => {
  const numButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].map((btnValue) => {
    return (
      <div
        key={btnValue}
        onClick={() => {
          handleClick(btnValue);
        }}
        className={
          btnValue === 0 ? "keyboard-btns-num-zero" : "keyboard-btns-num"
        }
      >
        {btnValue}
      </div>
    );
  });

  const funButtons = ["C", "CE", "×", "÷", "-", "+", "="].map((btnValue) => {
    return (
      <div
        key={btnValue}
        onClick={() => {
          handleClick(btnValue);
        }}
        className={
          btnValue === "=" ? "keyboard-btns-fun-equals" : "keyboard-btns-fun"
        }
      >
        {btnValue}
      </div>
    );
  });
  return (
    <div className="keyboard-container">
      <div className="keyboard-btns-num-constainer">{numButtons}</div>
      <div className="keyboard-btns-fun-constainer">{funButtons}</div>
    </div>
  );
};
