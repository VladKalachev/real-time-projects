
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('#Button', () => {
  it('render Button', () => {
    render(<Button />)
    // debug();
    const elementButton = screen.getByText('Button');
    expect(elementButton).toBeInTheDocument();
  })
});