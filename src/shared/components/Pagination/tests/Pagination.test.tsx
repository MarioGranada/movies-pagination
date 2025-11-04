import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "..";

describe("Pagination", () => {
  it("renders the Pagination component with correct structure", () => {
    render(<Pagination totalResults={100} />);

    const ulElements = screen.getAllByRole("list");
    expect(ulElements).toHaveLength(1);

    const liElements = screen.getAllByRole("listitem");
    expect(liElements).toHaveLength(9);
  });
});
