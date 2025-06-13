import { NextRequest } from "next/server";

/**
 * SSE endpoint emitting placeholder chat updates for a project.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId") || "default";
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 1; i <= 3; i++) {
        controller.enqueue(
          encoder.encode(`data: update ${i} for ${projectId}\n\n`),
        );
        await new Promise((r) => setTimeout(r, 10));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
