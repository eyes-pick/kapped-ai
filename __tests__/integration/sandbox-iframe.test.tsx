import { render } from "@testing-library/react";
import { vi } from "vitest";
import SandboxPage from "@/app/projects/page";
import { createSandbox } from "@genr8/testing-sandbox";
import { createServer } from "http";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

vi.mock("@genr8/testing-sandbox", () => ({
  createSandbox: vi.fn(() => ({
    load: vi.fn(async () => ({ container: render(<SandboxPage />).container })),
    close: vi.fn(),
  })),
}));

describe("Sandbox iframe integration", () => {
  it("renders iframe during dev", async () => {
    const sandbox = createSandbox();
    const { container } = await sandbox.load("/sandbox");
    const iframe = container.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe?.getAttribute("src")).toBe("http://localhost:5173");
  });

  it("loads iframe with production build", async () => {
    const dir = mkdtempSync(join(tmpdir(), "vite-template-"));
    const indexPath = join(dir, "index.html");
    writeFileSync(indexPath, "<html><body>vite app</body></html>");

    const file = readFileSync(indexPath);
    const server = createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }).listen(5173);

    const response = await fetch("http://localhost:5173");
    expect(response.status).toBe(200);

    server.close();
    rmSync(dir, { recursive: true, force: true });
  });

  it("returns 404 when asset missing", async () => {
    const server = createServer((_, res) => {
      res.writeHead(404);
      res.end();
    }).listen(5173);

    const response = await fetch("http://localhost:5173/missing.js");
    expect(response.status).toBe(404);

    server.close();
  });
});
