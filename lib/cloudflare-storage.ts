export type KVStore = {
  put(key: string, value: string): Promise<void>;
  get(key: string): Promise<string | null>;
  delete(key: string): Promise<void>;
};

export type R2Bucket = {
  put(key: string, data: ArrayBuffer | string): Promise<void>;
  get(key: string): Promise<ArrayBuffer | null>;
  delete(key: string): Promise<void>;
};

let kv: KVStore | null = null;
let r2: R2Bucket | null = null;

/**
 * Set the Cloudflare storage adapters. Useful for dependency injection and tests.
 */
export function setStorageAdapters(adapters: { kv?: KVStore; r2?: R2Bucket }) {
  if (adapters.kv) kv = adapters.kv;
  if (adapters.r2) r2 = adapters.r2;
}

/** Store a value in Cloudflare KV. */
export async function kvPut(key: string, value: string): Promise<void> {
  if (!kv) throw new Error("KV adapter not configured");
  await kv.put(key, value);
}

/** Retrieve a value from Cloudflare KV. */
export async function kvGet(key: string): Promise<string | null> {
  if (!kv) throw new Error("KV adapter not configured");
  return kv.get(key);
}

/** Remove a key from Cloudflare KV. */
export async function kvDelete(key: string): Promise<void> {
  if (!kv) throw new Error("KV adapter not configured");
  await kv.delete(key);
}

/** Upload data to Cloudflare R2. */
export async function r2Put(
  key: string,
  data: ArrayBuffer | string,
): Promise<void> {
  if (!r2) throw new Error("R2 adapter not configured");
  await r2.put(key, data);
}

/** Get data from Cloudflare R2. */
export async function r2Get(key: string): Promise<ArrayBuffer | null> {
  if (!r2) throw new Error("R2 adapter not configured");
  return r2.get(key);
}

/** Delete an object from Cloudflare R2. */
export async function r2Delete(key: string): Promise<void> {
  if (!r2) throw new Error("R2 adapter not configured");
  await r2.delete(key);
}
