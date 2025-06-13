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

describe("Sandbox integration", () => {
  it("uses built assets in production", async () => {
    (process.env as unknown as Record<string, string>).NODE_ENV = "production";
    const sandbox = createSandbox();
    const { container } = await sandbox.load("/sandbox");
    const iframe = container.querySelector("iframe");
    expect(iframe).toHaveAttribute("src", "/vite-template/dist/index.html");
  });
});
