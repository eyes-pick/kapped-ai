import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderLeftSlot from '@/components/molecules/header-left-slot';

describe('HeaderLeftSlot', () => {
  it('toggles dropdown open and closed via button and Escape key', async () => {
    const user = userEvent.setup();

    render(<HeaderLeftSlot />);
    const toggleButton = screen.getByLabelText(/open menu/i);

    // Initially closed
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Open dropdown
    await user.click(toggleButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Close with Escape
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <HeaderLeftSlot />
        <button>Outside</button>
      </div>
    );

    // Open dropdown
    await user.click(screen.getByLabelText(/open menu/i));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Click outside
    await user.click(screen.getByText(/outside/i));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
