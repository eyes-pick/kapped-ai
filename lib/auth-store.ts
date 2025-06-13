import crypto from "crypto";

/**
 * In-memory store simulating Cloudflare KV for user and session data.
 * In production this would be replaced with Cloudflare KV bindings.
 */

type UserRecord = { email: string; password: string };
type SessionRecord = { email: string };

const USERS = new Map<string, UserRecord>();
const SESSIONS = new Map<string, SessionRecord>();

/** Create a new user record */
export async function createUser(email: string, password: string): Promise<void> {
  USERS.set(email, { email, password });
}

/** Validate provided credentials against stored users */
export async function validateUser(
  email: string,
  password: string,
): Promise<boolean> {
  return USERS.get(email)?.password === password;
}

/** Store a new session and return the generated token */
export async function createSession(email: string): Promise<string> {
  const token = crypto.randomUUID();
  SESSIONS.set(token, { email });
  return token;
}

/** Retrieve a session by token */
export async function getSession(token: string): Promise<SessionRecord | null> {
  return SESSIONS.get(token) || null;
}

/** Remove a session */
export async function deleteSession(token: string): Promise<void> {
  SESSIONS.delete(token);
}
