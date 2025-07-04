import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "@components": fileURLToPath(new URL("./components", import.meta.url)),
      "@genr8/testing-sandbox": fileURLToPath(
        new URL("./__mocks__/genr8-testing-sandbox.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
    coverage: {
      reporter: ["text", "html", "json"],
    },
  },
});
