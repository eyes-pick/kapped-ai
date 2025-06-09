import { render } from '@testing-library/react';
import HeaderCenterSlot from '@molecules/header-center-slot';

describe('HeaderCenterSlot', () => {
  it('renders three icons', () => {
    const { container } = render(<HeaderCenterSlot />);
    expect(container.querySelectorAll('svg').length).toBe(3);
  });
});
