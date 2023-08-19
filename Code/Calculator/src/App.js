import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const handleOperatorClick = (op) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(display));
      setOperator(op);
      setWaitingForSecondOperand(true);
    } else {
      calculateResult();
      setOperator(op);
    }
  };

  const calculateResult = () => {
    if (firstOperand === null || operator === null) {
      return;
    }

    const secondOperand = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstOperand(result);
    setWaitingForSecondOperand(true);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };
console.log("firstOperand",firstOperand)
console.log("display",display)
console.log("operator",operator)
console.log("waitingForSecondOperand",waitingForSecondOperand)
  return (
    <div className="container">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick("7")}>7</button>
        <button onClick={() => handleDigitClick("8")}>8</button>
        <button onClick={() => handleDigitClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleDigitClick("4")}>4</button>
        <button onClick={() => handleDigitClick("5")}>5</button>
        <button onClick={() => handleDigitClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleDigitClick("1")}>1</button>
        <button onClick={() => handleDigitClick("2")}>2</button>
        <button onClick={() => handleDigitClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleDigitClick("0")}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}
