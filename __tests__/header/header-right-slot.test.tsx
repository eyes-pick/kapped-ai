import { render } from '@testing-library/react';
import HeaderRightSlot from '@/components/header/header-right-slot';

describe('HeaderRightSlot', () => {
  it('shows docs link', () => {
    render(<HeaderRightSlot />);
    const link = document.querySelector('a[href="/docs"]');
    expect(link).toBeInTheDocument();
  });
});
