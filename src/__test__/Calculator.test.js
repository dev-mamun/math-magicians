/** ****************************************
 * Project: math-magicians
 * File: Calculator.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

it('Calculator renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
it('Calculator UI', () => {
  render(<Calculator />);
  const Element = screen.getByText('Let\'s Do Some Math!');
  expect(Element).toBeInTheDocument();
});
