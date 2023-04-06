import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('Render Navbar component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should redirect and update dom', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
