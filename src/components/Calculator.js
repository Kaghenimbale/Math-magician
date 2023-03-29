import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="input">
        <p className="values">
          {total}
          {operation}
          {next}
        </p>
      </div>
      <div className="signs">
        <button type="button" onClick={handleClick} className="sign btn1">
          AC
        </button>
        <button type="button" onClick={handleClick} className="sign btn2">
          +/-
        </button>
        <button type="button" onClick={handleClick} className="sign btn3">
          %
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="sign sing-math btn4"
        >
          +
        </button>
        <button type="button" onClick={handleClick} className="sign btn5">
          7
        </button>
        <button type="button" onClick={handleClick} className="sign btn7">
          8
        </button>
        <button type="button" onClick={handleClick} className="sign btn8">
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="sign sing-math btn9"
        >
          x
        </button>
        <button type="button" onClick={handleClick} className="sign btn10">
          4
        </button>
        <button type="button" onClick={handleClick} className="sign btn11">
          5
        </button>
        <button type="button" onClick={handleClick} className="sign btn12">
          6
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="sign sing-math btn13"
        >
          -
        </button>
        <button type="button" onClick={handleClick} className="sign btn14">
          1
        </button>
        <button type="button" onClick={handleClick} className="sign btn15">
          2
        </button>
        <button type="button" onClick={handleClick} className="sign btn16">
          3
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="sign sing-math btn17"
        >
          +
        </button>
        <button type="button" onClick={handleClick} className="sign btn18">
          0
        </button>
        <button type="button" onClick={handleClick} className="sign btn19">
          .
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="sign sing-math btn20"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
