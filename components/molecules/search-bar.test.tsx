import { render, screen } from "@testing-library/react";
import SearchBar from "./search-bar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  it("renders search input", () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
  });

  it("handles input changes", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Search...");
    await user.type(searchInput, "test search");
    expect(searchInput).toHaveValue("test search");
  });
});
