import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../index';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header title="Test Title" />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<Header title="Test Title" />);
    const linkElement = screen.getByRole('link', { name: 'Test Title' });
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the ModeToggle component', () => {
    render(<Header title="Test Title" />);
    const modeToggleElement = screen.getByTestId('mode-toggle');
    expect(modeToggleElement).toBeInTheDocument();
  });
});