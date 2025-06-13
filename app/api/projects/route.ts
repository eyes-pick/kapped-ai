import { NextRequest, NextResponse } from "next/server";
import { addPrompt } from "@/lib/context-manager";

/**
 * Creates a new project from an initial prompt.
 * Accepts POST { prompt: string } and returns { id: string }.
 */
export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }
    const id = crypto.randomUUID();
    addPrompt(id, prompt);
    return NextResponse.json({ id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
