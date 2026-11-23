import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType } from "react";
import { describe, expect, it } from "vitest";

import { AbTestDemo } from "@/entities/pattern/catalog/ab-test/AbTestDemo";
import { BehavioralHeatmapDemo } from "@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapDemo";
import { CardSortingDemo } from "@/entities/pattern/catalog/card-sorting/CardSortingDemo";
import { DiaryStudyDemo } from "@/entities/pattern/catalog/diary-study/DiaryStudyDemo";
import { FunnelAnalysisDemo } from "@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisDemo";
import { SurveyDemo } from "@/entities/pattern/catalog/survey/SurveyDemo";
import { TreeTestingDemo } from "@/entities/pattern/catalog/tree-testing/TreeTestingDemo";
import { UsabilityTestDemo } from "@/entities/pattern/catalog/usability-test/UsabilityTestDemo";
import { UserInterviewDemo } from "@/entities/pattern/catalog/user-interview/UserInterviewDemo";

const TOGGLES: readonly (readonly [string, ComponentType, string, string, string, string])[] = [
  ["UserInterview", UserInterviewDemo, "유도 질문", "열린 질문", "맞춰 주는 답", "이유와 막힌 곳"],
  ["AbTest", AbTestDemo, "1일째", "14일째", "아직 판단할 수 없어요", "B가 0.5%p 높아요"],
  ["TreeTesting", TreeTestingDemo, "성공한 경로", "틀린 경로", "62%가", "30%가"],
  ["Survey", SurveyDemo, "한 문항", "나눈 문항", "무엇이 문제인지", "포장에 불만"],
  ["BehavioralHeatmap", BehavioralHeatmapDemo, "클릭", "스크롤", "사진에 클릭", "리뷰까지"],
  [
    "FunnelAnalysis",
    FunnelAnalysisDemo,
    "전체",
    "모바일",
    "상품 보기 → 장바구니 (68% 이탈)",
    "장바구니 → 주문서 (67% 이탈)",
  ],
];

describe("UX research demos", () => {
  it.each(TOGGLES)(
    "%s switches what it shows",
    async (_name, Demo, first, second, firstNote, secondNote) => {
      const user = userEvent.setup();
      render(<Demo />);
      expect(screen.getByRole("radio", { name: first })).toBeChecked();
      expect(screen.getByRole("status")).toHaveTextContent(firstNote);
      await user.click(screen.getByRole("radio", { name: second }));
      expect(screen.getByRole("status")).toHaveTextContent(secondNote);
    },
  );

  it("UsabilityTest reveals each observation up to the problem", async () => {
    const user = userEvent.setup();
    render(<UsabilityTestDemo />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    const next = screen.getByRole("button", { name: "다음 관찰" });
    await user.click(next);
    await user.click(next);
    expect(screen.getAllByRole("listitem")[2]).toHaveTextContent("막힘");
    await user.click(next);
    expect(next).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("사이즈 안내가 담기 버튼에서 멀어요");
    await user.click(screen.getByRole("button", { name: "처음부터" }));
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("CardSorting shows which cards were grouped with the chosen one", async () => {
    const user = userEvent.setup();
    render(<CardSortingDemo />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "쿠폰함 카드와 가장 자주 함께 묶인 카드: 적립금 (90%)",
    );
    await user.click(screen.getByRole("button", { name: "배송 조회" }));
    expect(screen.getByRole("button", { name: "배송 조회" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("status")).toHaveTextContent("반품 신청 (80%)");
  });

  it("DiaryStudy reads each day's entries", async () => {
    const user = userEvent.setup();
    const { container } = render(<DiaryStudyDemo />);
    const entries = container.querySelector("[aria-live]")!;
    expect(entries).toHaveTextContent("새벽배송 마감이 지나 있었어요");
    await user.click(screen.getByRole("button", { name: "수" }));
    expect(within(entries as HTMLElement).getByText("기록 없음")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "목" }));
    expect(entries).toHaveTextContent("21:45");
  });
});
