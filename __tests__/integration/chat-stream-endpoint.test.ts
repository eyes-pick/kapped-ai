import { GET, POST } from "@/app/api/chat/stream/route";

const decoder = new TextDecoder();

describe("chat streaming endpoint", () => {
  it("emits data to SSE listeners", async () => {
    const getResponse = GET(new Request("http://localhost/api/chat/stream?projectId=test"));
    const reader = getResponse.body!.getReader();
    await POST(
      new Request("http://localhost/api/chat/stream", {
        method: "POST",
        body: JSON.stringify({ projectId: "test", prompt: "hello" }),
      }),
    );
    const { value } = await reader.read();
    const text = decoder.decode(value);
    expect(text).toContain("hello");
  });
});
