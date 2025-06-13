import { NextRequest, NextResponse } from "next/server";
import {
  createUser,
  validateUser,
  createSession,
  getSession,
} from "@/lib/auth-store";

/**
 * Combined login and session handler.
 * POST handles login or signup and sets a session cookie.
 * GET returns the current session from the KV-backed store.
 */
export async function POST(request: NextRequest) {
  const { email, password, action } = await request.json();
  if (action === "signup") {
    await createUser(email, password);
  }
  const valid = await validateUser(email, password);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const token = await createSession(email);
  const res = NextResponse.redirect(new URL("/projects/default", request.url), 302);
  res.cookies.set("session-token", token, { path: "/" });
  return res;
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("session-token")?.value;
  if (!token) return NextResponse.json({ user: null });
  const session = await getSession(token);
  if (!session) return NextResponse.json({ user: null });
  return NextResponse.json({ user: { email: session.email } });
}
