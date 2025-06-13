import { POST } from "@/app/api/projects/route";
import { NextRequest } from "next/server";
import { vi } from "vitest";
import { addPrompt } from "@/lib/context-manager";

vi.mock("@/lib/context-manager", () => ({
  addPrompt: vi.fn(),
}));

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
  });
});
