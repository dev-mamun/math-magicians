/** ****************************************
 * Project: math-magicians
 * File: Quote.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../pages/Quote';

it('Quote renders correctly', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

it('Quote UI', () => {
  render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston');
  expect(Element).toBeInTheDocument();
});
