/** ****************************************
 * Project: math-magicians
 * File: Header.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

it('Header Render Correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});

it('Header UI', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const Element = screen.getByText(/Math Magicians/i);
  expect(Element).toBeInTheDocument();
});
