import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Calculator', () => {
  test('Render Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have "Let us do some Math" ', () => {
    render(<Calculator />);
    expect(screen.getByText(/Let us do some Math!/)).toBeInTheDocument();
  });
});
