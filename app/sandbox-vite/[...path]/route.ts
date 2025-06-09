import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { readFile } from "fs/promises";

const baseDir = join(process.cwd(), "sandbox-vite", "dist");

function getMimeType(filePath: string): string {
  const ext = filePath.split(".").pop();
  switch (ext) {
    case "html":
      return "text/html";
    case "js":
      return "text/javascript";
    case "css":
      return "text/css";
    case "json":
      return "application/json";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

/**
 * Serve files from the local `sandbox-vite/dist` directory.
 *
 * @param _req - Incoming request (unused).
 * @param params - Optional path segments to the file within the dist directory.
 * @returns `NextResponse` containing the file or a 404 response.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: { path?: string[] } },
) {
  const segments = params.path ?? ["index.html"];
  const filePath = join(baseDir, ...segments);
  if (!filePath.startsWith(baseDir)) {
    return new NextResponse("Not Found", { status: 404 });
  }
  try {
    const data = await readFile(filePath);
    return new NextResponse(data, {
      headers: { "Content-Type": getMimeType(filePath) },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
