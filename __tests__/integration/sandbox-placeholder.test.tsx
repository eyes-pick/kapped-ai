import { render } from "@testing-library/react";
import { vi } from "vitest";
import SandboxPage from "@/app/projects/page";
import { createSandbox } from "@genr8/testing-sandbox";

vi.mock("@genr8/testing-sandbox", () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => ({ container: render(<SandboxPage />).container })),
    close: vi.fn(),
  })),
}));

describe("Sandbox placeholder text", () => {
  it("shows the updated placeholder text", async () => {
    const sandbox = createSandbox();
    const { container } = await sandbox.load("/sandbox");
    // check placeholder text
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveAttribute('placeholder', 'Type the changes you want to make...');
  });
});
