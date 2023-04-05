import { render } from '@testing-library/react';
import Calculator from '../Calculator';

describe(Calculator, () => {
  it('The result is:', () => {
    render(<Calculator />);
    // screen.getByRole('');
  });
});
