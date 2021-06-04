import React, { useEffect, useState, useRef } from "react";

function Calc() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calc-app">
      <div className="font-title">
        <h1> CALC </h1>
      </div>
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>
      <div className="keypad">
        <div className="container">
          <div className="btn-row">
            <button id="clear" onClick={clear}>
              {" "}
              Clr
            </button>
            <button id="backspace" onClick={backspace}>
              {" "}
              Dlt
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="btn-row">
            <button name="/" onClick={handleClick}>
              /
            </button>
            <button name="*" onClick={handleClick}>
              x
            </button>
            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div className="btn-row">
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
          </div>
          <div className="btn-row">
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
          </div>
          <div className="btn-row">
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
          </div>
          <div className="btn-row">
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="=" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
