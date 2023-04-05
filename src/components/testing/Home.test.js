import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Render components', () => {
  it('It render the Home Components', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our Page')).toBeInTheDocument();
  });
});
