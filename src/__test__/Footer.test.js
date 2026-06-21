/** ****************************************
 * Project: math-magicians
 * File: Footer.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

it('Header Render Correctly', () => {
  const tree = render(<Footer />);
  expect(tree).toMatchSnapshot();
});
it('Footer UI', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
  const Element = screen.getByText(/© 2023 Created by Abdullah Al Mamun/i);
  expect(Element).toBeInTheDocument();
});
