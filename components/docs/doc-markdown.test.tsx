import { render, screen, waitFor } from "@testing-library/react";
import { DocMarkdown } from "../docs/doc-markdown";
import { marked } from "marked";
import { vi } from "vitest";
import { promises as fs } from "fs";
import path from "path";
import { GET as docRoute } from "@/app/docs/[file]/route";
import { NextRequest } from "next/server";
import * as DOMPurify from "dompurify";

// 🧪 Mock global fetch
global.fetch = vi.fn();

// 🧪 Mock the marked and DOMPurify modules
vi.mock("marked", async () => {
  const actual = await import("marked");
  return {
    marked: {
      parse: vi.fn(),
      Renderer: actual.marked.Renderer,
      setOptions: vi.fn(),
    },
  };
});

vi.mock("dompurify", () => ({
  default: { sanitize: vi.fn() },
  sanitize: vi.fn(),
}));

describe("DocMarkdown", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks before each test
  });

  it("shows a loading indicator while fetching", async () => {
    let resolveFn: (value: Response) => void = () => { };
    vi.mocked(global.fetch).mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveFn = resolve;
        }),
    );

    // Set up mocks before resolving fetch
    vi.mocked(marked.parse).mockResolvedValueOnce("<h1>Hi</h1>");
    vi.mocked(DOMPurify.sanitize).mockReturnValueOnce("<h1>Hi</h1>");

    render(<DocMarkdown file="loading.md" />);

    expect(
      screen.getByText("Loading documentation...")
    ).toBeInTheDocument();

    resolveFn(new Response("# Hi"));

    await waitFor(() => {
      const prose = document.querySelector(".prose");
      // Wait for the prose element to exist and have the expected HTML
      return prose && prose.innerHTML === "<h1>Hi</h1>";
    }, { timeout: 2000 });
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
    vi.mocked(DOMPurify.default.sanitize).mockReturnValueOnce(mockSanitizedHtml);

    render(<DocMarkdown file="test.md" />);

    await waitFor(() => {
      const content = document.querySelector(".prose");
      expect(content).toBeInTheDocument();
      expect(content?.innerHTML).toBe(mockSanitizedHtml);
    });

    expect(global.fetch).toHaveBeenCalledWith("/docs/test.md");
  });

  it("renders content fetched via dynamic route", async () => {
    const tempPath = path.join(process.cwd(), "docs/route-test.md");
    await fs.writeFile(tempPath, "# Route Test");

    vi.mocked(marked.parse).mockResolvedValueOnce("<h1>Route Test</h1>");
    vi.mocked(DOMPurify.default.sanitize).mockReturnValueOnce("<h1>Route Test</h1>");

    vi.mocked(global.fetch).mockImplementationOnce(() =>
      Promise.resolve(
        docRoute(new NextRequest("http://localhost"), {
          params: { file: "route-test.md" },
        }),
      ),
    );

    render(<DocMarkdown file="route-test.md" />);

    await waitFor(() => {
      const content = document.querySelector(".prose");
      expect(content?.innerHTML).toBe("<h1>Route Test</h1>");
    });

    await fs.unlink(tempPath);
  });

  it("handles fetch error gracefully", async () => {
    vi.mocked(global.fetch).mockRejectedValueOnce(new Error("404"));

    render(<DocMarkdown file="nonexistent.md" />);

    await waitFor(() => {
      const errorMessage = screen.getByText("Failed to load documentation.");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage.tagName.toLowerCase()).toBe("p");
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
      const errorMessage = screen.getByText("Failed to load documentation.");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

