import crypto from "crypto";
import { kvPut, kvGet, kvDelete } from "./cloudflare-storage";

/**
 * In-memory store used as a fallback when Cloudflare KV is not configured.
 * All operations attempt to persist to KV but gracefully degrade to memory.
 */

type UserRecord = { email: string; password: string };
type SessionRecord = { email: string };

const USERS = new Map<string, UserRecord>();
const SESSIONS = new Map<string, SessionRecord>();

/** Create a new user record */
export async function createUser(email: string, password: string): Promise<void> {
  USERS.set(email, { email, password });
  try {
    await kvPut(`users:${email}`, JSON.stringify({ email, password }));
  } catch {
    // Ignore if KV isn't configured
  }
}

/** Validate provided credentials against stored users */
export async function validateUser(
  email: string,
  password: string,
): Promise<boolean> {
  const memPassword = USERS.get(email)?.password;
  if (memPassword !== undefined) {
    return memPassword === password;
  }
  try {
    const record = await kvGet(`users:${email}`);
    if (!record) return false;
    const parsed: UserRecord = JSON.parse(record);
    USERS.set(email, parsed);
    return parsed.password === password;
  } catch {
    return false;
  }
}

/** Store a new session and return the generated token */
export async function createSession(email: string): Promise<string> {
  const token = crypto.randomUUID();
  SESSIONS.set(token, { email });
  try {
    await kvPut(`sessions:${token}`, JSON.stringify({ email }));
  } catch {
    // Ignore if KV isn't configured
  }
  return token;
}

/** Retrieve a session by token */
export async function getSession(token: string): Promise<SessionRecord | null> {
  const mem = SESSIONS.get(token);
  if (mem) return mem;
  try {
    const record = await kvGet(`sessions:${token}`);
    if (!record) return null;
    const parsed: SessionRecord = JSON.parse(record);
    SESSIONS.set(token, parsed);
    return parsed;
  } catch {
    return null;
  }
}

/** Remove a session */
export async function deleteSession(token: string): Promise<void> {
  SESSIONS.delete(token);
  try {
    await kvDelete(`sessions:${token}`);
  } catch {
    // Ignore if KV isn't configured
  }
}
