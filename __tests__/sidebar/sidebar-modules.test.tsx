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
} from '@/components/organisms/sidebar';

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

describe('Sidebar modules', () => {
  beforeAll(() => {
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
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('useSidebar throws outside provider', () => {
    function Bad() {
      useSidebar();
      return null;
    }
    expect(() => render(<Bad />)).toThrow();
  });
});
