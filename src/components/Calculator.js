import React from 'react';
import './calculator.css';
import Display from './Display';

const Calculator = () => (
  <div className="calculator-container">
    <Display />
    <div className="signs">
      <button type="button" className="sign btn1">AC</button>
      <button type="button" className="sign btn2">+/-</button>
      <button type="button" className="sign btn3">%</button>
      <button type="button" className="sign sing-math btn4">+</button>
      <button type="button" className="sign btn5">7</button>
      <button type="button" className="sign btn7">8</button>
      <button type="button" className="sign btn8">9</button>
      <button type="button" className="sign sing-math btn9">X</button>
      <button type="button" className="sign btn10">4</button>
      <button type="button" className="sign btn11">5</button>
      <button type="button" className="sign btn12">6</button>
      <button type="button" className="sign sing-math btn13">-</button>
      <button type="button" className="sign btn14">1</button>
      <button type="button" className="sign btn15">2</button>
      <button type="button" className="sign btn16">3</button>
      <button type="button" className="sign sing-math btn17">+</button>
      <button type="button" className="sign btn18">0</button>
      <button type="button" className="sign btn19">.</button>
      <button type="button" className="sign sing-math btn20">=</button>
    </div>
  </div>
);

export default Calculator;
