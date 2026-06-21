/** ****************************************
 * Project: math-magicians
 * File: Buttons.js
 * Created: 3/29/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import InputFied from './Input';

function Buttons() {
  const [display, setDisplay] = useState('0');
  const [calObj, setCalObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const btnHandler = (buttonName) => {
    const $data = calculate(calObj, buttonName.toString());
    setCalObj($data);

    // Update the display value
    const $total = $data.total || '';
    const $next = $data.next || '';
    const $operator = $data.operation || '';
    const $display = $total + $operator + $next;
    setDisplay($display);
  };
  return (
    <>
      <InputFied display={display} />
      <div className="buttons">
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('AC')}
            >
              AC
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('+/-')}
            >
              +/-
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('%')}
            >
              %
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('÷')}
            >
              ÷
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('7')}
            >
              7
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('8')}
            >
              8
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('9')}
            >
              9
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('x')}
            >
              *
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(4)}
            >
              4
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(5)}
            >
              5
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(6)}
            >
              6
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('-')}
            >
              -
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(1)}
            >
              1
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(2)}
            >
              2
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(3)}
            >
              3
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('+')}
            >
              +
            </button>
          </div>
        </div>
        <div className="btn-row">
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler(0)}
            >
              0
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('.')}
            >
              .
            </button>
          </div>
          <div className="btn-col">
            <button
              type="button"
              className="cal-btn"
              onClick={() => btnHandler('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
