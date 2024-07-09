import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('should render a paragraph', () => {
    render(<Header />);

    expect(screen.getAllByTestId('header')).toBeInTheDocument();
  });
});
