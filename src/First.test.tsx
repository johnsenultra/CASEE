import { render, screen } from '@testing-library/react';
import { First } from './First';

test('it renders a heading', () => {
  render(<First />);
  const heading = screen.getByRole('heading'); // Finds any heading element (h1, h2, etc.)
  expect(heading).toBeInTheDocument();
});
