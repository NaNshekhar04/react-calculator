import React, { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      operators.includes(value) && calculate === '' || operators.includes(value) && operators.includes(calculate.slice(-1)
      )
    ) {
      return;
    }


    setCalculate(calculate + value)

    if(!operators.includes(value)){
      setResult(eval(calculate + value).toString());
    }

  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
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

          <button>DEL</button>
        </div>

        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('-')}>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
