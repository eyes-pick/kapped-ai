import { NextRequest } from "next/server";

// Map to hold SSE listeners per project
const listeners: Map<string, Set<(data: string) => void>> = new Map();

function broadcast(projectId: string, message: string) {
  const set = listeners.get(projectId);
  if (set) {
    for (const send of set) send(message);
  }
}

/** Handle SSE GET requests and maintain connection listeners. */
export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId") || "default";
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = (msg: string) => {
        controller.enqueue(encoder.encode(`data: ${msg}\n\n`));
      };
      const set = listeners.get(projectId) || new Set();
      set.add(send);
      listeners.set(projectId, set);
      return () => {
        set.delete(send);
      };
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

/** Broadcast prompt and echo back via SSE */
export async function POST(req: NextRequest) {
  const { prompt, projectId = "default" } = await req.json();
  broadcast(projectId, prompt);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${prompt}\n\n`));
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
