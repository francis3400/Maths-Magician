import { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="display-screen" type="text">
            {result.next || result.total || '0'}
          </div>
        </div>

        <div className="operators">
          <button
            type="button"
            onClick={() => {
              handleClick('÷');
            }}
            className="ope Divide"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('x');
            }}
            className="ope Multiply"
          >
            x
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('-');
            }}
            className="ope Minus"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('+');
            }}
            className="ope Plus"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('=');
            }}
            className="ope Equal"
          >
            =
          </button>
        </div>

        <div className="digits">
          <button
            type="button"
            onClick={() => {
              handleClick('AC');
            }}
            className="delete delete"
          >
            AC
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('+/-');
            }}
            className="delete clear"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('%');
            }}
            className="percentage"
          >
            %
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('7');
            }}
            className="seven"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('8');
            }}
            className="eight"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('9');
            }}
            className="nine"
          >
            9
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('4');
            }}
            className="four"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('5');
            }}
            className="five"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('6');
            }}
            className="six"
          >
            6
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('1');
            }}
            className="one"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('2');
            }}
            className="two"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('3');
            }}
            className="three"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('0');
            }}
            className="zero"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick('.');
            }}
            className="decimal"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
