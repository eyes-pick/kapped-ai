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
} from '@/components/organisms/sidebar'; // ✅ Resolved import path

// ✅ Test wrapper that includes context
function SidebarTestWrapper() {
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

// 🧪 Sidebar integration test suite
describe('Sidebar modules', () => {
  beforeAll(() => {
    // 🔧 Mock matchMedia for responsive hooks (used by Tailwind)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('renders menu button inside SidebarProvider', () => {
    render(<SidebarTestWrapper />);
    const button = screen.getByRole('button', { name: /demo/i });
    expect(button).toBeInTheDocument();
  });

  it('throws when useSidebar is called outside provider', () => {
    const ConsoleError = console.error;
    console.error = vi.fn(); // Suppress expected React error logs

    const BadComponent = () => {
      useSidebar(); // ❌ Incorrect usage
      return <div>Invalid</div>;
    };

    expect(() => render(<BadComponent />)).toThrowError(/SidebarProvider/);
    console.error = ConsoleError; // Restore logging
  });
});

      useSidebar(); // ❌ Incorrect usage
      return <div>Invalid</div>;
    };

    expect(() => render(<BadComponent />)).toThrowError(/SidebarProvider/);
    console.error = ConsoleError; // Restore logging
  });
});
