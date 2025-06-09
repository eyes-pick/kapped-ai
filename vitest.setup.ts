import "@testing-library/jest-dom/vitest";
import "whatwg-fetch";
import "@testing-library/jest-dom/vitest";
import "whatwg-fetch";

// Polyfill matchMedia for components relying on it during tests
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
