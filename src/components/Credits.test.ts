import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Credits from './Credits';

describe('Credits Component', () => {
  test('renders component correctly', () => {
    render(<Credits />);

    expect(screen.getByText('CREDITS CREATED BY')).toBeInTheDocument();
    expect(screen.getByText('JAKUB DZIĘCIOŁOWSKI - xmNuc on github')).toBeInTheDocument();
  });

  test('renders all team members', () => {
    render(<Credits />);

    const teamMembers = [
      'Alice Smith',
      'Bob Johnson',
      'Charlie Brown',
      'Daisy Miller',
      'Edward Davis',
      'Frank Wilson',
      'Grace Lee',
      'Henry Taylor',
      'Ivy Anderson',
      'Jack White',
      'John Wick',
      'Marty McFly',
      'Emmett Brown',
      'Thomas A. Anderson',
    ];

    teamMembers.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('pauses animation on hover', async () => {
    render(<Credits />);
    const creditContainer = screen.getByText('JAKUB DZIĘCIOŁOWSKI - xmNuc on github');

    await userEvent.hover(creditContainer);
    expect(creditContainer.closest('.credits-container')).toHaveClass('paused');

    await userEvent.unhover(creditContainer);
    expect(creditContainer.closest('.credits-container')).not.toHaveClass('paused');
  });

  test('email click redirects to mailto link', () => {
    render(<Credits />);
    const member = screen.getByText('Alice Smith');

    // Mock window.location
    const originalLocation = window.location;
    delete window.location;
    window.location = { assign: jest.fn() } as any;

    fireEvent.click(member);
    expect(window.location.assign).toHaveBeenCalledWith('mailto:alice@example.xd');

    // Restore window.location
    window.location = originalLocation;
  });
});
