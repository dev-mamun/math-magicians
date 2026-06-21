/** ****************************************
 * Project: math-magicians
 * File: Calculator.js
 * Created: 3/28/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div className="row">
      <div className="col-8">
        <h1>Let&apos;s Do Some Math!</h1>
      </div>
      <div className="col-4">
        <div className="calculator">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
