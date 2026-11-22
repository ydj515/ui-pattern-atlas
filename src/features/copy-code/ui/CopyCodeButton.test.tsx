import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CopyCodeButton } from "@/features/copy-code/ui/CopyCodeButton";

function mockClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CopyCodeButton", () => {
  it("copies the code and confirms it", async () => {
    const writeText = vi.fn(() => Promise.resolve());
    render(<CopyCodeButton code="const a = 1;" fileName="a.ts" />);
    mockClipboard(writeText);

    await userEvent.click(screen.getByRole("button", { name: "a.ts 코드 복사" }));
    expect(writeText).toHaveBeenCalledWith("const a = 1;");
    expect(await screen.findByText("복사됨")).toBeInTheDocument();
  });

  it("reports a failure when the clipboard is unavailable", async () => {
    render(<CopyCodeButton code="x" fileName="a.ts" />);
    mockClipboard(() => Promise.reject(new Error("denied")));

    await userEvent.click(screen.getByRole("button", { name: "a.ts 코드 복사" }));
    expect(await screen.findByText("복사 실패")).toBeInTheDocument();
  });
});
