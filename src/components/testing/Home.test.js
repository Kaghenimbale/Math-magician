import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Render components', () => {
  it('It render the Home Components', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our Page')).toBeInTheDocument();
  });

  test('Remder Home component', () => {
    const tree = renderer
      .create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
