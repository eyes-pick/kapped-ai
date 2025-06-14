import { POST } from "@/app/api/projects/route";
import { NextRequest } from "next/server";
import { vi } from "vitest";
import { addPrompt } from "@/lib/context-manager";
import { setStorageAdapters, kvGet } from "@/lib/cloudflare-storage";
import { storeBuild } from "@/lib/build-manager";

vi.mock("@/lib/context-manager", () => ({
  addPrompt: vi.fn(),
}));
const kvMap = new Map<string, string>();

vi.mock("@/lib/build-manager", () => ({
  storeBuild: vi.fn(
    async (userId: string, projectId: string, version: string) => {
      const key = `projects/${userId}/${projectId}/${version}.zip`;
      kvMap.set(`project:${userId}:${projectId}`, key);
      return key;
    },
  ),
}));

beforeAll(() => {
  setStorageAdapters({
    kv: {
      put: async (k, v) => void kvMap.set(k, v),
      get: async (k) => kvMap.get(k) ?? null,
      delete: async (k) => void kvMap.delete(k),
    },
  });
});

beforeEach(() => kvMap.clear());

describe("projects API", () => {
  it("creates project id and stores prompt", async () => {
    const req = new NextRequest("http://localhost/api/projects", {
      method: "POST",
      body: JSON.stringify({ prompt: "hello" }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(typeof data.id).toBe("string");
    expect(data.id.length).toBeGreaterThan(0);
    expect(addPrompt).toHaveBeenCalledWith(data.id, "hello");
    expect(await kvGet(`project:demo-user:${data.id}`)).toBe("");
  });

  it("optionally triggers first build", async () => {
    const req = new NextRequest("http://localhost/api/projects", {
      method: "POST",
      body: JSON.stringify({ prompt: "hi", build: true }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req);
    const data = await res.json();
    const key = `projects/demo-user/${data.id}/v1.zip`;
    expect(storeBuild).toHaveBeenCalledWith("demo-user", data.id, "v1");
    expect(data.buildKey).toBe(key);
    expect(await kvGet(`project:demo-user:${data.id}`)).toBe(key);
  });
});
