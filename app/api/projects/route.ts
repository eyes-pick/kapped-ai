import { NextRequest, NextResponse } from "next/server";
import { addPrompt } from "@/lib/context-manager";
import { kvPut } from "@/lib/cloudflare-storage";
import { storeBuild } from "@/lib/build-manager";

/**
 * Creates a new project from an initial prompt.
 * Accepts POST { prompt: string, build?: boolean }
 * and returns { id: string, buildKey?: string }.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, build } = body ?? {};

    if (typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }
    if (build !== undefined && typeof build !== "boolean") {
      return NextResponse.json(
        { error: "Invalid build flag" },
        { status: 400 },
      );
    }

    const userId = "demo-user";
    const id = crypto.randomUUID();

    // Track initial prompt in local context
    addPrompt(id, prompt);

    // Create empty project entry
    await kvPut(`project:${userId}:${id}`, "");

    let buildKey: string | undefined;
    if (build) {
      try {
        buildKey = await storeBuild(userId, id, "v1");
      } catch {
        return NextResponse.json({ error: "Build failed" }, { status: 500 });
      }
    }

    return NextResponse.json(buildKey ? { id, buildKey } : { id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
