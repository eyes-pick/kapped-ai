import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchForm from "@/components/landing-page/prompt/SearchForm";

const push = vi.fn();
vi.mock("next/navigation", async () => {
  const actual =
    await vi.importActual<typeof import("next/navigation")>("next/navigation");
  return { ...actual, useRouter: () => ({ push }) };
});

describe("SearchForm", () => {
  it("creates project and navigates", async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn(() =>
      Promise.resolve(
        new Response(JSON.stringify({ id: "abc123" }), {
          headers: { "Content-Type": "application/json" },
        }),
      ),
    ) as unknown as typeof fetch;

    render(<SearchForm />);
    const input = screen.getByPlaceholderText(/what would you like to build/i);
    await user.type(input, "my app");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
    expect(push).toHaveBeenCalledWith("/projects/abc123");
  });
});
