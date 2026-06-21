/** ****************************************
 * Project: math-magicians
 * File: Button.test.js
 * Created: 4/8/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

describe('Buttons are rendered correctly', () => {
  test('Buttons snapshots match', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ensure all buttons are rendered', () => {
    render(<Buttons />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
  });
});
