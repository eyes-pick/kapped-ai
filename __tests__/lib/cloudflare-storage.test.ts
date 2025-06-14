import {
  setStorageAdapters,
  kvPut,
  kvGet,
  kvDelete,
  r2Put,
  r2Get,
  r2Delete,
} from "@/lib/cloudflare-storage";

describe("cloudflare storage adapters", () => {
  const kvMap = new Map<string, string>();
  const r2Map = new Map<string, ArrayBuffer>();

  beforeEach(() => {
    setStorageAdapters({
      kv: {
        put: async (k, v) => void kvMap.set(k, v),
        get: async (k) => kvMap.get(k) ?? null,
        delete: async (k) => void kvMap.delete(k),
      },
      r2: {
        put: async (k, d) => {
          const buffer =
            typeof d === "string" ? new TextEncoder().encode(d).buffer : d;
          void r2Map.set(k, buffer as ArrayBuffer);
        },
        get: async (k) => r2Map.get(k) ?? null,
        delete: async (k) => void r2Map.delete(k),
      },
    });
    kvMap.clear();
    r2Map.clear();
  });

  it("stores and retrieves from KV", async () => {
    await kvPut("foo", "bar");
    expect(await kvGet("foo")).toBe("bar");
    await kvDelete("foo");
    expect(await kvGet("foo")).toBeNull();
  });

  it("uploads and fetches from R2", async () => {
    const data = new TextEncoder().encode("zip").buffer;
    await r2Put("file.zip", data as ArrayBuffer);
    expect(await r2Get("file.zip")).toEqual(data);
    await r2Delete("file.zip");
    expect(await r2Get("file.zip")).toBeNull();
  });
});
