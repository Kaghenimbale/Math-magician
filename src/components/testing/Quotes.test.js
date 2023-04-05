import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../Quotes';

describe('Quote componenet', () => {
  test('should render the Quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have "Let us do some Math" ', () => {
     render(<Quote />);
  const HomeElement = screen.getByTestId('Quote');
  expect(HomeElement).toBeInTheDocument();
  });
});