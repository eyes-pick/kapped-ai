import { POST, GET } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest } from "next/server";

describe("auth flow", () => {
  it("login redirects and persists session", async () => {
    const loginReq = new NextRequest("http://localhost/api/auth", {
      method: "POST",
      body: JSON.stringify({ email: "user@example.com", password: "pw", action: "signup" }),
      headers: { "Content-Type": "application/json" },
    });
    const loginRes = await POST(loginReq);
    expect(loginRes.status).toBe(302);
    const cookie = loginRes.headers.get("set-cookie") || "";
    const token = cookie.match(/session-token=([^;]+)/)?.[1];
    expect(token).toBeDefined();

    const sessionReq = new NextRequest("http://localhost/api/auth");
    if (token) sessionReq.cookies.set("session-token", token);
    const sessionRes = await GET(sessionReq);
    const data = await sessionRes.json();
    expect(data.user.email).toBe("user@example.com");
  });
});
