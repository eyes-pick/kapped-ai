import { addPrompt, getContext, clearContext } from "@/lib/context-manager";

describe("context manager", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("stores prompts per project", () => {
    addPrompt("a", "first");
    addPrompt("a", "second");
    addPrompt("b", "other");
    expect(getContext("a")).toEqual(["first", "second"]);
    expect(getContext("b")).toEqual(["other"]);
  });

  it("clears stored prompts", () => {
    addPrompt("a", "one");
    clearContext("a");
    expect(getContext("a")).toEqual([]);
  });
});
