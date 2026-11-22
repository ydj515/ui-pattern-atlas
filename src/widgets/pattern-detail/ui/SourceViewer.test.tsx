import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

const CODE = 'export function Example() {\n  return <button type="button">저장</button>;\n}\n';

const SOURCE = {
  fileName: "Example.tsx",
  role: "Component",
  load: () => Promise.resolve({ default: CODE }),
} as const;

afterEach(() => {
  vi.doUnmock("@/shared/lib/highlightCode");
  vi.resetModules();
});

describe("SourceViewer", () => {
  it("loads the source text on demand, shows plain code first, then colours it like VS Code Dark+", async () => {
    const { SourceViewer } = await import("./SourceViewer");
    render(<SourceViewer sources={[SOURCE]} />);
    const block = screen.getByLabelText("Example.tsx 소스 코드");
    await waitFor(() => expect(block).toHaveTextContent("export function Example()"));

    await waitFor(() => expect(block.querySelector("span[style*='color']")).not.toBeNull(), {
      timeout: 5000,
    });
    // Tokens keep the exact source text.
    expect(block.textContent).toBe(CODE.trimEnd().split("\n").join(""));
    const tokenNamed = (text: string) =>
      [...block.querySelectorAll("span")].find((span) => span.textContent === text);
    // Dark+ colours control keywords purple and storage keywords blue, like VS Code.
    expect(tokenNamed("export")).toHaveStyle({ color: "#C586C0" });
    expect(tokenNamed("function")).toHaveStyle({ color: "#569CD6" });
  });

  it("keeps the plain code readable when the highlighter cannot load", async () => {
    vi.doMock("@/shared/lib/highlightCode", () => ({
      highlightCode: () => Promise.reject(new Error("offline")),
    }));
    const { SourceViewer } = await import("./SourceViewer");
    render(<SourceViewer sources={[SOURCE]} />);
    const block = screen.getByLabelText("Example.tsx 소스 코드");

    await waitFor(() => expect(block).toHaveTextContent('<button type="button">저장</button>'));
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(block.querySelector("span[style*='color']")).toBeNull();
  });

  it("shows a retry action when the source chunk fails to load", async () => {
    const load = vi
      .fn<() => Promise<{ readonly default: string }>>()
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce({ default: CODE });
    const { SourceViewer } = await import("./SourceViewer");
    render(<SourceViewer sources={[{ ...SOURCE, load }]} />);

    expect(await screen.findByRole("alert")).toHaveTextContent("소스를 불러오지 못했어요");
    await userEvent.click(screen.getByRole("button", { name: "다시 시도" }));
    await waitFor(() =>
      expect(screen.getByLabelText("Example.tsx 소스 코드")).toHaveTextContent(
        "export function Example()",
      ),
    );
    expect(load).toHaveBeenCalledTimes(2);
  });
});
