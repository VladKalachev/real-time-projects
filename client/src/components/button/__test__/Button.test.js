
import { render } from '@testing-library/react';
import Button from '../Button';

describe('#Button', () => {
  it('render Button', () => {
    const { getByText, debug } = render(<Button />)
    debug();
    expect(getByText('Button')).toBeInTheDocument();
  })
});