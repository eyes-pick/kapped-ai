import { NextRequest, NextResponse } from "next/server";

/**
 * Minimal handler accepting a user prompt and context.
 * Currently echoes the received data for development purposes.
 */
export async function POST(request: NextRequest) {
  const { prompt, context } = await request.json();
  console.log("Prompt received", prompt, context);
  return NextResponse.json({ ok: true });
}
