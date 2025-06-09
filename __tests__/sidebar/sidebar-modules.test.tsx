import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/organisms/sidebar'; // <-- Unified path after conflict resolution

// ✅ Component wrapped in Sidebar context
function Wrapper() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Demo</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

// 🧪 Sidebar integration tests
describe('Sidebar modules', () => {
  beforeAll(() => {
    // Mock window.matchMedia for Tailwind/Media Query compatibility
    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
  });

  it('renders menu button inside provider', () => {
    render(<Wrapper />);
    expect(screen.getByRole('button', { name: 'Demo' })).toBeInTheDocument();
  });

  it('useSidebar throws outside provider', () => {
    function BadComponent() {
      useSidebar(); // 💥 Should throw since no provider is wrapped
      return null;
    }

    // ⛔ Expect a rendering error
    expect(() => render(<BadComponent />)).toThrowError(/SidebarProvider/);
  });
});
