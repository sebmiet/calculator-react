import React, { useState, useEffect } from "react";
import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";

const App = () => {
  const [prevNumber, setPrevNumber] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  let [history, setHistory] = useState("");

  useEffect(() => {
    if (result) {
      setPrevNumber(result);
    }
    return () => {};
  }, []);

  const handleNumButtons = (number) => {
    const newCurrentNumber = currentNumber.toString() + number.toString();
    setCurrentNumber(parseFloat(newCurrentNumber));
    setResult(newCurrentNumber);
    setHistory((history += number));
  };

  const handleFunButtons = (key) => {
    if (result) setCurrentNumber(result);
    if (currentNumber === "") return;
    if (prevNumber !== null && currentNumber !== "") return compute();
    if (key === "CE") return handleAllClear();
    if (key === "C") return handleClear();
    setPrevNumber(currentNumber);
    setOperation(key);
    setCurrentNumber("");
    setHistory((history += key));
  };

  const compute = () => {
    switch (operation) {
      case "CE":
        return handleAllClear();
      case "C":
        return handleClear();
      case "+":
        return setResult(prevNumber + currentNumber);
      case "-":
        return setResult(prevNumber - currentNumber);
      case "*":
        return setResult(prevNumber * currentNumber);
      case "/":
        return setResult(prevNumber / currentNumber);
      default:
        return;
    }
  };

  const handleAllClear = () => {
    setPrevNumber(null);
    setCurrentNumber("");
    setHistory("");
    setResult(0);
  };

  const handleClear = () => {
    setCurrentNumber("");
    setResult(0);
  };

  return (
    <div className="calculator-container">
      <Display result={result} history={history} />
      <Keyboard
        handleFunButtons={handleFunButtons}
        handleNumButtons={handleNumButtons}
      />
    </div>
  );
};

export default App;
