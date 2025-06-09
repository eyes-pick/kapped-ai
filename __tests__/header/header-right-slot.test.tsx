import { render, screen } from '@testing-library/react';
import HeaderRightSlot from '@/components/molecules/header-right-slot';

describe('HeaderRightSlot', () => {
  it('renders a Docs link', () => {
    render(<HeaderRightSlot />);
    
    const docsLink = screen.getByRole('link', { name: /docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute('href', '/docs');
  });
});
