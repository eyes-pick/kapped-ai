import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatToolbar from "@/components/projects-page/chat/ChatToolbar";
import { vi } from "vitest";

describe("ChatToolbar", () => {
  it("triggers action handlers on click", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<ChatToolbar />);

    await user.click(screen.getByText("Files"));
    await user.click(screen.getByText("Images"));
    await user.click(screen.getByText("Gen"));
    await user.click(screen.getByText("Fix"));

    expect(logSpy).toHaveBeenCalledWith("open file picker");
    expect(logSpy).toHaveBeenCalledWith("upload image");
    expect(logSpy).toHaveBeenCalledWith("generate code");
    expect(logSpy).toHaveBeenCalledWith("run fix");

    logSpy.mockRestore();
  });
});
