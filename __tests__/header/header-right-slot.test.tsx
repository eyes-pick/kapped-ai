import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderRightSlot from "@/components/molecules/header-right-slot";

describe("HeaderRightSlot", () => {
  it("toggles preview icon on click", async () => {
    const user = userEvent.setup();
    render(<HeaderRightSlot />);

    const toggleButton = screen.getByLabelText(/preview/i);
    // Initial state should show layout icon
    expect(
      document.querySelector("svg.lucide-layout-panel-top")
    ).toBeInTheDocument();

    await user.click(toggleButton);

    // After click, code icon should appear and layout icon disappear
    expect(document.querySelector("svg.lucide-layout-panel-top")).not.toBeInTheDocument();
    expect(document.querySelector("svg.lucide-code-xml")).toBeInTheDocument();
  });

  it("links to the Docs page", () => {
    render(<HeaderRightSlot />);

    const docsLink = screen.getByRole("link", { name: /docs/i });
    expect(docsLink).toHaveAttribute("href", "/docs");
  });
});
