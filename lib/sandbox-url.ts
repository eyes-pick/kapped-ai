/**
 * Resolve the iframe URL for the sandbox application.
 *
 * The development environment loads the local Vite dev server.
 * Production environments use the built static assets.
 *
 * @returns URL string used for the sandbox iframe.
 *
 * @example
 * const url = getSandboxUrl();
 * // "http://localhost:5173" on development
 */
export function getSandboxUrl(): string {
  return process.env.NODE_ENV === "production"
    ? "/vite-template/dist/index.html"
    : "http://localhost:5173";
}
