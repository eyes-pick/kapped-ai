import { NextRequest, NextResponse } from "next/server";
import { getDoc } from "@/lib/docs";

export async function GET(
  _request: NextRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any,
) {
  try {
    const param = context.params.file;
    const file = Array.isArray(param) ? param[0] : param;
    const content = await getDoc(file);
    return new NextResponse(content, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
