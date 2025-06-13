import { join } from "path";
import { readFile } from "node:fs/promises";
import { kvPut, r2Put } from "./cloudflare-storage";


/**
 * Bundle the Vite build output and upload to R2 while
 * recording the latest build key in KV.
 *
 * @param userId - Owner of the project
 * @param projectId - Unique project identifier
 * @param version - Build version number
 * @returns Uploaded R2 object key
 */
export async function storeBuild(
  userId: string,
  projectId: string,
  version: string,
): Promise<string> {
  const distDir = join(process.cwd(), "vite-template", "dist");
  const data = await readFile(join(distDir, "index.html"));
  const r2Key = `projects/${userId}/${projectId}/${version}.zip`;
  await r2Put(r2Key, data);
  await kvPut(`project:${userId}:${projectId}`, r2Key);
  return r2Key;
}
