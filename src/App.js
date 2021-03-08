import React, { useState, useEffect } from "react";
import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";

const App = () => {
  const [prevNumber, setPrevNumber] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [nextOperator, setNextOperator] = useState("");
  let [history, setHistory] = useState("");

  useEffect(() => {
    if (nextOperator && nextOperator !== "=") {
      setHistory(`${history} ${prevNumber.toString()}${nextOperator}`);
      handleFunButtons(nextOperator);
    }
  }, [history, nextOperator, prevNumber]);

  const handleClick = (val) => {
    if (val === "CE") return handleAllClear();
    if (val === "C") return handleClear();
    if (isNaN(val) && val !== ".") {
      if (!prevNumber && !currentNumber) return;
      return handleFunButtons(val);
    } else {
      return handleNumButtons(val);
    }
  };

  const handleNumButtons = (number) => {
    if (number === "." && currentNumber.includes(".")) return;
    if (prevNumber && !operation) {
      setPrevNumber(null);
      setHistory(`${history} | `);
    }
    const newCurrentNumber = currentNumber + number.toString();
    setCurrentNumber(newCurrentNumber);
    setResult(newCurrentNumber);
    setHistory(`${(history += number)}`);
  };

  const handleFunButtons = (key) => {
    setOperation(key);
    if (nextOperator) setNextOperator("");
    if (prevNumber !== null && currentNumber !== "") {
      setNextOperator(key);
      return calculate();
    }
    prevNumber !== null
      ? parseFloat(currentNumber)
      : setPrevNumber(currentNumber);
    setCurrentNumber("");
    setHistory(`${(history += key)}`);
  };

  const calculate = () => {
    const firstNumber = parseFloat(prevNumber);
    const secondNumber = parseFloat(currentNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber)) return;
    let res = 0;
    switch (operation) {
      case "+":
        res = firstNumber + secondNumber;
        break;
      case "-":
        res = firstNumber - secondNumber;
        break;
      case "×":
        res = firstNumber * secondNumber;
        break;
      case "÷":
        res = firstNumber / secondNumber;
        break;
      default:
        return;
    }
    const fixedRes = parseFloat(res.toFixed(8));
    setPrevNumber(fixedRes);
    setCurrentNumber("");
    setResult(fixedRes);
    setOperation("");
    setHistory(`${history}=${fixedRes.toString()}`);
  };

  const handleAllClear = () => {
    setPrevNumber(null);
    setCurrentNumber("");
    setHistory("");
    setResult(0);
    setOperation("");
    setNextOperator("");
  };

  const handleClear = () => {
    setPrevNumber(null);
    setCurrentNumber("");
    setResult(0);
    setOperation("");
    setNextOperator("");
  };

  return (
    <div className="calculator-container">
      <Display result={result} history={history} setResult={setResult} />
      <Keyboard
        handleFunButtons={handleFunButtons}
        handleNumButtons={handleNumButtons}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
