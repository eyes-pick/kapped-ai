import { NextResponse } from "next/server";
import { getDoc } from "@/lib/docs";

export async function GET(
  _request: Request,
  { params }: { params: { file: string } }
) {
  try {
    const content = await getDoc(params.file);
    return new NextResponse(content, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
