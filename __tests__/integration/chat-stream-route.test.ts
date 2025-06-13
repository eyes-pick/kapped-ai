import { GET } from "@/app/api/chat/stream/route";
import { NextRequest } from "next/server";

describe("chat stream route", () => {
  it("streams messages", async () => {
    const req = new NextRequest("http://localhost/api/chat/stream");
    const res = await GET(req);

    expect(res.headers.get("content-type")).toBe("text/event-stream");

    const reader = res.body?.getReader();
    expect(reader).toBeDefined();

    const decoder = new TextDecoder();
    let text = "";

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value);
      }
    }

    expect(text).toContain("update 1");
    expect(text).toContain("update 2");
    expect(text).toContain("update 3");
  });
});
