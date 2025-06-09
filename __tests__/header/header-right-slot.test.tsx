import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderCenterSlot from '@/components/molecules/header-center-slot';

describe('HeaderCenterSlot', () => {
  it('renders all center slot icons with accessible labels', () => {
    render(<HeaderCenterSlot />);

    // Assert presence of all icon buttons by their ARIA labels
    expect(screen.getByLabelText(/chat/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/db/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preview/i)).toBeInTheDocument();
  });

  it('opens GitHub link in a new tab', () => {
    render(<HeaderCenterSlot />);

    const githubLink = screen.getByLabelText(/github/i);

    // Validate external link behavior
    expect(githubLink).toHaveAttribute('href', 'https://github.com/genr8');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('triggers action if button has an onClick', async () => {
    const mockAction = vi.fn(); // Using Vitest mock function

    const CustomSlot = () => (
      <div>
        <button aria-label="custom" onClick={mockAction}>X</button>
      </div>
    );

    const user = userEvent.setup();
    render(<CustomSlot />);

    await user.click(screen.getByLabelText('custom'));

    expect(mockAction).toHaveBeenCalled(); // Verify callback fired

  });
});
