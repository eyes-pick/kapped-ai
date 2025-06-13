import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatToolbar from "@/components/projects-page/chat/ChatToolbar";
import { vi } from "vitest";

describe("ChatToolbar handlers", () => {
  it("calls provided callbacks", async () => {
    const handlers = {
      onOpenFiles: vi.fn(),
      onUploadImage: vi.fn(),
      onGenerate: vi.fn(),
      onFix: vi.fn(),
    };
    const user = userEvent.setup();
    render(<ChatToolbar {...handlers} />);
    await user.click(screen.getByRole("button", { name: /files/i }));
    await user.click(screen.getByRole("button", { name: /images/i }));
    await user.click(screen.getByRole("button", { name: /gen/i }));
    await user.click(screen.getByRole("button", { name: /fix/i }));
    expect(handlers.onOpenFiles).toHaveBeenCalled();
    expect(handlers.onUploadImage).toHaveBeenCalled();
    expect(handlers.onGenerate).toHaveBeenCalled();
    expect(handlers.onFix).toHaveBeenCalled();
  });
});
