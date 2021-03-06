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
    console.log(`prevNumber = ${prevNumber}, ${operation} currentNumber=${currentNumber}, result=${result}`)
  }, [operation, currentNumber, prevNumber, result]);
  
  const handleNumButtons = (number) => {
    if (number === "." && currentNumber.includes(".")) return;
    const newCurrentNumber = currentNumber.toString() + number.toString();
    console.log(newCurrentNumber);
    setCurrentNumber(newCurrentNumber);
    setResult(newCurrentNumber);
    setHistory((history += number));
  };
  

  const handleFunButtons = (key) => {
    //currentNumber==="" ? setPrevNumber(parseFloat(result)) : setPrevNumber(parseFloat(currentNumber));
    setOperation(key);
    //check if keys are clearing keys 
    if (key === "CE") return handleAllClear();
    if (key === "C") return handleClear();
    if (prevNumber !== null && currentNumber !== "") return compute();
    //if we have prevNumber and currentNumber it's time to do math ;)
    //this 
    setPrevNumber(currentNumber);
    setCurrentNumber("");
    setHistory((history += key));
  };

 
  const compute = () => {
    const firstNumber = parseFloat(prevNumber);
    const secondNumber = parseFloat(currentNumber)
    if (isNaN(firstNumber) || isNaN(secondNumber)) return;
      let res = 0;
      switch (operation) {
        case "+":
          res = firstNumber + secondNumber;
          break;
        case "-":
          res = firstNumber - secondNumber;
          break;
        case "x":
          res = firstNumber * secondNumber;
          break;
        case "÷":
          res = firstNumber / secondNumber;
          break;
        default:
          return;
      }   
      setResult(res);
      setPrevNumber(null);
      setCurrentNumber(res);
      setOperation("");
      setHistory(`${history} = ${res.toString()} `);
  };

  const continueOperation = (res) =>{
    setResult(res);
    setPrevNumber(null);
    setCurrentNumber("");
    setOperation("");
    setHistory(`${history} = ${res.toString()} `);
  };

  const handleAllClear = () => {
    setPrevNumber(null);
    setCurrentNumber("");
    setHistory("");
    setResult(0);
    setOperation("");
  };

  const handleClear = () => {
    setCurrentNumber("");
    setResult(0);
    setOperation("");
  };

  return (
    <div className="calculator-container">
      <Display result={result} history={history} currentNumber={currentNumber}  />
      <Keyboard
        handleFunButtons={handleFunButtons}
        handleNumButtons={handleNumButtons}
      />
    </div>
  );
};

export default App;
