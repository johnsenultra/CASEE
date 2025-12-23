import { render, screen } from '@testing-library/react';
import { First } from './First';

describe('First test', () => {
  it('It should render component', () => {
    render(<First />)
    expect(true).toBeTruthy()

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument()
  });
});
