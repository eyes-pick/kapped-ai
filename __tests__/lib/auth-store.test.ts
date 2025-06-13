import { setStorageAdapters } from "@/lib/cloudflare-storage";
import { createSession, getSession } from "@/lib/auth-store";

describe("auth-store persistence", () => {
  const kvMap = new Map<string, string>();

  beforeEach(() => {
    setStorageAdapters({
      kv: {
        put: async (k, v) => void kvMap.set(k, v),
        get: async (k) => kvMap.get(k) ?? null,
        delete: async (k) => void kvMap.delete(k),
      },
    });
    kvMap.clear();
  });

  it("persists sessions to KV", async () => {
    const token = await createSession("user@example.com");
    expect(kvMap.has(`sessions:${token}`)).toBe(true);
    const session = await getSession(token);
    expect(session?.email).toBe("user@example.com");
  });
});
