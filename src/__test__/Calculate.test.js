/** ****************************************
 * Project: math-magicians
 * File: Calculate.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('operate function check', () => {
  test('AC', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };
    const state = calculate(obj, 'AC');
    expect(state.total).toBe(null);
  });

  test('number', () => {
    const obj = {
      total: '0',
      next: null,
      operation: '+',
    };
    const state = calculate(obj, '1');
    expect(state.next).toBe('1');
  });

  test('dot', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    const state = calculate(obj, '.');
    expect(state.next).toBe('3.');
  });

  test('equal', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };

    const state = calculate(obj, '=');
    expect(state.next).toBe(null);
  });

  test('+/-', () => {
    const obj = {
      total: '50',
      next: null,
      operation: null,
    };

    const state = calculate(obj, '+/-');
    expect(state.total).toBe('-50');
  });
});
