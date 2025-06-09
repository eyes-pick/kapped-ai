import { render, screen, waitFor } from "@testing-library/react";
import { DocMarkdown } from "./doc-markdown";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { vi } from "vitest";

// 🧪 Mock global fetch
global.fetch = vi.fn();

// 🧪 Mock the marked and DOMPurify modules
vi.mock("marked", () => ({
  marked: { parse: vi.fn() },
}));

vi.mock("dompurify", () => ({
  default: { sanitize: vi.fn() },
}));

describe("DocMarkdown", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks before each test
  });

  it("renders markdown content successfully", async () => {
    const mockMarkdown = "# Hello World";
    const mockParsedHtml = "<h1>Hello World</h1>";
    const mockSanitizedHtml = "<h1>Hello World</h1>";

    // Mock successful fetch
    vi.mocked(global.fetch).mockResolvedValueOnce(
      new Response(mockMarkdown, { status: 200 }),
    );

    // Mock marked.parse and DOMPurify.sanitize
    vi.mocked(marked.parse).mockResolvedValueOnce(mockParsedHtml);
    vi.mocked(DOMPurify.sanitize).mockReturnValueOnce(mockSanitizedHtml);

    render(<DocMarkdown file="test.md" />);

    await waitFor(() => {
      const content = document.querySelector(".prose");
      expect(content).toBeInTheDocument();
      expect(content?.innerHTML).toBe(mockSanitizedHtml);
    });

    expect(global.fetch).toHaveBeenCalledWith("/docs/test.md");
  });

  it("handles fetch error gracefully", async () => {
    vi.mocked(global.fetch).mockRejectedValueOnce(new Error("404"));

    render(<DocMarkdown file="nonexistent.md" />);

    await waitFor(() => {
      const errorMessage = screen.getByText("Error loading documentation.");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage.tagName.toLowerCase()).toBe("p");
      expect(errorMessage.style.color).toBe("red");
    });
  });

  it("handles empty file prop", () => {
    render(<DocMarkdown file="" />);

    const content = document.querySelector(".prose");
    expect(content).toBeInTheDocument();
    expect(content?.innerHTML).toBe("");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("handles non-ok fetch response", async () => {
    // ✅ Resolved: mock a 404 response
    vi.mocked(global.fetch).mockResolvedValueOnce(
      new Response("", { status: 404 }),
    );

    render(<DocMarkdown file="missing.md" />);

    await waitFor(() => {
      const errorMessage = screen.getByText("Error loading documentation.");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
