import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('Quote componenet', () => {
  test('should render the Quote component', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have "Let us do some Math" ', () => {
    render(<Loading />);
    const HomeElement = screen.getByTestId('Loading');
    expect(HomeElement).toBeInTheDocument();
  });
});
