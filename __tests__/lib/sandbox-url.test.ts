import { getSandboxUrl } from "@/lib/sandbox-url";

describe("getSandboxUrl", () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    (process.env as unknown as Record<string, string>).NODE_ENV =
      originalEnv as string;
  });

  it("returns local server url in development", () => {
    (process.env as unknown as Record<string, string>).NODE_ENV = "development";
    expect(getSandboxUrl()).toBe("http://localhost:5173");
  });

  it("returns dist path in production", () => {
    (process.env as unknown as Record<string, string>).NODE_ENV = "production";
    expect(getSandboxUrl()).toBe("/vite-template/dist/index.html");
  });

  it("defaults to local server for unknown env", () => {
    (process.env as unknown as Record<string, string>).NODE_ENV = "staging";
    expect(getSandboxUrl()).toBe("http://localhost:5173");
  });
});
