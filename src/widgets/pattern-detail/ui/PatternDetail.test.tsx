import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { findPatternBySlug } from "@/entities/pattern/catalog";
import type { Pattern, PatternGuide } from "@/entities/pattern/model/pattern";
import { PatternDetail } from "@/widgets/pattern-detail/ui/PatternDetail";

describe("PatternDetail", () => {
  it("shows the header first, then offers a retry when the guidance fails to load", async () => {
    const tabs = findPatternBySlug("tabs");
    if (!tabs) throw new Error("Missing pattern: tabs");
    const guide = await tabs.loadGuide();
    const loadGuide = vi
      .fn<() => Promise<PatternGuide>>()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValue(guide);
    const pattern: Pattern = { ...tabs, loadGuide };

    render(
      <MemoryRouter initialEntries={["/patterns/tabs"]}>
        <PatternDetail pattern={pattern} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("탭");
    expect(screen.getByLabelText("설명을 불러오는 중")).toHaveAttribute("aria-busy", "true");

    expect(await screen.findByRole("alert")).toHaveTextContent("설명을 불러오지 못했어요");
    await userEvent.click(screen.getByRole("button", { name: "다시 시도" }));
    expect(await screen.findByRole("region", { name: "Accessibility" })).toBeInTheDocument();
    expect(screen.queryByRole("alert")).toBeNull();
    expect(loadGuide).toHaveBeenCalledTimes(2);
  });
});
