import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Credits } from './Credits';

describe('Credits Component', () => {
  test('renders Credits component correctly', () => {
    render(<Credits />);

    // Sprawdzenie obecności nagłówka "CREDITS CREATED BY"
    expect(screen.getByText(/CREDITS CREATED BY/i)).toBeInTheDocument();

    // Sprawdzenie obecności imienia autora
    expect(screen.getByText(/JAKUB DZIĘCIOŁOWSKI - xmNuc on github/i)).toBeInTheDocument();
  });

  test('renders team members correctly', () => {
    render(<Credits />);

    // Sprawdzenie obecności członka zespołu "Alice Smith"
    expect(screen.getByText(/Alice Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Product owner/i)).toBeInTheDocument();
  });

  test('pauses scrolling when hovering over team member', () => {
    render(<Credits />);

    const teamMember = screen.getByText(/Alice Smith/i).closest('div');
    expect(teamMember).not.toHaveClass('paused');

    fireEvent.mouseEnter(teamMember!);
    expect(teamMember?.parentElement).toHaveClass('paused');

    fireEvent.mouseLeave(teamMember!);
    expect(teamMember?.parentElement).not.toHaveClass('paused');
  });

  test('clicking team member with email triggers mailto link', () => {
    render(<Credits />);

    const teamMember = screen.getByText(/Alice Smith/i).closest('div');
    window.location.href = '';

    fireEvent.click(teamMember!);
    expect(window.location.href).toBe('mailto:alice@example.xd');
  });

  test('clicking team member without email does nothing', () => {
    render(<Credits />);

    const teamMember = screen.getByText(/Emmett Brown/i).closest('div');
    window.location.href = '';

    fireEvent.click(teamMember!);
    expect(window.location.href).toBe('');
  });
});
