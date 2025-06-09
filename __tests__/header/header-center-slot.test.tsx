import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderCenterSlot from "@/components/molecules/header-center-slot";

describe("HeaderCenterSlot", () => {
  it("renders all center slot icons with accessible labels", () => {
    render(<HeaderCenterSlot />);

    expect(screen.getByLabelText(/chat/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/db/i)).toBeInTheDocument();
  });

  it("opens GitHub link in a new tab", () => {
    render(<HeaderCenterSlot />);
    const githubLink = screen.getByLabelText(/github/i);

    expect(githubLink).toHaveAttribute("href", "https://github.com/genr8");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("triggers action if button has an onClick", async () => {
    const mockAction = vi.fn();

    const CustomSlot = () => {
      return (
        <div>
          <button aria-label="custom" onClick={mockAction}>
            X
          </button>
        </div>
      );
    };

    const user = userEvent.setup();
    render(<CustomSlot />);
    await user.click(screen.getByLabelText("custom"));
    expect(mockAction).toHaveBeenCalled();
  });
});
