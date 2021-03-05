import React, { useState } from "react";
import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";

const App = () => {
  const [isResult, setIsResult] = useState(true);
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(0);
  let [history, setHistory] = useState("");

  const handleNumButtons = (value) => {
    const newInput = [input, value];
    setInput(parseFloat(newInput.join("")));
    setHistory((history += value));
  };

  const handleFunButtons = (key) => {
    // if (
    //   history[history.length - 1] === "+" ||
    //   history[history.length - 1] === "-" ||
    //   history[history.length - 1] === "*" ||
    //   history[history.length - 1] === "/"
    // ) {
    //   return;
    // }
    //setResult(parseFloat(input));
    setHistory((history += key));
    setInput("");

    // const number = input;
    // setResult(input);

    switch (key) {
      case "AC":
        return handleAC();
      case "C":
        return setInput(null);
      case "+":
        return setResult(result + input);
      case "-":
        return setResult((prevState) => prevState - input);
      case "*":
        return setResult((prevState) => prevState * input);
      case "/":
        return setResult((prevState) => prevState / input);
      case "√":
        return setResult((prevState) => Math.sqrt(prevState));
      case "=":
        return result;
      default:
        return "foo";
    }
  };

  const handleAC = () => {
    setInput(null);
    setResult(0);
    setHistory([]);
  };

  return (
    <div className="calculator-container">
      <Display
        isResult={isResult}
        input={input}
        result={result}
        history={history}
      />
      <Keyboard
        handleFunButtons={handleFunButtons}
        handleNumButtons={handleNumButtons}
        setIsResult={setIsResult}
      />
    </div>
  );
};

export default App;
