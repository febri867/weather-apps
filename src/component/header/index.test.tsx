import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders title and subtitle', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', {
        name: /weather dashboard/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/openstreetmap \+ wttr\.in/i),
    ).toBeInTheDocument();
  });
});