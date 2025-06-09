import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderLeftSlot from '@/components/header/header-left-slot';

describe('HeaderLeftSlot', () => {
  it('toggles dropdown open and close', async () => {
    const user = userEvent.setup();
    render(<HeaderLeftSlot />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    await user.click(screen.getByLabelText('Open menu'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <HeaderLeftSlot />
        <button>outside</button>
      </div>
    );
    await user.click(screen.getByLabelText('Open menu'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.click(screen.getByText('outside'));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
