import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { getPageItems, Pagination } from "./Pagination";

describe("getPageItems", () => {
  it("lists every page when they all fit", () => {
    expect(getPageItems(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getPageItems(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("collapses the end near the start", () => {
    expect(getPageItems(1, 20)).toEqual([1, 2, 3, 4, 5, "ellipsis-end", 20]);
    expect(getPageItems(4, 20)).toEqual([1, 2, 3, 4, 5, "ellipsis-end", 20]);
  });

  it("collapses both sides in the middle", () => {
    expect(getPageItems(10, 20)).toEqual([1, "ellipsis-start", 9, 10, 11, "ellipsis-end", 20]);
  });

  it("collapses the start near the end", () => {
    expect(getPageItems(20, 20)).toEqual([1, "ellipsis-start", 16, 17, 18, 19, 20]);
    expect(getPageItems(17, 20)).toEqual([1, "ellipsis-start", 16, 17, 18, 19, 20]);
  });

  it("respects a wider sibling count", () => {
    expect(getPageItems(10, 30, 2)).toEqual([
      1,
      "ellipsis-start",
      8,
      9,
      10,
      11,
      12,
      "ellipsis-end",
      30,
    ]);
  });
});

describe("Pagination", () => {
  it("marks the current page and disables previous on the first page", () => {
    render(<Pagination page={1} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Page 1" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeEnabled();
  });

  it("reports the requested page", async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={5} totalPages={10} onPageChange={onPageChange} />);
    await userEvent.click(screen.getByRole("button", { name: "Next page" }));
    await userEvent.click(screen.getByRole("button", { name: "Page 10" }));
    expect(onPageChange.mock.calls).toEqual([[6], [10]]);
  });
});
