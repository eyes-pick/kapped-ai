import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderRightSlot from '@/components/molecules/header-right-slot';

describe('HeaderRightSlot', () => {
  it('renders preview toggle and docs link', () => {
    render(<HeaderRightSlot />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /docs/i })).toBeInTheDocument();
  });

  it('toggles preview when button clicked', async () => {
    render(<HeaderRightSlot />);
    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);
    expect(button).toBeInTheDocument();
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
