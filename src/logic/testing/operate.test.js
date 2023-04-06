import operate from '../operate';

describe('Testing my operate.js file', () => {
  test('Expect to return', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('Expect to return', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });
  test('Expect to return', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('Expect to return', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
});
