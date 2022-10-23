import React, { useState } from "react";

function App() {

  // Using the {useState} Hook for Updating our State 

  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  //Updating the Calculated Values in our display !

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      operators.includes(value) && calculate === '' || operators.includes(value) && operators.includes(calculate.slice(-1)
      )
    ) {
      return;
    }
    setCalculate(calculate + value)


    if (!operators.includes(value)) {
      setResult(eval(calculate + value).toString());
    }

  }

  // Creating and Adding Digits to our Display !

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculated = () => {
    setCalculate(eval(calculate), toString());
  }

  // Deleting Digits from the end our Display !

  const deleteLast = () => {
    if (calculate === '') {
      return;
    }

    const value = calculate.slice(0, -1);

    setCalculate(value);
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''} {calculate || "0"}
        </div>

        <div className='operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculated}>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
