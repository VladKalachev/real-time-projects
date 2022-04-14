import { render, screen } from '@testing-library/react';
import Table from '../Table';

describe('#Table', () => {
  it('render Table', () => {
    render(<Table />)
    // debug();
    // const elementButton = screen.getByText('Button');
    // expect(elementButton).toBeInTheDocument();
  })
});