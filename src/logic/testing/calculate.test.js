import calculate from '../calculate';

describe('Make calculation', () => {
  test('The summation is', () => {
    const output = {
      total: 4,
      next: 10,
      operation: '+',
    };
    expect(calculate(output, '=').total).toBe('14');
  });
  test('The substraction is', () => {
    const output = {
      total: 10,
      next: 9,
      operation: '-',
    };
    expect(calculate(output, '=').total).toBe('1');
  });
  test('The multipilcation is', () => {
    const output = {
      total: 10,
      next: 9,
      operation: 'x',
    };
    expect(calculate(output, '=').total).toBe('90');
  });
});
