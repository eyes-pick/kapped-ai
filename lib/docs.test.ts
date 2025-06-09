import { promises as fs } from "fs";
import path from "path";
import { getDocs, getDoc } from "./docs";

describe("getDocs", () => {
  const temp = path.join(process.cwd(), "docs/test-temp.md");

  beforeAll(async () => {
    await fs.writeFile(temp, "# Temp Doc");
  });

  afterAll(async () => {
    await fs.unlink(temp);
  });

  it("includes newly created markdown files", async () => {
    const docs = await getDocs();
    const names = docs.map((d) => d.file);
    expect(names).toContain("test-temp.md");
  });
});

describe("getDoc", () => {
  const tempFile = path.join(process.cwd(), "docs/test-doc.md");

  beforeAll(async () => {
    await fs.writeFile(tempFile, "# Hello Doc");
  });

  afterAll(async () => {
    await fs.unlink(tempFile);
  });

  it("reads markdown file contents", async () => {
    const content = await getDoc("test-doc.md");
    expect(content.trim()).toBe("# Hello Doc");
  });

  it("throws for missing file", async () => {
    await expect(getDoc("nope.md")).rejects.toThrow();
  });
});
