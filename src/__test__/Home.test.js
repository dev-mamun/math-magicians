/** ****************************************
 * Project: math-magicians
 * File: Home.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

it('Home Render Correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

it('Home UI', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const Element = screen.getByText(/Welcome To Our Page!/i);
  expect(Element).toBeInTheDocument();
});
