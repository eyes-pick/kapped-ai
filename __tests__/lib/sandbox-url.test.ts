import { getSandboxUrl } from "@/lib/sandbox-url";

describe("getSandboxUrl", () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it("returns local server url in development", () => {
    process.env.NODE_ENV = "development";
    expect(getSandboxUrl()).toBe("http://localhost:5173");
  });

  it("returns dist path in production", () => {
    process.env.NODE_ENV = "production";
    expect(getSandboxUrl()).toBe("/sandbox-vite/dist/index.html");
  });

  it("defaults to local server for unknown env", () => {
    process.env.NODE_ENV = "staging";
    expect(getSandboxUrl()).toBe("http://localhost:5173");
  });
});
